import React, { useState } from 'react';
import TeamName from './HomeName';

const HomeTeam = () =>{
    const [count, setCount] = useState(0);

    const handleHomeButtonLess = () =>{
        setCount(count -1)
    }

    const handleHomeButtonPlus = () =>{
        setCount(count +1)
    }

    return(
        <> 
            <div>
                <h1>HOME</h1>
                <div>{count}</div>
            </div>
            <TeamName handleHomeButtonLess={handleHomeButtonLess} handleHomeButtonPlus={handleHomeButtonPlus}/>
        </>
    )
};

export default HomeTeam;