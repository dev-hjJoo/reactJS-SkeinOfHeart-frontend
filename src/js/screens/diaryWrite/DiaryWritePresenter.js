import React, { useEffect, useState } from 'react'
import '../../../css/diaryWrite.css'
import { useForm } from 'react-hook-form'
import '../../../css/commonStyle.css'
import axios from 'axios'
import qs from 'qs'
import ReactDOM from 'react-dom'
import ReactWordcloud from 'react-wordcloud'


const DiaryWritePresenter = ({ handleSubmit, addDiary, register}) => {

    const content="누군가 그것을 왜 했냐고 물었을 때 분명히 이유를 댈 수 있는 일, 특히나 이유를 여러 개나 댈 수 있는 일 중 많은 경우는 내가 정말 원해서 한 일이 아니었던 것 같다. 내가 온전히 원해서 한 일이 아니기 때문에 스스로를 합리화하기 위해서, 혹은 누군가 물어봤을 때 대응하기 위해서 이 일을 해야 하는 이유를 수만 가지를 생각한다. 그렇게 나의 생각의 당위성을 붙인다. 정작 내가 정말 하고 싶어서 했던 것은 이유를 대기 어려운 경우가 많다. 그냥 끌렸고, 원했고, 하고 싶어서 했으니까. 오히려 그런 것들은 하지 말았어야 할 이유가 존재하기도 한다. 끌려서 한 행동은 크게 이성적인 사고를 거치지 않는 것이다. 나의 성격적 특성일 수도 있고, 많은 사람들이 나처럼 이런 알고리즘을 따를 수도 있다. 뭐가 됐든 내가 하고 있는 일에 이유를 붙일 수 있다는 것은 옳은 이유가 수만가지이고, 해야 하는 이유가 수억 가지여도 사실은 내가 원하지 않은 것일 수도 있겠다는 생각이 들었다."
    let words = [];
    axios({
        url: '',
        method: 'POST',
        url: 'http://127.0.0.1:8000/ai/wordcloud/',
        data: qs.stringify({
            content: content,
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
    }).then((response) => {
        words = response.data;
        console.log(words, '!!')
        // setWordcloud(true);
    })
    return (
        <>
            <div id="diaryWrite" className="main-div" style={{ height: window.innerHeight}}>
                {/* {isWordcloud ? <ReactWordcloud words={words} /> : <></>} */}
                <div className="content">
                    <div className="left-section">
                        {/* <ReactWordcloud words={words}/> */}
                        <h1>
                            꼬인 채 방치해두었던 당신의 마음 실타래, <br /> 오늘은 풀어보시겠어요?
                        </h1>
                    </div>
                    <div className="right-section writeArea">
                        <form className="writeForm" onSubmit={handleSubmit(addDiary)}>
                            <textarea className="writeDiary" type="textarea" id="inContent" name="content" ref={register} />
                            <br />
                            <input className="writeSubmit" type="submit" value="글쓰기" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiaryWritePresenter
