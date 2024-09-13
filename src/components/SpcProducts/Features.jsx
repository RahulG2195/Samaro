import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'; // Ensure you have these imports



const Features = ({features, title}) => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-navy fw-bold py-5">{title}</h1>
      <Row className='justify-content-center'>
        {features.map((feature, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card className="shadow-lg h-100">
              <CardBody>
                <div className="d-flex align-items-center mb-3 justify-content-center">
                  <div className="me-3">
                    <i className={`fa ${feature.icon} fa-3x text-danger `} /> {/* Use Font Awesome 4.7 syntax */}
                  </div>
                  <CardTitle tag="h5" className="text-danger mb-0 ">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardText className="fw-medium text-center  ">{feature.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Features;
