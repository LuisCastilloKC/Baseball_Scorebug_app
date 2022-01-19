import React, { useState } from 'react';
import VisitorName from './VisitorName';



const VisitorTeam = () =>{
    const [count, setCount] = useState(0)

    const handleVisitorButtonLess = () => {
        setCount(count -1)
    }

    const handleVisitorButtonPlus = () => {
        setCount(count +1)
    }


    return(
        <> 
            <div>
                <h1>VISITOR</h1>
                <div>{count}</div>
            </div>
            <VisitorName handleVisitorButtonLess={handleVisitorButtonLess} handleVisitorButtonPlus={handleVisitorButtonPlus} />
        </>
    )
};

export default VisitorTeam;