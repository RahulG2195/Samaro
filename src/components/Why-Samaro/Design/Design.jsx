import React from "react";
import "./Design.css";
import Link from "next/link";

const Design = () => {
    return (
        <section className="why-samaro-design mt-5">
            <div className="container-fluid px-lg-5 ">
                <h2 className="ps-5 text-navy text-center">Design Range in SPC & LVT</h2>
                <div className="row g-0 ">
                    <div className="col-lg-4 col-md-4 col-sm-4 position-relative">
                        <Link href='/'>
                            <div className="img">
                                <img src="/assets/images/why-samaro/design/Mask Group 83.png" alt="" />
                            </div>
                            <div className="whySmaDesigntxt">
                                <p className="m-0 text-navy fw-bold">SPC</p>
                                <p className="m-0 text-navy">CLICK N LOCK</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 position-relative">
                        <Link href='/'>
                            <div className="img">
                                <img src="/assets/images/why-samaro/design/Mask Group 81.png" alt="" />
                            </div>
                            <div className="whySmaDesigntxt">
                                <p className="m-0 text-navy fw-bold">LVT</p>
                                <p className="m-0 text-navy">GLUE DOWN</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 position-relative">
                        <Link href='/'>
                            <div className="img">
                                <img src="/assets/images/why-samaro/design/Mask Group 82.png" alt="" />
                            </div>
                            <div className="whySmaDesigntxt">
                                <p className="m-0 text-danger opacity-50">COMING SOON ... </p>
                                <p className="m-0 text-navy fw-bold">LVT</p>
                                <p className="m-0 text-navy">PEEL & STICK</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Design;
