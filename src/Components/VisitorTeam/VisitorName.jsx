import React from 'react';

const VisitorName = ({ handleVisitorButtonLess, handleVisitorButtonPlus }) =>{

    return(
        <div>
            <h4>VisitorName</h4>
            <button onClick={handleVisitorButtonLess}>-</button>
            <button onClick={handleVisitorButtonPlus}>+</button>
        </div>
    )
};

export default VisitorName;