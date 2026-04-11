import { useState } from "react"

export default function Player() {
    const [run,setRun] =useState(0)
    const [six,setSix] =useState(0)
    const [four,setFour] =useState(0)

    const handleSingle = () => {
        setRun(run+1)
    }

    const handleFour = () => {
        setRun(run+4)
        setFour(four+1)
    }

    const handleSix = () => {
        setRun(run+6)
        setSix(six+1)
    }

    return(
        <div>
            <h3>BatsMan</h3>
            <h4>Runs: {run}</h4>
            {
                run >= 100 ? <h2>Century</h2> : <h2>Not Century</h2>
            }
            <p> fours: {four} | sixes: {six} </p>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}