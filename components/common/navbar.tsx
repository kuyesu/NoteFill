import React, { Fragment } from 'react'
import styles from './css/navbar.module.css'
import clsx from 'clsx'

function NavBar() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand text-danger" href="#">
                        NotFill
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
                                <a className="nav-link" href="#">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={clsx(styles.logbtn, "nav-link btn btn-danger text-white")} href="#">
                                    Log in
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </Fragment>
    );
}

export default NavBar;