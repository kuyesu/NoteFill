import React, { Fragment } from 'react'
import clsx from 'clsx';
import styles from './css/style.module.css'

function Hero() {
    return (
        <Fragment>
            <div className="text-center container pt-2">
                <div className='container'>
                    <h5 className="text-dark">
                    Collaborate and work together to stay on top of the newest trends in Note taking
                    </h5>
                </div>
                <div className=''>
                    <h1 className="text-danger pt-3 " style={{fontWeight: 600}}>
                    Newest Trend In Note Taking
                    </h1>
                </div>
                <div className="container text-center" style={{justifyContent: "center", alignItems: "center", }}>
                    <div className="search_input container pt-5" style={{justifyContent: "center", alignItems: "center", display: "flex", marginLeft: 100}}>
                        <input className={clsx(styles.search_input, "form-control form-control-lg center ")} type="text" placeholder="Name@Example.com" aria-label="default input example" 
                        style={{width: "80%", height: "50px", borderRadius: "25px", border: "1px solid #e2642c", backgroundColor: "#fff", padding: "20px", fontSize: "18px",  display: "flex", justifyContent: "center", marginLeft: "auto", marginRight: "auto", }}
                        />
                        
                                    <button type="button" className={clsx("btn ", styles.button)} style={{
                                        backgroundColor: "#e2642c",
                                        color: "#fff",
                                        marginLeft: -150,
                                        marginRight: 220,
                                        borderRadius: "25px",
                                        height: "40px"
                                    }}>Sign Up</button>
                               
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Hero;