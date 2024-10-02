import Image from 'next/image'
import React from 'react'
import './newCareer.css'

const page = () => {
    return (
        <>
            <div className='careerherobanner position-relative'>
                <Image
                    src="/uploads/career.png"
                    alt="career banner"
                    width={100}
                    height={50}
                    layout="responsive"
                    objectFit="cover"
                    className="sub-banner contact-deskresp"
                />
                <div className='careerOverlay'></div>
                {/* <img src="uploads/career.png" alt="err" /> */}
            </div>
        </>
    )
}

export default page