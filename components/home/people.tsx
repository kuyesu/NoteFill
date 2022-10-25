import React, { Fragment } from 'react'
import clsx from 'clsx'
import classes from "./css/style.module.css"

function People() {
    return (
        <Fragment>
            <div className="m-0">
                <div className="container m-auto">
                    <img style={{width: "100%", height:"200px"}} className={clsx(classes.people)} src="https://s3.amazonaws.com/notify-resources/connect/responsivePeople.svg" alt="" />
                </div>
                <div className="text-center">
                    <h2 className='text-danger' style={{fontWeight: 600, fontSize: 24}}>&#10084;&#65039; These awesome people, along with others, love NoteFill </h2>
                </div>
            </div>
        </Fragment>
    );
}

export default People;