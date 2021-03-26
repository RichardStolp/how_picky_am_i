import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, getRandomNumber } from './Redux/actions/actions'


function Home(){

    //const [count, setCount] = useState(0);
    const count = useSelector(state => state.count);
    const randomNumber = useSelector(state => state.randomNumber);
    const dispatch = useDispatch();

    return(
        <div>
            <p> click this</p>
            <button onClick={()=> dispatch(increaseCount())}>
            Click me
            </button>
            <p> count is {count}</p>
            <p> get a random number</p>
            <button onClick={()=> dispatch(getRandomNumber())}>
            Ranadomize me Captain
            </button>
            <p> your number is {randomNumber}</p>

        </div>
    )
}

export default Home;
