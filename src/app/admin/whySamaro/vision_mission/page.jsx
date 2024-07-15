"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button, Card, CardBody, CardImg, CardTitle, Alert } from 'reactstrap';

const VisionMissionEditor = () => {
  const [visionData, setVisionData] = useState({
    title: '',
    logo: null, // Change to null for easier checking
    subpoints: []
  });
  const [visionError, setVisionError] = useState('');

  const [missionData, setMissionData] = useState({
    title: '',
    logo: null, // Change to null for easier checking
    subpoints: []
  });
  const [missionError, setMissionError] = useState('');

  const [initialVisionData, setInitialVisionData] = useState(null);
  const [initialMissionData, setInitialMissionData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchVisionData = async () => {
      try {
        const response = await axios.get('/api/admin/vision');
        const { subpoints, ...rest } = response.data;
        setVisionData({
          ...rest,
          subpoints: subpoints.split(',').map(subpoint => subpoint.trim())
        });
      } catch (error) {
        console.error('Error fetching Vision data:', error);
      }
    };

    const fetchMissionData = async () => {
      try {
        const response = await axios.get('/api/admin/mission');
        const { subpoints, ...rest } = response.data;
        setMissionData({
          ...rest,
          subpoints: subpoints.split(',').map(subpoint => subpoint.trim())
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
      setInitialVisionData(visionData); // Store the initial vision data when entering edit mode
      setInitialMissionData(missionData); // Store the initial mission data when entering edit mode
    }
  };

  const handleSave = async () => {

    if (!visionData.title || visionData.subpoints.length === 0 || !missionData.title || missionData.subpoints.length === 0) {
      setVisionError('Please fill all required fields for Vision.');
      setMissionError('Please fill all required fields for Mission.');
      return;
    }


    try {
      const visionFormData = new FormData();
      visionFormData.append('title', visionData.title.trim());
      visionFormData.append('subpoints', visionData.subpoints.map(sp => sp.trim()).join(', '));
      // visionFormData.append('subpoints', visionData.subpoints.join(', '));
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
      missionFormData.append('subpoints', missionData.subpoints.map(sp => sp.trim()).join(', '));

      // missionFormData.append('subpoints', missionData.subpoints.join(','));
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

  const handleSubpointChange = (index, type, value) => {
    if (type === 'vision') {
      const updatedSubpoints = [...visionData.subpoints];
      updatedSubpoints[index] = value;
      setVisionData(prevData => ({
        ...prevData,
        subpoints: updatedSubpoints
      }));
    } else if (type === 'mission') {
      const updatedSubpoints = [...missionData.subpoints];
      updatedSubpoints[index] = value;
      setMissionData(prevData => ({
        ...prevData,
        subpoints: updatedSubpoints
      }));
    }
  };

  const handleAddSubpoint = (type) => {
    if (type === 'vision') {
      setVisionData(prevData => ({
        ...prevData,
        subpoints: [...prevData.subpoints, '']
      }));
    } else if (type === 'mission') {
      setMissionData(prevData => ({
        ...prevData,
        subpoints: [...prevData.subpoints, '']
      }));
    }
  };

  const handleRemoveSubpoint = (index, type) => {
    if (type === 'vision') {
      const updatedSubpoints = [...visionData.subpoints];
      updatedSubpoints.splice(index, 1);
      setVisionData(prevData => ({
        ...prevData,
        subpoints: updatedSubpoints
      }));
    } else if (type === 'mission') {
      const updatedSubpoints = [...missionData.subpoints];
      updatedSubpoints.splice(index, 1);
      setMissionData(prevData => ({
        ...prevData,
        subpoints: updatedSubpoints
      }));
    }
  };

  const handleCancel = () => {
    setVisionData(initialVisionData); // Revert to the initial vision data
    setMissionData(initialMissionData); // Revert to the initial mission data
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
              <Label htmlFor="visionSubpoints">Subpoints</Label>
              {visionData.subpoints.map((subpoint, index) => (
                <div key={index} className="d-flex mb-2">
                  <Input
                    type="text"
                    value={subpoint}
                    onChange={(e) => handleSubpointChange(index, 'vision', e.target.value)}
                    disabled={!editMode}
                  />
                  {editMode && (
                    <Button color="danger" className="ml-2" onClick={() => handleRemoveSubpoint(index, 'vision')}>
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              {editMode && (
                <Button color="primary" onClick={() => handleAddSubpoint('vision')}>
                  Add Subpoint
                </Button>
              )}
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
            {missionError  && <Alert color="danger">{missionError }</Alert>}

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
              <Label htmlFor="missionSubpoints">Subpoints</Label>
              {missionData.subpoints.map((subpoint, index) => (
                <div key={index} className="d-flex mb-2">
                  <Input
                    type="text"
                    value={subpoint}
                    onChange={(e) => handleSubpointChange(index, 'mission', e.target.value)}
                    disabled={!editMode}
                  />
                  {editMode && (
                    <Button color="danger" className="ml-2" onClick={() => handleRemoveSubpoint(index, 'mission')}>
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              {editMode && (
                <Button color="primary" onClick={() => handleAddSubpoint('mission')}>
                  Add Subpoint
                </Button>
              )}
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
