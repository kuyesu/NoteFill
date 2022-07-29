import React, { Fragment } from 'react'
import clsx from 'clsx';
import styles from './css/style.module.css'

function Hero() {
    return (
        <Fragment>
            <div className="text-center container">
                <div className='container'>
                    <h5 className="text-dark">
                        Whenever your startup gets mentioned on Instagram
                    </h5>
                </div>
                <div className=''>
                    <h1 className="text-danger">
                        Get Notified on Slack or Email
                    </h1>
                </div>
                <div className="container">
                    <div className="search_input container">
                        <input className={clsx(styles.search_input, "form-control form-control-lg")} type="text" placeholder="name@example.com" aria-label="default input example" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Hero;