import React from 'react';

const TeamName = ({ handLessAndPlus }) =>{

    return(
        <div>
            <h4>Team Name</h4>
            <button onClick={handLessAndPlus}>-</button>
            <button onClick={handLessAndPlus}>+</button>
        </div>
    )
};

export default TeamName;