"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button, Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const WhysamaroBenefitsEditor = () => {
  const [benefits, setBenefits] = useState([]);
  const [initialBenefits, setInitialBenefits] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await axios.get('/api/admin/whySamaro_benifits');
        const formattedBenefits = response.data.map(benefit => ({
          ...benefit,
          subpoints: benefit.subpoints.split(',').map(subpoint => subpoint.trim())
        }));
        setBenefits(formattedBenefits);
        setInitialBenefits([...formattedBenefits]);
      } catch (error) {
        console.error('Error fetching benefits data:', error);
      }
    };

    fetchBenefits();
  }, []);

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  const handleSave = async () => {
    try {
      const updatedBenefits = await Promise.all(benefits.map(async (benefit) => {
        const formData = new FormData();
        formData.append('id', benefit.id);
        formData.append('point_heading', benefit.point_heading);
        formData.append('subpoints', benefit.subpoints.join(', '))

        if (benefit.logo instanceof File) {
          formData.append('logo', benefit.logo);
        }

        await axios.put(`/api/admin/whySamaro_benifits`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        return {
          ...benefit,
          logo: benefit.logo instanceof File ? URL.createObjectURL(benefit.logo) : benefit.logo
        };
      }));

      setBenefits(updatedBenefits);
      setInitialBenefits([...updatedBenefits]);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating benefits data:', error);
    }
  };

  const handleCancel = () => {
    setBenefits([...initialBenefits]);
    setEditMode(false);
  };

  const handleSubpointChange = (index, subpointIndex, value) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].subpoints[subpointIndex] = value;
    setBenefits(updatedBenefits);
  };

  const handleAddSubpoint = (index) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].subpoints.push('');
    setBenefits(updatedBenefits);
  };

  const handleRemoveSubpoint = (index, subpointIndex) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].subpoints.splice(subpointIndex, 1);
    setBenefits(updatedBenefits);
  };

  const handleHeadingChange = (index, value) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].point_heading = value;
    setBenefits(updatedBenefits);
  };

  const handleLogoChange = (index, file) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].logo = file;
    setBenefits(updatedBenefits);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <h3>Why Samaro Benefits Editor</h3>
        {!editMode && (
          <Button color="secondary" onClick={handleToggleEditMode}>
            Edit
          </Button>
        )}
      </div>

      {benefits.map((benefit, index) => (
        <Card key={benefit.id} className="mb-4">
          <CardBody>
            <CardTitle tag="h5">Benefit {index + 1}</CardTitle>
            <Form>
              <FormGroup>
                <Label for={`pointHeading${index}`}>Point Heading</Label>
                <Input
                  type="text"
                  id={`pointHeading${index}`}
                  value={benefit.point_heading}
                  onChange={(e) => handleHeadingChange(index, e.target.value)}
                  disabled={!editMode}
                />
              </FormGroup>
              <FormGroup>
                <Label for={`benefitLogo${index}`}>Logo Preview</Label><br />
                {benefit.logo && typeof benefit.logo === 'string' && (
                  <CardImg src={`/uploads/${benefit.logo}`} alt="Benefit Logo" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                )}
              </FormGroup>
              {editMode && (
                <FormGroup>
                  <Label for={`benefitLogoFile${index}`}>Upload Logo File</Label>
                  <Input
                    type="file"
                    id={`benefitLogoFile${index}`}
                    onChange={(e) => handleLogoChange(index, e.target.files[0])}
                  />
                </FormGroup>
              )}
              <FormGroup>
                <Label for={`subpoints${index}`}>Subpoints</Label>
                {benefit.subpoints.map((subpoint, subpointIndex) => (
                  <div key={subpointIndex} className="d-flex mb-2">
                    <Input
                      type="text"
                      value={subpoint}
                      onChange={(e) => handleSubpointChange(index, subpointIndex, e.target.value)}
                      disabled={!editMode}
                    />
                    {editMode && (
                      <Button color="danger" className="ml-2" onClick={() => handleRemoveSubpoint(index, subpointIndex)}>
                        Remove
                      </Button>
                    )}
                  </div>
                ))}
                {editMode && (
                  <Button color="primary" onClick={() => handleAddSubpoint(index)}>
                    Add Subpoint
                  </Button>
                )}
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      ))}

      {editMode && (
        <div className="d-flex gap-2">
          <Button color="success" onClick={handleSave}>
            Save
          </Button>
          <Button color="success" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      )}
    </Container>
  );
};

export default WhysamaroBenefitsEditor;
