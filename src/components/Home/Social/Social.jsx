// import React from 'react';
// import "./Social.css";
// import { InstagramEmbed } from 'react-social-media-embed';

// const Social = () => {
//     return (
//         <section className="social">
//             <div className="container h-screen">
//                 <h2 className="text-center">let's get <span>social</span></h2>
//                 <div className='d-flex align-items-center justify-content-center mt-4 mb-3 instagramimg'>
//                     <div className='instaLogo'>
//                         <img src="/assets/images/home/social/Group 29049.svg" alt="Instagram Logo" className='w-75' />
//                     </div>
//                     <div>
//                         <a href="https://www.instagram.com/samaroflooring?igsh=amowMmMyeHU1eXVh" target="_blank" rel="noopener noreferrer" className='idAndbio'>
//                             <span className='instaid'>@SAMAROFLOORING</span>
//                             <p className='instabio'>Where Indian Craftsmanship Meets Global Luxury,<br />Ready to Elevate Your World.</p>

//                         </a>
//                     </div>
//                 </div>

//                 <iframe className='instagramSliider' src="https://widget.tagembed.com/156029?view" style={{ width: "100%", height: "300px" }} allowtransparency="true"></iframe>
//             </div>
//         </section>
//     )
// }

// export default Social;


import React from 'react'
import "./Social.css";

const Social = () => {
    return (
        <section className="social">
            <div className="container">
                <h2 className="text-center ">let's get <span>social</span></h2>
                <div className='d-flex align-items-center justify-content-center mt-4 mb-3 instagramimg'>
                    <div className='instaLogo'><img src="/assets/images/home/social/Group 29049.svg" alt="err" className='w-75' /></div>
                    <div>
                    <a href="https://www.instagram.com/samaroflooring?igsh=amowMmMyeHU1eXVh" target="_blank" className='idAndbio'>
                        <span className='instaid'>@SAMAROFLOORING</span>
                        <p className='instabio'>Where Indian Craftsmanship Meets Global Luxury, <br />Ready to Elevate Your World.</p>
                    </a>
                    </div>
                    {/* <a href="https://www.instagram.com/samaroflooring?igsh=amowMmMyeHU1eXVh" target="_blank"><img src="/assets/images/home/social/Group 28501.svg" alt="err" className='w-25 instagram my-2++*' /></a> */}
                </div>
                {/* <div className="row justify-content-center"> */}
                    {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12"> */}
                    <a href="https://www.instagram.com/samaroflooring?igsh=amowMmMyeHU1eXVh" target="_blank">
                        <div className=" row justify-content-center gap-2">
                            <div className="image col-lg-2 col-md-4 col-sm-4 col-10">
                                <img src="/assets/images/social-media/01.webp" alt="" />
                            </div>
                            <div className="image col-lg-2 col-md-4 col-sm-4 col-10">
                                <img src="/assets/images/social-media/02.webp" alt="" />
                            </div>
                            <div className="image col-lg-2 col-md-4 col-sm-4 col-10">
                                <img src="/assets/images/social-media/03.webp" alt="" />
                            </div>
                            <div className="image col-lg-2 col-md-4 col-sm-4 col-10">
                                <img src="/assets/images/social-media/04.webp" alt="" />
                            </div>
                           
                        </div>
                        </a>
                    {/* </div> */}
                {/* </div> */}
            </div>
        </section>
    )
}

export default Social



