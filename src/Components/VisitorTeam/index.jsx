import React, { useState } from 'react';
import TeamName from './TeamName';



const VisitorTeam = () =>{
    const [count, setCount] = useState(0)

    const handLessAndPlus = () => {
        setCount(count - 1)
        setCount(count + 1)
    }


    return(
        <> 
            <div>
                <h1>VISITOR</h1>
                <div>{count}</div>
            </div>
            <TeamName handLessAndPlus={handLessAndPlus} />
        </>
    )
};

export default VisitorTeam;