import React from 'react'
import './follow.css'
import { useBasicInfo } from "@/components/BasicInfoContext";

const FollowMore = () => {
    const { basicInfo } = useBasicInfo();

    return (
        <>
            <div className="align-items-center d-md-flex justify-content-center flex-wrap gap-2 mb-5">
                <div className="logo text-center">
                    <a href="#">
                        <span className=' followtxt'>Follow More</span>
                    </a>
                </div>
                <div className="social-media-inner-home d-flex justify-content-center gap-3" >
                    <div className="facebook" >
                        <a href={basicInfo.facebook_url} target="blank">
                            <img className="img p-1" src="/assets/images/social-media/Group 28057.svg" alt="err"  />
                        </a>
                    </div>
                    {/* <div className="x">
                        <a href={basicInfo.twitter_url} target="blank">
                            <img className="img " src="/assets/images/social-media/Path 98762.svg" alt="" />
                        </a>
                    </div> */}

                    {/* <div className="youtube">
                        <Link href={basicInfo.youtube_url} target="blank">
                            <img className="img" src="/assets/images/social-media/Group 28059.svg" alt="" />
                        </Link>
                    </div> */}
                    <div className="in">
                        <a href={basicInfo.linkedin_url} target="blank">
                            <img className="img" src="/assets/images/social-media/Group 28615.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowMore
