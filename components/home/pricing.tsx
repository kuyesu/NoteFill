import { FreePlan, StarterPlan, ProPlan } from './pricePlan';
import React from 'react';
import clsx from 'clsx';
import styles from './css/pricing.module.css';


export default function Pricing() {
    return (
        <div>
            <div className={clsx("container", styles.container)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="pricing-header px-3 py-10 pt-md-5 pb-md-4 mx-auto text-center" style={{textAlign: "center", justifyContent: "center", marginTop: 80,}}>
                            <h1 className="display-6" style={{fontSize: 24, fontWeight: 800,textAlign: "center",color: "#4d274e"}}>Our Pricing Plan</h1>
                            <p className="lead" style={{fontSize: 14, textAlign: "center",color: "#7a7c82", margin: 6, fontWeight: 400}}>Quickly build effective Notes all in One Place</p>
                            <div className="title-dash text-center" style={{ height: 6, borderRadius: 5,backgroundColor: "#542350", marginBottom: 45, display: "flex", marginLeft: 500, marginRight: 500, marginTop: 20,}} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <FreePlan />
                    </div>
                    <div className="col-md-4">
                        <StarterPlan />
                    </div>
                    <div className="col-md-4">
                        <ProPlan />
                    </div>
                </div>
            </div>
        </div>
    );
}