import React, { Fragment } from 'react'
import styles from './css/navbar.module.css'
import clsx from 'clsx'

function NavBar() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-white mb-5">
                <div className="container-fluid">
                    <a className={clsx("navbar-brand text-danger", styles.text)} href="#">
                        NoteFill
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end m-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{fontSize: 16, marginRight: 10}}>
                                    Features
                                </a>
                            </li>
                            <li className="nav-item" style={{fontSize: 16, marginRight: 10}}>
                                <a className="nav-link" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">

                                <div className={clsx("pricing-button pt-10", styles.pricinbutton)}>
                                    <button type="button" className={clsx("btn ", styles.button)} style={{
                                        backgroundColor: "#e2642c",
                                        color: "#fff",
                                    }}>Sign In</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </Fragment>
    );
}

export default NavBar;