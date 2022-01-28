import React from 'react'

let score=0

const Main = () => {

    function select(){
        score++
    }

    function last(){
        score++
        document.getElementById('result').style.display='block'
    }

    function wrong(){
        document.getElementById('result').style.display='block'
    }

    function end(){
        document.getElementById('score').innerHTML='Score : '+score+'/5'
    }

    return(
        <div>
            <div className='body'>
                <div className='card'>
                    <p id='question'>Who is the father of our nation ?</p>
                    <div id='answer'>
                        <p id='opt' onClick={select}>Mahatma Gandhi</p>
                        <p id='opt'>Jawaharlal Nehru</p>
                        <p id='opt'>Donald Trump</p>
                        <p id='opt'>Barrack Obama</p>
                    </div>
                </div>
                <br/>
                <div className='card'>
                    <p id='question'>What is the color of the leaves ?</p>
                    <div id='answer'>
                        <p id='opt'>Yellow</p>
                        <p id='opt'>Blue</p>
                        <p id='opt' onClick={select}>Green</p>
                        <p id='opt'>Red</p>
                    </div>
                </div>
                <br/>
                <div className='card'>
                    <p id='question'>What is the color of fire ?</p>
                    <div id='answer'>
                        <p id='opt' onClick={select}>Yellow</p>
                        <p id='opt'>Blue</p>
                        <p id='opt'>Green</p>
                        <p id='opt'>Red</p>
                    </div>
                </div>
                <br/>
                <div className='card'>
                    <p id='question'>What color is the sky ?</p>
                    <div id='answer'>
                        <p id='opt'>Black</p>
                        <p id='opt'>Red</p>
                        <p id='opt'>Green</p>
                        <p id='opt' onClick={select}>Blue</p>
                    </div>
                </div>
                <br/>
                <div className='card'>
                    <p id='question'>In which year 'Lenovo' was founded ?</p>
                    <div id='answer'>
                        <p id='opt' onClick={wrong}>1996</p>
                        <p id='opt' onClick={last}>1984</p>
                        <p id='opt' onClick={wrong}>1986</p>
                        <p id='opt' onClick={wrong}>1982</p>
                    </div>
                </div>
            </div>
            <br/>
            <div>
            <p id='result' onClick={end}>View Score</p>
            <h2 id='score'></h2>
            </div>
        </div>
    )
}

export default Main