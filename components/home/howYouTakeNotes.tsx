import React from 'react';
import clsx from 'clsx';
import styles from './css/pricing.module.css';


export default function MoreExpress() {
    return (
        <div>
            <div className={clsx("container pt-5 mt-5", styles.container )}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="pricing-header px-3 py-10 pt-md-5 pb-md-4 mx-auto text-center" style={{ textAlign: "center", justifyContent: "center", marginTop: 80, }}>
                            <h1 className="display-6" style={{ fontSize: 24, fontWeight: 800, textAlign: "center", color: "#4d274e" }}>How you keep and Take Notes is Everything</h1>
                            <p className="lead" style={{ fontSize: 14, textAlign: "center", color: "#7a7c82", margin: 6, fontWeight: 400 }}>Quickly build effective Notes all in One Place</p>
                            <div className="title-dash text-center" style={{ height: 6, borderRadius: 5, backgroundColor: "#542350", marginBottom: 45, display: "flex", marginLeft: 500, marginRight: 500, marginTop: 20, }} />
                        </div>
                    </div>
                    <div className="col-md-12" >
                        <div>
                            <div className={clsx("pricing-button pt-10", styles.pricinbutton)}>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-center" style={{marginBottom: 45, display: "flex", marginLeft: 450, marginRight: 450, marginTop: 20, }}>

                                    <button type="button" className={clsx("w-100 btn sm", styles.button)}>Sign Up Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}