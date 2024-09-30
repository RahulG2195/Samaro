import React, { useState } from 'react';
import './FeaturedRanges.css'; // Ensure this file exists

const FeaturedRanges = () => {
    const [activeRange, setActiveRange] = useState(1);

    const ranges = [
        { id: 1, name: 'Wood Finish', description: 'Experience the natural beauty and warmth of wood with our realistic wood-look flooring', img: 'WoodFinishImage.png' },
        { id: 2, name: 'Stone Finish', description: 'Experience the natural beauty and warmth of wood with our realistic wood-look flooring', img: 'StoneFinshImage4.png' },
        { id: 3, name: 'Marble Finish', description: 'Experience the natural beauty and warmth of wood with our realistic wood-look flooring', img: 'MarleFinishImage.png' }
    ];

    return (
        <>

            <div className="featured-ranges row justify-content-center align-items-center">
                <div className="heading col-12 col-lg-3 col-md-12 text-center text-md-start">
                    <h1 className='fw-semibold text-danger '>
                        <span className='text-navy'>Featured</span> Ranges
                    </h1>
                </div>
                <div className="ranges-container col-12 col-lg-6 col-md-8 position-relative">
                    {ranges.map(range => (
                        <div
                            key={range.id}
                            className={`range-card ${activeRange === range.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveRange(range.id)}
                            onMouseLeave={() => setActiveRange(1)}
                        >
                            <div className="image">
                                <img src={`/uploads/${range.img}`} alt={range.name} />
                            </div>
                            {activeRange !== range.id && (
                                <div className='overlayName'>
                                    <p className='rotated_name fw-bold'>{range.name}</p>
                                </div>
                            )}
                            {activeRange === range.id && (
                                <div className="description ps-5 w-100">
                                    <p className='fw-semibold p-0 '>{range.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                    {ranges.map(range => (
                        <div className='position-absolute titleCont' key={range.id}>
                            {activeRange === range.id && (
                                <div className=''>
                                    <h3 className='bg-danger text-white rounded d-inline px-3 py-2 fw-bold'>{range.name}</h3>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    );
};

export default FeaturedRanges;
