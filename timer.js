import React, {useState,useRef} from 'react';

export const Timer=()=>{
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const timeout = useRef(null)

    timeout.current=setTimeout(() => {
        if(seconds===59){
            setSeconds(0)
            setMinutes(minutes + 1) 
            
        }
        setSeconds(seconds + 1) 
    }, 100)

    const restart = () => {
            console.log(timeout.current)
            clearTimeout(timeout.current)
            setMinutes(0)
            setSeconds(0)
        }
    return(
        <div style={{margin: '15%'}}>
        <h2>Timer:</h2>
        <h3>{minutes} : {seconds}</h3>
        <button onClick={restart}>restart</button>
        </div>
    )
}
