"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button, Card, CardBody, CardImg, CardTitle, Alert } from 'reactstrap';

const VisionMissionEditor = () => {
  const [visionData, setVisionData] = useState({
    title: '',
    logo: null,
    description: ''
  });
  const [visionError, setVisionError] = useState('');

  const [missionData, setMissionData] = useState({
    title: '',
    logo: null,
    description: ''
  });
  const [missionError, setMissionError] = useState('');

  const [initialVisionData, setInitialVisionData] = useState(null);
  const [initialMissionData, setInitialMissionData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchVisionData = async () => {
      try {
        const response = await axios.get('/api/admin/vision');
        setVisionData({
          title: response.data.title,
          logo: response.data.logo,
          description: response.data.subpoints.split(',').map(subpoint => subpoint.trim()).join(', ')
        });
      } catch (error) {
        console.error('Error fetching Vision data:', error);
      }
    };

    const fetchMissionData = async () => {
      try {
        const response = await axios.get('/api/admin/mission');
        setMissionData({
          title: response.data.title,
          logo: response.data.logo,
          description: response.data.subpoints.split(',').map(subpoint => subpoint.trim()).join(', ')
        });
      } catch (error) {
        console.error('Error fetching Mission data:', error);
      }
    };

    fetchVisionData();
    fetchMissionData();
  }, []);

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
    if (!editMode) {
      setInitialVisionData(visionData);
      setInitialMissionData(missionData);
    }
  };

  const handleSave = async () => {
    if (!visionData.title || !visionData.description || !missionData.title || !missionData.description) {
      setVisionError('Please fill all required fields for Vision.');
      setMissionError('Please fill all required fields for Mission.');
      return;
    }

    try {
      const visionFormData = new FormData();
      visionFormData.append('title', visionData.title.trim());
      visionFormData.append('subpoints', visionData.description.trim());
      if (visionData.logo) {
        visionFormData.append('logo', visionData.logo);
      }
      await axios.put('/api/admin/vision', visionFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const missionFormData = new FormData();
      missionFormData.append('title', missionData.title.trim());
      missionFormData.append('subpoints', missionData.description.trim());
      if (missionData.logo) {
        missionFormData.append('logo', missionData.logo);
      }

      await axios.put('/api/admin/mission', missionFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setEditMode(false);
    } catch (error) {
      console.error('Error updating data:', error);
      setVisionError('Failed to update Vision data. Please try again.');
      setMissionError('Failed to update Mission data. Please try again.');
    }
  };

  const handleCancel = () => {
    setVisionData(initialVisionData);
    setMissionData(initialMissionData);
    setEditMode(false);
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (type === 'vision') {
      setVisionData(prevData => ({
        ...prevData,
        logo: file
      }));
    } else if (type === 'mission') {
      setMissionData(prevData => ({
        ...prevData,
        logo: file
      }));
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <h3>Vision & Mission Editor</h3>
        {!editMode && (
          <Button color="secondary" onClick={handleToggleEditMode}>
            Edit
          </Button>
        )}
      </div>

      {/* Vision Section */}
      <Card className="mb-4">
        <CardBody>
          <CardTitle tag="h5">Vision</CardTitle>
          <Form>
            <FormGroup>
              <Label htmlFor="visionTitle">Title</Label>
              <Input
                type="text"
                id="visionTitle"
                value={visionData.title}
                onChange={(e) => setVisionData({ ...visionData, title: e.target.value })}
                disabled={!editMode}
              />
            </FormGroup>
            {visionError && <Alert color="danger">{visionError}</Alert>}

            <FormGroup>
              <Label htmlFor="visionLogo">Logo Preview</Label><br />
              {visionData.logo && (
                <CardImg src={`/uploads/${visionData.logo}`} alt="Vision Logo" style={{ maxWidth: '100px', maxHeight: '100px' }} />
              )}
            </FormGroup>
            {editMode && (
              <FormGroup>
                <Label htmlFor="visionLogoFile">Upload Logo File</Label>
                <Input
                  type="file"
                  id="visionLogoFile"
                  onChange={(e) => handleFileChange(e, 'vision')}
                />
              </FormGroup>
            )}
            <FormGroup>
              <Label htmlFor="visionDescription">Description</Label>
              <Input
                type="textarea"
                id="visionDescription"
                value={visionData.description}
                onChange={(e) => setVisionData({ ...visionData, description: e.target.value })}
                disabled={!editMode}
              />
            </FormGroup>
          </Form>
        </CardBody>
      </Card>

      {/* Mission Section */}
      <Card>
        <CardBody>
          <CardTitle tag="h5">Mission</CardTitle>
          <Form>
            <FormGroup>
              <Label htmlFor="missionTitle">Title</Label>
              <Input
                type="text"
                id="missionTitle"
                value={missionData.title}
                onChange={(e) => setMissionData({ ...missionData, title: e.target.value })}
                disabled={!editMode}
              />
            </FormGroup>
            {missionError && <Alert color="danger">{missionError}</Alert>}

            <FormGroup>
              <Label htmlFor="missionLogo">Logo Preview</Label><br />
              {missionData.logo && (
                <CardImg src={`/uploads/${missionData.logo}`} alt="Mission Logo" style={{ maxWidth: '100px', maxHeight: '100px' }} />
              )}
            </FormGroup>
            {editMode && (
              <FormGroup>
                <Label htmlFor="missionLogoFile">Upload Logo File</Label>
                <Input
                  type="file"
                  id="missionLogoFile"
                  onChange={(e) => handleFileChange(e, 'mission')}
                />
              </FormGroup>
            )}
            <FormGroup>
              <Label htmlFor="missionDescription">Description</Label>
              <Input
                type="textarea"
                id="missionDescription"
                value={missionData.description}
                onChange={(e) => setMissionData({ ...missionData, description: e.target.value })}
                disabled={!editMode}
              />
            </FormGroup>
          </Form>
        </CardBody>
      </Card>

      {/* Save Button */}
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

export default VisionMissionEditor;
