import React from 'react';
import NavBar from '../components/common/navbar';
import Hero from '../components/home/hero';
import People from '../components/home/people';
import Feedback from '../components/home/feedback';
import Pricing from '../components/home/pricing';
import Help from '../components/home/help';
import MoreExpress from '../components/home/howYouTakeNotes';
import Footer from '../components/common/footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <div className='relative h-screen w-100  '>
            <NavBar/>
            <Hero/>
            <People/>
            <Feedback/>
            <Help/>
            <Pricing/>
            <MoreExpress/>
            <Footer/>
        </div>
     );
}

export default Home;