import React from 'react'
import './AboutSpc.css'
// const Layers = [
//     { name: "UV Layer", description: "The UV layer can have a glossy or matt finish. It protects the surface from stains, resists UV rays and ensures that the floor does not fade after a long period of sunlight exposure." },
//     { name: "UV Layer", description: "The UV layer can have a glossy or matt finish. It protects the surface from stains, resists UV rays and ensures that the floor does not fade after a long period of sunlight exposure." },
//     { name: "UV Layer", description: "The UV layer can have a glossy or matt finish. It protects the surface from stains, resists UV rays and ensures that the floor does not fade after a long period of sunlight exposure." },
//     { name: "UV Layer", description: "The UV layer can have a glossy or matt finish. It protects the surface from stains, resists UV rays and ensures that the floor does not fade after a long period of sunlight exposure." },
//     { name: "UV Layer", description: "The UV layer can have a glossy or matt finish. It protects the surface from stains, resists UV rays and ensures that the floor does not fade after a long period of sunlight exposure." }
// ];
const AboutSpc = ({ title, desc, img, specificationTitle, layers, spc, lvt = false }) => {

    return (
        <>
            <div id="about-section" className="spc-section">
            <div className={`my-${!lvt ? '10' : '5'}`}>
                    <div className='row justify-content-center align-items-left text-center '>
                        <div className={`col-lg-${!lvt ? '8' : '10'} col-md-8`}>
                            <h1 className='display-4  text-navy fw-bold'><u className='border-bottom border-danger border-2'>{title}</u></h1>
                            <p className='lead text-muted fw-semibold mt-2'>{desc}</p>
                        </div>
                        {/* {!lvt &&
                            (
                                <div className='col-lg-3 col-md-4 text-center '>
                                    <img src={`/uploads/${img}`} alt=" Flooring" className=" img-fluid rounded shadow-lg bg-transperent" />
                                </div>
                            )
                        } */}
                    </div>
                </div>
            </div>

            {/* spc layers */}
            <div className="container">
                <div className={`row justify-content-${!lvt ? 'center' : 'left'} align-items-center mb-5`}>
                    <h1 className="text-center text-navy fw-bold col-12"><u className='border-danger border-2 border-bottom'>Product Specification</u></h1>
                    <div className={`col-lg-${!lvt ? '7' : '10'}  col-md-12 productSpecification`}>
                        <h3 className="text-navy fw-semibold p-1">{specificationTitle} :</h3>
                        <ul className="spec-list">
                            {layers.map((layer, index) => (
                                <li key={index}>
                                    <strong>{layer.name} :</strong> {layer.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {!lvt && (
                        <div className="col-lg-5 col-md-12 d-flex justify-content-center ">
                            <img
                                src={`/uploads/${img}`}
                                alt="SPC Layers"
                                className="spec-image img-fluid"
                            />
                        </div>
                    )}
                </div>
            </div>


            {/* featured Ranges */}
            {/* {spc && (<div className='container my-5'>
                <h1 className='text-center my-5 fw-bold text-danger'>Featured Ranges</h1>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-12 col-md-8 col-lg-8'>
                        <p className='text-center fw-semibold'>
                            SPC flooring is at the heart of our product line. This innovative flooring solution features a stone-polymer composite core, making it incredibly durable and stable.
                        </p>
                    </div>
                    <div className='col-12 col-md-8 col-lg-8 '>
                        <img src="/uploads/featuredRange.png" alt="" />
                    </div>
                </div>
            </div>)} */}


        </>

    )
}

export default AboutSpc