import React, { useState } from 'react';
import CounterButton from './CounterButton';

const CounterBoard = () =>{
    const [count, setCount] = useState(0);

    return(
        <> 
        <div>
            <div> 0</div>
            <div> 0 - 0</div>
            <div>0 Outs</div>
        </div>
        <CounterButton />
        </>
    )
}

export default CounterBoard;