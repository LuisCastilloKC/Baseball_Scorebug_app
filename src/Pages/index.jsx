import React from 'react'
import HomeTeam from '../Components/HomeTeam';
import CounterBoard from '../Components/CounterBoard';
import VisitorTeam from '../Components/VisitorTeam';

const Home = () => {
    return(
        <div>
            <VisitorTeam />
            <CounterBoard />
            <HomeTeam />
        </div>
    )
};

export default Home