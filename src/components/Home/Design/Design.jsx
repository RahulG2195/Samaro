"use client"
import Link from 'next/link'
import React from 'react'
import './Design.css'

const Design = () => {
    return (
        <section className="design">
            <div className="container mb-4">
                <div className="row mx-auto">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-6">
                        <h2 className="sub-heading ">Featured Ranges</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-lg-5">
                <div className="row g-lg-0 g-3">
                    <div className="col-lg-4 col-md-4 position-relative">
                        <Link href={`product/wood`}>
                            <img className='design-img' src="/assets/images/home/design/Mask Group 81.png" alt="err" />
                            <p className='designText'>WOOD</p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 position-relative">
                        <Link href='product/Stone'>
                            <img className='design-img' src="/assets/images/home/design/Mask Group 82.png" alt="" />
                            <p className='designText'>STONE</p>
                            {/* <span className='text-danger fw-semibold position-absolute ' style={{ left: '0' }}>COMING SOON*</span> */}
                        
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 position-relative">
                        <Link href='product/Marble'>
                            <img className='design-img' src="/assets/images/home/design/Mask Group 83.png" alt="" />
                            <p className='designText'>MARBLE</p>
                            <span className='text-danger fw-semibold position-absolute py-2 commingSoon' style={{ left: '0', opacity: '0.5', padding: '0 20px' }}>COMING SOON*</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Design