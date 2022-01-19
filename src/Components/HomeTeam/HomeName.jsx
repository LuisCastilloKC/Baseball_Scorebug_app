import React from 'react';

const HomeName = ({ handleHomeButtonLess, handleHomeButtonPlus }) => {

    return(
        <div> 
            <h4>Team Name</h4>
            <button onClick={handleHomeButtonLess}>-</button>
            <button onClick={handleHomeButtonPlus}>+</button>
        </div>
    )
};

export default HomeName;