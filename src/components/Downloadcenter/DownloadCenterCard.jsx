import React from 'react'
import './dwnld.css'
import Image from 'next/image'
import { Fancybox } from "@fancyapps/ui";
// import '@fancyapps/ui/dist/fancybox.css';


const DownloadCenterCard = ({ imgurl, title, date, author, WatchNowButton, Badge, pdf, video }) => {
    return (
        <>

            <div className="card dwnldcard position-relative">
                {/* <img src="..." className="card-img-top" alt="..."/> */}
                <span className='badge badge-danger text-bg-danger px-5'>{Badge}</span>

                <Image
                    src={imgurl}
                    alt="err"
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                    priority={true}
                    loading="eager"
                />
                <div className="card-body text-center lh-1 m-0 px-0  ">
                    <span className="card-text fw-medium">{title}</span>
                    <p className='small pt-2'>{date} {author}</p>
                    {WatchNowButton ?
                        (
                            <a
                                href={`/assets/images/why-samaro/${video}`}
                                // data-fancybox
                                data-fancybox="video"
                                // data-type="video"
                                // data-src={`/assets/images/why-samaro/${video}`}
                            >
                                <button className='Downloadbtn text-danger border-danger rounded-pill py-1 me-2 fw-semibold px-4'>
                                    Watch Now</button></a>) :

                        (
                            <a href={`/uploads/${pdf}`}
                                download={pdf}
                            >
                                <button className='Downloadbtn text-danger border-danger rounded-pill py-1 me-2 fw-semibold px-4'>
                                    Download</button>
                            </a>
                        )}
                </div>
            </div>
        </>
    )
}

export default DownloadCenterCard