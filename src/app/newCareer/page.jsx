import Image from 'next/image'
import React from 'react'
import './newCareer.css'
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Link from 'next/link';

const page = () => {

    const jobs = [
        {
            title: 'Purchase Head',
            type: 'Full Time',
            qualification: 'Any Graduate having relevant experience',
            location: 'H.O. Mumbai',
            positions: '01',
            experience: '15+',
        },
        {
            title: 'General Manager - Sales Operations',
            type: 'Full Time',
            qualification: 'Any Graduate having relevant experience',
            location: 'H.O. Mumbai',
            positions: '01',
            experience: '15+',
        },
        {
            title: 'ZSM - Sales Operations',
            type: 'Full Time',
            qualification: 'Any Graduate having relevant experience',
            location: 'Mumbai',
            positions: '01',
            experience: '10 to 12 years',
        },
        {
            title: 'ZSM - Sales Operations',
            type: 'Full Time',
            qualification: 'Any Graduate having relevant experience',
            location: 'Chennai',
            positions: '01',
            experience: '10 to 12 years',
        },
        {
            title: 'ZSM - Sales Operations',
            type: 'Full Time',
            qualification: 'Any Graduate having relevant experience',
            location: 'Delhi',
            positions: '01',
            experience: '10 to 12 years',
        },
        {
            title: 'Sales Coordinator',
            type: 'Full Time',
            qualification: 'Any Graduate having relevant experience',
            location: 'H.O. Mumbai',
            positions: '01',
            experience: '5+',
        },
        {
            title: 'Deputy Plant Head',
            type: 'Full Time',
            qualification: 'CIPET Engineer',
            location: 'Factory, Kalgam, Gujarat',
            positions: '01',
            experience: '12+',
        },
        {
            title: 'Lab & Quality Head',
            type: 'Full Time',
            qualification: 'CIPET Engineer with relevant experience',
            location: 'Factory, Kalgam, Gujarat',
            positions: '01',
            experience: '12+',
        },
        {
            title: 'Maintenance Head (Electrical and Mechanical)',
            type: 'Full Time',
            qualification: 'B.E. Mechanical and Electrical',
            location: 'Factory, Kalgam, Gujarat',
            positions: '01',
            experience: '12+',
        },
        {
            title: 'Dispatch Head',
            type: 'Full Time',
            qualification: 'Any Graduate having relevant experience',
            location: 'Factory, Kalgam, Gujarat',
            positions: '01',
            experience: '15+',
        },
        {
            title: 'Mixing Head',
            type: 'Full Time',
            qualification: 'Any Graduate having relevant experience',
            location: 'Factory, Kalgam, Gujarat',
            positions: '01',
            experience: '10+',
        },
        {
            title: 'Shift Incharge',
            type: 'Full Time',
            qualification: 'CIPET Engineer with relevant experience',
            location: 'Factory, Kalgam, Gujarat',
            positions: '02',
            experience: '7+',
        },
    ];
    

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
                <div className='careerText position-absolute text-white'  >
                    <h1 className='fw-bold'>Careers</h1>
                    <p className='text-white fw-semibold fs-5'><u className='border-bottom border-white border-2'>Join Our Team</u> of Game-Changers!</p>
                    <p className='text-white fw-semibold'><Link className='text-white' href={'/'}>Home</Link> <i class="fa fa-arrow-right" aria-hidden="true"></i> Career</p>
                </div>
                <div className='careerOverlay'></div>

            </div>
            <div>
                <p className='text-black fw-semibold px-0 px-md-5 px-lg-5 w-75 text-center mx-auto pt-5 careetAbtText'>At Samaro, our success is built on the values we hold close to as an organisation. Every action we take reflects these core beliefs, shaping who we are and how we operate.</p>
            </div>
            <div className='CO'>

                <div className="row p-3 justify-content-center align-items-center">
                    <div className="col-md-4 col-lg-4 col-12">
                        <img src="/uploads/Samaro_career_opprotunities.png" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                        <h1 className='oppHeading fw-bold text-wrap w-50 text-navy'>Career <span className='text-danger'>Opportunities</span></h1>
                        <p className='me-md-5 me-lg-5 me-0 fw-semibold careetAbtText'>We offer diverse career paths across functions like Sales, Mechanical-Electrical-Plastic Engineering, Accounts & Costing, Planning, and Administration. If you want to be part of a team that values growth, collaboration, and excellence, we would love to hear from you!</p>
                        <button className='btn bg-danger rounded-pill text-white fw-medium px-3 py-2'>View Open Position &gt;</button>
                    </div>
                </div>

            </div>
            
        <section className='container'> 
            <h1 className="fw-bold text-navy text-center"><u className=' border-danger border-bottom border-2'>Our Values</u></h1>
            <div className="values-list">
                <div className="value-item">
                    <h3 className="fw-bold text-danger">Innovation :</h3>
                    <p className="fw-semibold text-navy">
                        We are constantly striving for innovation in all aspects—whether it’s our products, services, safety, or human relations. Our goal is to excel and set new standards for value, competitiveness, and profitability.
                    </p>
                </div>
                <div className="value-item">
                    <h3 className="fw-bold text-danger">Quality :</h3>
                    <p className="fw-semibold text-navy">
                        Excellence is our benchmark. By offering products and services that are best in class, we aim to lead in business growth, profitability, and technology.
                    </p>
                </div>
                <div className="value-item">
                    <h3 className="fw-bold text-danger">Trust & Respect :</h3>
                    <p className="fw-semibold text-navy">
                        People are our strength. We encourage teamwork, ensuring that all employees treat each other with trust and respect, and fostering a work environment that inspires.
                    </p>
                </div>
                <div className="value-item">
                    <h3 className="fw-bold text-danger">Customer Focus :</h3>
                    <p className="fw-semibold text-navy">
                        Our customers are at the heart of everything we do. We identify their needs and ensure our products and services deliver the best possible solutions.
                    </p>
                </div>
                <div className="value-item">
                    <h3 className="fw-bold text-danger">Action Orientation</h3>
                    <p className="fw-semibold text-navy">
                        In a rapidly changing world, speed is our competitive edge. We are agile, responsive, and proactive to stay ahead.
                    </p>
                </div>
                <div className="value-item">
                    <h3 className="fw-bold text-danger">Responsibility to Society :</h3>
                    <p className="fw-semibold text-navy">
                        We recognise our duty to society and are committed to high ethical and social standards in all our business practices.
                    </p>
                </div>
            </div>
        </section>
            <div className="Hire container px-md-5 px-lg-5 px-2 pb-5">
                <h1 className='text-navy fw-bold text-center hireHeading py-4 '><u className='border-bottom border-2 border-danger'>How We Hire</u></h1>
                <p className='fw-semibold mx-auto careetAbtText'>We understand that building a career is a crucial step, and at Samaro, we value a transparent and objective recruitment process. Our hiring decisions are based on your skills, experience, and competencies. Here’s what you can expect:</p>
                <ul className='processList'>
                    <li className='fw-bold fs-4 text-danger'>
                        Shortlisting Application
                        <p className='fw-semibold w-100 pe-0 pe-md- pe-lg-5 fs-6' >We carefully review all CVs from various sources, shortlisting candidates based on their suitability for the role.</p>

                    </li>
                    <li className='fw-bold fs-4 text-danger'>Preliminary Assessment
                        <p className='fw-semibold w-100 pe-0 pe-md- pe-lg-5 fs-6' >Shortlisted candidates go through an initial round of interviews, focusing on functional competencies while assessing aptitude and attitude.</p>
                    </li>
                    <li className='fw-bold fs-4 text-danger'>Final Interview
                        <p className='fw-semibold w-100 pe-0 pe-md- pe-lg-5 fs-6' >Those who pass the preliminary round are invited for a final interview with one or- more functional heads. During this stage, we consider both the tangible skills and the intangible qualities that define you.</p>
                    </li>
                </ul>

            </div>
            <div className='openingBanner position-relative'>
                <img src="uploads\Current_openings.jpg" alt="" />
                <h1 className='text-center fw-bold position-absolute top-50'>Current Openings</h1>
                <div className='careerOverlay2 bottom-0' ></div>

            </div>
            <Container className='py-5'>
                {jobs.map((job, index) => (
                    <Card className={`border-0 border-danger rounded-0 border-bottom ${index === 0 ? 'border-top' : ''}`}
                        key={index}>
                        <CardBody>
                            <Row className="pb-2">
                            </Row>
                            <Row className="pt-2">
                                <Col xs={12} md={6}>
                                    <h4 className="fw-bold fs-3">{job.title}</h4>
                                    <p className='d-inline-block me-5 fw-semibold'>{job.type}</p>
                                    <p className='d-inline-block fw-semibold'>{job.qualification}</p>
                                </Col>
                                <Col xs={6} md={2} className='text-center'>
                                    <p className='d-inline fw-semibold'>Location:</p>
                                    <p className='fw-semibold'>{job.location}</p>
                                </Col>
                                <Col xs={6} md={2} className='text-center'>
                                    <p className='d-inline fw-semibold'>No. of Position:</p>
                                    <p className='fw-semibold'>{job.positions}</p>
                                </Col>
                                <Col xs={6} md={2} className='text-center'>
                                    <p className='d-inline fw-semibold'>Experience:</p>
                                    <p className='fw-semibold'>{job.experience}</p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                ))}
            </Container>
        </>
    )
}

export default page