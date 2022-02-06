import React from 'react';
import CounterButton from './CounterButton';

const CounterBoard = () =>{

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