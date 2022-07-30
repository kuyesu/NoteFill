import React from 'react';
import NavBar from '../components/common/navbar';
import Hero from '../components/home/hero';
import People from '../components/home/people';
import Feedback from '../components/home/feedback';
import Pricing from '../components/home/pricing';
import Help from '../components/home/help';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return ( 
        <div>
            <NavBar/>
            <Hero/>
            <People/>
            <Feedback/>
            <Help/>
            <Pricing/>
            
        </div>
     );
}

export default Home;