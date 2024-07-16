import React from 'react';
import "./Social.css";
import { InstagramEmbed } from 'react-social-media-embed';

const Social = () => {
    return (
        <section className="social">
            <div className="container h-screen">
                <h2 className="text-center">let's get <span>social</span></h2>
                <div className='d-flex align-items-center justify-content-center mt-4 mb-3 instagramimg'>
                    <div className='instaLogo'>
                        <img src="/assets/images/home/social/Group 29049.svg" alt="Instagram Logo" className='w-75' />
                    </div>
                    <div>
                        <a href="https://www.instagram.com/samaroflooring?igsh=amowMmMyeHU1eXVh" target="_blank" rel="noopener noreferrer" className='idAndbio'>
                            <span className='instaid'>@SAMAROFLOORING</span>
                            <p className='instabio'>Where Indian Craftsmanship Meets Global Luxury,<br />Ready to Elevate Your World.</p>

                        </a>
                    </div>
                </div>

                <iframe className='instagramSliider' src="https://widget.tagembed.com/156029?view" style={{ width: "100%", height: "300px" }} allowtransparency="true"></iframe>
            </div>
        </section>
    )
}

export default Social;
