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
          <div className="container py-5" style={{maxWidth: "80%"}}>
            <form>
              <label
                htmlFor="email"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Your Email
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                <input
                  type="email"
                  id="email"
                  className={clsx(
                    "block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-100 focus:border-blue-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                    styles.search_input
                  )}
                  placeholder="Enter your Email"
                  required
                  style={{
                    height: "30px",
                    borderRadius: "25px",
                    border: "1px solid #e2642c",
                    backgroundColor: "#fff",
                    padding: "20px",
                    paddingLeft: "30px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                <button
                  type="submit"
                  className={clsx(
                    "text-white absolute right-2.5 bottom-1.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                    styles.button
                  )}
                  style={{
                    backgroundColor: "#e2642c",
                    color: "#fff",
                    borderRadius: "25px",
                    height: "38px",
                  }}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
}

export default Hero;