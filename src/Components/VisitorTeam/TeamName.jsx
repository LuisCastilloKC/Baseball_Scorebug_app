import React from 'react';

const TeamName = ({ handleLess }) =>{

    return(
        <div>
            <h4>Team Name</h4>
            <button onClick={handleLess}>-</button>
            <button>+</button>
        </div>
    )
};

export default TeamName;