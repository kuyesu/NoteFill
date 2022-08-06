import React, { Fragment } from 'react'
import Modal from '@mui/material/Modal';
import styles from './css/navbar.module.css'
import clsx from 'clsx'
import { useRouter } from 'next/router';
// import Login from '../../pages/signIn'


// modal settings
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function NavBar() {
    const [open, setOpen] = React.useState(false);
     const router = useRouter();
     const routeData1 = () => router.push("/login");
     const handleClickSignIn = () => {
       routeData1();
     };
    const handleClose = () => setOpen(false);


    return (
      <Fragment>
        <nav className="navbar navbar-expand-md navbar-light  mb-5 pt-0 ml-5">
          <div className="container flex items-center space-x-2 md:space-x-10">
            <a
              className={clsx("navbar-brand ", styles.text)}
              href="#"
            >
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
            <div
              className="collapse navbar-collapse justify-content-end m-5"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    style={{ fontSize: 18, marginRight: 20 }}
                  >
                    Features
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{ fontSize: 16, marginRight: 10 }}
                >
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <div
                    className={clsx(
                      "pricing-button ",
                      styles.pricinbutton
                    )}
                  >
                    <button
                      onClick={handleClickSignIn}
                      type="button"
                      className={clsx("btn ", styles.button)}
                      style={{
                        backgroundColor: "#e2642c",
                        color: "#fff",
                        borderRadius: "25px",
                        height: "40px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                      }}
                    >
                      Sign In
                    </button>
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