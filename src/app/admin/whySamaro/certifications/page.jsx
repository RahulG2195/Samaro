"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';

const CertificationsEditor = () => {
  const [certifications, setCertifications] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({
    id: null,
    logo: "",
    status: 1
});
  

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await axios.get('/api/admin/certifications');
        setCertifications(response.data);
        setInitialData(response.data);
      } catch (error) {
        console.error('Error fetching certifications data:', error);
      }
    };

    fetchCertifications();
  }, []);

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
            Object.entries(editedData).forEach(([key, value]) => {
                formData.append(key, value);
            });
        if (editedData.id) {
          await axios.put('/api/admin/certifications', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        } else {
          await axios.post('/api/admin/certifications', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        }
      // }
      setEditMode(false);
      setInitialData([...certifications]);
    } catch (error) {
      console.error('Error updating certifications data:', error);
    }
  };

  const handleLogoChange = (index, file,) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index].logo = file;
    setCertifications(updatedCertifications);
    setEditedData((prevData) => ({ ...prevData, logo: file }));


  };
  
  const handleAddCertification = () => {
    setCertifications(prevCertifications => [
      ...prevCertifications,
      { id: null, logo: null }
    ]);
  };

  const handleRemoveCertification = async (index, id) => {
    if (id) {
      try {
        await axios.delete('/api/admin/certifications', { data: { id }, headers: { 'Content-Type': 'application/json' } });
       setEditMode(false)
      } catch (error) {
        console.error('Error deleting certification:', error);
      }
    }
    const updatedCertifications = [...certifications];
    updatedCertifications.splice(index, 1);
    setCertifications(updatedCertifications);
  };

  const handleCancel = () => {
    setCertifications(initialData);
    setEditMode(false);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <h3>Certifications Editor</h3>
        {!editMode && (
          <Button color="secondary" onClick={handleToggleEditMode}>
            Edit
          </Button>
        )}
      </div>

      <Row>
        {certifications.map((certification, index) => (
          <Col md="6" key={certification.id || index} className="mb-4">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Certification {index + 1}</CardTitle>
                <Form>
                  <FormGroup>
                    <Label for={`certificationLogo${index}`}>Logo Preview</Label><br />
                    {certification.logo && (
                      <CardImg src={`/uploads/${certification.logo}`} alt="Certification Logo" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    )}
                  </FormGroup>
                  {editMode && (
                    <FormGroup>
                      <Label for={`certificationLogoFile${index}`}>Upload Logo File</Label>
                      <Input
                        type="file"
                        id={`certificationLogoFile${index}`}
                        onChange={(e) => handleLogoChange(index, e.target.files[0])}
                      />
                    </FormGroup>
                  )}
                </Form>
                {editMode && (
                  <Button color="danger" className="mt-2" onClick={() => handleRemoveCertification(index, certification.id)}>
                    Remove
                  </Button>
                )}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {editMode && (
        <div className='d-flex gap-2'>
          <Button color="success" onClick={handleAddCertification}>
            Add New Certification
          </Button>
          <Button color="success" className="ml-2" onClick={handleSave}>
            Save
          </Button>
          <Button color="success" className="ml-2" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      )}
    </Container>
  );
};

export default CertificationsEditor;
