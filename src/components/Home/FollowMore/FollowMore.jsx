import Link from 'next/link'
import React from 'react'
import './follow.css'

const FollowMore = () => {
    return (
        <>
            <div className="align-items-center d-md-flex justify-content-center flex-wrap gap-2 my-5">
                <div className="logo text-center">
                    <Link href="#">
                        <span className=' small followtxt'>Follow More</span>
                    </Link>
                </div>
                <div className="social-media-inner-home d-flex justify-content-center gap-3" >
                    <div className="facebook" >
                        <Link href="#">
                            <img className="img p-1" src="/assets/images/social-media/Group 28057.svg" alt="err"  />
                        </Link>
                    </div>
                    <div className="x">
                        <Link href="#">
                            <img className="img " src="/assets/images/social-media/Path 98762.svg" alt="" />
                        </Link>
                    </div>

                    <div className="youtube">
                        <Link href="">
                            <img className="img" src="/assets/images/social-media/Group 28059.svg" alt="" />
                        </Link>
                    </div>
                    <div className="in">
                        <Link href="">
                            <img className="img" src="/assets/images/social-media/Group 28615.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowMore