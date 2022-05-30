import React, { useState } from 'react';

const Counter = () => {

    const [counter , setCounter ] = useState(0)

    const handleIncraese = () : void =>{
        setCounter (counter + 1)
    }
    const handleDecrease = () : void =>{
        setCounter (counter - 1)
    }

    return (
        <div>
            <h2>Counter with typeScript</h2>

            <h2>{counter}</h2>

            <button onClick={handleIncraese} style={{backgroundColor:"red"}}>InCrease </button>

            <button onClick={handleDecrease} style={{backgroundColor:"red"}}>InCrease </button>
        </div>
    );
};

export default Counter;