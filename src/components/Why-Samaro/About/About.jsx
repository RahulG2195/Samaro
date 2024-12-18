import React, { useEffect, useState } from 'react'
import "./About.css"
import axios from 'axios';
const About = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        setShowMore(!showMore);
    };

    const previewLength = 600;

    const [videoData, setVideoData] = useState({
        id: '',
        heading: '',
        description: '',
        logo_file: null,
        logo_filename: '',
        video_file: null,
        video_filename: ''
    });

    useEffect(() => {
        // Fetch video data based on videoId
        const fetchVideoData = async () => {
            try {
                const response = await axios.get(`/api/admin/whysamaro_video`); // Adjust endpoint as per your API route
                setVideoData(response.data);
            } catch (error) {
                console.error('Error fetching video data:', error);
            }
        };

        fetchVideoData();
    }, []);

    const formattedContent = videoData.heading
        ? videoData.heading.split(' ').map((word, index) => {
            // Convert both word and "journey" to lowercase for case-insensitive comparison
            if (word.toLowerCase() == "journey") {
                return <span key={index} className="fw-semibold">{word}</span>;
            } else {
                return <React.Fragment key={index}> {word} </React.Fragment>;
            }
        })
        : null;
    let description = videoData.description

    return (
        <section className='about bg-navy '>
            <div className="">
                <div className="row gap-5 align-items-center py-5 justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 headline text-end">
                        <p className='text-white tagline '>
                            {/* The amazing <span className='fw-bold'>JOURNEY</span> of */}
                            {formattedContent}
                        </p>
                        <img className='logo' src={`/uploads/${videoData.logo}`} alt="" />
                    </div>
                    {/* <div className="col-lg-7 col-md-7 col-sm-12"> */}
                    {/* <p className='text-white company-history text-start'> */}
                    {/* {videoData.description} */}
                    {/* With over 50 years of manufacturing expertise in the plastic processing industry, Samaro Global Industries has emerged as a leader in the SPC and LVT flooring sector since our inception in 2019. Our unwavering commitment to innovation, quality, and sustainability has propelled us to become India's largest SPC and LVT manufacturer within just three years, a remarkable feat underscored by our state-of-the-art manufacturing facility in Gujarat boasting an annual installed capacity of over 15 million square meters. */}
                    {/* </p> */}
                    {/* </div>  */}
                    <div className="col-lg-7 col-md-7 col-sm-12">
                        <p className='text-white company-history text-start'>
                            {isExpanded ? description : description.substring(0, previewLength) + (description.length > previewLength ? '...' : '')}
                            {!isExpanded && description.length > previewLength && (
                                <button onClick={toggleExpand} className="fw-bold bg-transparent border-0 text-white">
                                    Read More
                                </button>
                            )}
                            {isExpanded && (
                                <button onClick={toggleExpand} className="fw-bold bg-transparent border-0 text-white">
                                    Show Less
                                </button>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About