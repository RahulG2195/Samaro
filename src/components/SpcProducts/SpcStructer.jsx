import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap';

const specifications = [
    { label: "Wear Layer", value: "0.3mm" },
    { label: "Thickness", value: " 4mm" },
    { label: "Dimensions", value: "9 X 48, 7 X 48, customized" },
    { label: "Material", value: "100% Virgin Material" },
    { label: "Backing Layer", value: "EVA, IXPE" },
    { label: "Edge Detail", value: "Squared edge & Beveled edge available" },
    { label: "Surface Texture", value: "Wood grain, Deep embossing grain, Light embossing grain" },
    // { label: "Feature", value: "Formaldehyde Free, Waterproof, Strong Stability" },
    { label: "Installation", value: "Clickcore installation" },
    { label: "Application", value: "Residential and Commercial" },
];

const features = [
    {
        id: 1,
        title: 'Raw materials 100% environment protection ',
        description:
            'The main component of SPC floor is vinyl resin, which is non-porous and will not absorb moisture, making it highly resistant to humidity.',
        image: '/uploads/2.png',
    },
    {
        id: 2,
        title: 'Superior antiskid',
        description:
            'The main component of SPC floor is vinyl resin, which is non-porous and will not absorb moisture, making it highly resistant to humidity.',
        image: '/uploads/2.png',
    },
    {
        id: 3,
        title: 'Insanely thin and light',
        description:
            'The main component of SPC floor is vinyl resin, which is non-porous and will not absorb moisture, making it highly resistant to humidity.',
        image: '/uploads/2.png',
    },
    {
        id: 4,
        title: 'Antimildew and antibacterial',
        description:
            'The main component of SPC floor is vinyl resin, which is non-porous and will not absorb moisture, making it highly resistant to humidity.',
        image: '/uploads/2.png',
    },
    {
        id: 5,
        title: 'Waterproof and damp proof',
        description:
            'The main component of SPC floor is vinyl resin, which is non-porous and will not absorb moisture, making it highly resistant to humidity.',
        image: '/uploads/2.png',
    },
    {
        id: 6,
        title: 'Warm and comfortable',
        description:
            'SPC floor, due to its high performance in thermal conductivity, is ideal for comfortable floor heating.',
        image: '/uploads/2.png',
    },
    {
        id: 7,
        title: 'Fire retardant',
        description:
            'With a flame auto-extinguish feature, SPC flooring will not support combustion, making it highly fire-resistant.',
        image: '/uploads/2.png',
    },
    {
        id: 8,
        title: 'High-grade anti-abrasion, high strength',
        description:
            'The wear-resistant layer can handle up to 10,000 turns and can last 10-15 years based on thickness.',
        image: '/uploads/2.png',
    },
    {
        id: 9,
        title: 'Sound absorption and noise reduction',
        description:
            'SPC floors have superior sound absorption of up to 20 decibels, making them ideal for quiet environments.',
        image: '/uploads/2.png',
    },
    {
        id: 10,
        title: 'Environmentally-friendly and renewable',
        description:
            'SPC floors are made from renewable and recyclable materials, contributing to sustainability.',
        image: '/uploads/2.png',
    },
    {
        id: 11,
        title: 'Beautiful and fashionable',
        description:
            'SPC floors use advanced click lock technology to maintain the beauty of the floor with minimal gaps.',
        image: '/uploads/2.png',
    },
    {
        id: 12,
        title: 'High safety',
        description:
            'Comfortable to walk on with high slip resistance, reducing the risk of falls.',
        image: '/uploads/2.png',
    },
];

const SpcStructer = () => {
    return (
        <Container className="">
            {/* Header */}
            {/* <Row>
                <Col>
                    <h1 className="text-danger text-center fw-bold my-4">PRODUCT STRUCTURE</h1>
                </Col>
            </Row>

            <Row className="mt-4 justify-content-center">
                <Col md={6} sm={12}>
                    <img
                        src="/uploads/spcLayers.png" 
                        alt="Product Structure"
                        className="img-fluid"
                    />
                </Col>
            </Row> */}

            {/* Specifications table */}
            <Row className="mt-5 justify-content-center">
                <Col md={10}>
                    <h3 className='text-navy fw-semibold '><u className='border-danger border-bottom border-2'>Specifications of SPC Flooring</u> :</h3>
                    <Table bordered>
                        <tbody>
                            {specifications.map((spec, index) => (
                                <tr key={index} >
                                    <th className='bg-body-tertiary'>{spec.label}</th>
                                    <td className='bg-body-tertiary'>{spec.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Features Section */}
            {/* <Row className="mt-5 ">
                <Col md={6} className="mb-4">
                    {features.slice(0, 6).map((feature, index) => (
                        <Row key={feature.id} className="mb-4 justify-content-center align-items-center">
                            {index % 2 === 0 ? (
                                <>
                                    <Col md={4} className="order-1 order-md-1">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="img-fluid"
                                        />
                                    </Col>
                                    <Col md={8} className="order-2 order-md-2">
                                        <h5>{index + 1}. {feature.title}</h5>
                                        <p className="fw-medium">{feature.description}</p>
                                    </Col>
                                </>
                            ) : (
                                <>
                                    <Col md={8} className="order-2 order-md-1">
                                        <h5>{index + 1}. {feature.title}</h5>
                                        <p className="fw-medium">{feature.description}</p>
                                    </Col>
                                    <Col md={4} className="order-1 order-md-2">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="img-fluid"
                                        />
                                    </Col>
                                </>
                            )}
                        </Row>
                    ))}
                </Col>

                <Col md={6} className="mb-4">
                    {features.slice(6).map((feature, index) => (
                        <Row key={feature.id} className="mb-4 justify-content-center align-items-center ">
                            {index % 2 === 0 ? (
                                <>
                                    <Col md={4} className="order-1 order-md-1">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="img-fluid"
                                        />
                                    </Col>
                                    <Col md={8} className="order-2 order-md-2">
                                        <h5>{index + 7}. {feature.title}</h5>
                                        <p className="fw-medium">{feature.description}</p>
                                    </Col>
                                </>
                            ) : (
                                <>
                                    <Col md={8} className="order-2 order-md-1">
                                        <h5>{index + 7}. {feature.title}</h5>
                                        <p className="fw-medium">{feature.description}</p>
                                    </Col>
                                    <Col md={4} className="order-1 order-md-2">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="img-fluid"
                                        />
                                    </Col>
                                </>
                            )}
                        </Row>
                    ))}
                </Col>
            </Row> */}


        </Container>
    )
}

export default SpcStructer