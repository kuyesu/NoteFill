import React from 'react';
import NavBar from '../components/common/navbar';
import Hero from '../components/home/hero';
import People from '../components/home/people';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return ( 
        <div>
            <NavBar/>
            <Hero/>
            <People/>
            
        </div>
     );
}

export default Home;