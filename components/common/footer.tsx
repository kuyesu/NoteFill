import React from 'react';
import clsx from 'clsx';
import styles from './css/footer.module.css';


export default function Footer() {
    return (
        <div>
            <div className={clsx("container pt-3",)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center" style={{ marginBottom: 45, display: "flex", marginLeft: 450, marginRight: 450, marginTop: 20, }}>
                            <div className="pricing-header px-3 py-1 pt-md-5  mx-auto text-center" style={{ textAlign: "center", justifyContent: "center", marginTop: 80, }}>
                                <footer>
                                    <a href="#">
                                    <h1 className={clsx("display-4", styles.text)} style={{fontSize: 38, fontWeight: 800,textAlign: "center",color: "#4d274e", fontFamily: 'Pacifico,  cursive',}}>NoteFill</h1>
                                    </a>
                                    <div className="footer-copyright" style={{
                                        fontSize: 13,
                                        lineHeight: 1.66,
                                        textAlign: "center",
                                        color: "#5b6b82", 
                                        fontFamily: "Open Sans, sans-serif",
                                        fontWeight: 500,
                                        letterSpacing: 0
                                    }}>
                                        <p>Copyright © NoteFill. All Rights Reserved.</p>
                                        <p>Keep it with NoteFill. Collaborate and work together to stay on top of the newest trends in Note taking</p>
                                        <p>
                                            <a href="/privacy" className="underline" target="_blank">Privacy Policy</a>
                                        </p>
                                    </div>
                                </footer>
                                <div className="title-dash text-center" style={{ height: 6, borderRadius: 5, backgroundColor: "#542350", display: "flex", marginLeft: 500, marginRight: 500, marginTop: 20, }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}