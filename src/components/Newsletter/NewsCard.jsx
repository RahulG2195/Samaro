import Image from 'next/image'
import React from 'react'

const NewsCard = ({image}) => {
    return (
        <>
            <div >
                <div className='newscardImg position-relative'>
                    <Image
                        src='/assets/images/Newletter/Mask Group 219.png'
                        alt="Description of image"
                        width={100}
                        height={100}
                        layout="responsive"
                        objectFit="cover"
                    />
                    <div className="playbtn position-absolute ">
                        <Image
                            src="/assets/images/Newletter/Polygon 13.svg"
                            alt="Description of image"
                            width={100}
                            height={100}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewsCard