import React, { Fragment } from 'react'
import clsx from 'clsx';
import Modal from '@mui/material/Modal';
import styles from './css/style.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Hero() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const router = useRouter()
    const routeData = () => router.push('/')

    const handleClick = () => {
        // routeData()
        handleOpen()

    }

    return (
      <Fragment>
        <div className="text-center container pt-2 overflow-hidden">
          <div className="container">
            <h5 className="text-dark" style={{ fontWeight: 700, fontSize: 22 }}>
              Collaborate and work together to stay on top of the newest trends
              in Note taking
            </h5>
          </div>
          <div className="">
            <h1
              className="text-danger pt-3 "
              style={{ fontWeight: 700, fontSize: 42 }}
            >
              Newest Trend In Note Taking
            </h1>
          </div>
          <div
            className="container text-center"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div
              className="search_input container pt-5"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginLeft: 100,
              }}
            >
              <input
                className={clsx(
                  styles.search_input,
                  "form-control form-control-lg center "
                )}
                type="text"
                placeholder="Name@Example.com"
                aria-label="default input example"
                style={{
                  width: "80%",
                  height: "40px",
                  borderRadius: "25px",
                  border: "1px solid #e2642c",
                  backgroundColor: "#fff",
                  padding: "20px",
                  paddingLeft: "30px",
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Link href="/signup">
                <button
                  type="button"
                  className={clsx("btn ", styles.button)}
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#e2642c",
                    color: "#fff",
                    marginLeft: -170,
                    marginRight: 192,
                    borderRadius: "25px",
                    height: "38px",
                  }}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Hero;