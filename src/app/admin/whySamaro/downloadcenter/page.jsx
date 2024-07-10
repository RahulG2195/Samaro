"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button, Card, Alert } from 'reactstrap';

const DownloadCenterEditor = () => {
  const [downloadData, setDownloadData] = useState([]);
  const [initialDownloadData, setInitialDownloadData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    fetchDownloadData();
  }, []);

  const fetchDownloadData = async () => {
    try {
      const response = await axios.get('/api/admin/downloadCenter');
      setDownloadData(response.data);
      setInitialDownloadData(response.data);
    } catch (error) {
      console.error('Error fetching download center data:', error);
    }
  };

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  const handleFileChange = (index, event) => {
    const updatedDownloadData = [...downloadData];
    if (event.target.files && event.target.files.length > 0) {
      updatedDownloadData[index].image = event.target.files[0];
      setDownloadData(updatedDownloadData);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedDownloadData = [...downloadData];
    updatedDownloadData[index] = {
      ...updatedDownloadData[index],
      [field]: value
    };
    setDownloadData(updatedDownloadData);
  };

  const handleSave = async () => {
    const errors = [];

    // Validate and trim values
    const trimmedDownloadData = downloadData.map(item => ({
      ...item,
      heading: item.heading.trim(),
      description: item.description.trim(),
      button_text: item.button_text.trim(),
      button_url: item.button_url.trim()
    }));
  
    trimmedDownloadData.forEach((item, index) => {
      if (!item.heading) {
        errors.push(`Heading ${index + 1} is required.`);
      }
      if (!item.description) {
        errors.push(`Description ${index + 1} is required.`);
      }
      if (!item.button_text) {
        errors.push(`Button Text ${index + 1} is required.`);
      }
      if (!item.button_url) {
        errors.push(`Button URL ${index + 1} is required.`);
      }
    });
  
    if (errors.length > 0) {
      setErrorMessages(errors);
      return;
    }

    try {
      const formData = new FormData();
      trimmedDownloadData.forEach(item => {
        formData.append('downloadData', JSON.stringify(item));
        if (item.image) {
          formData.append('image', item.image);
        }
      });

      await axios.put('/api/admin/downloadCenter', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setEditMode(false);
      setInitialDownloadData(trimmedDownloadData);
      setErrorMessages([]);
    } catch (error) {
      console.error('Error updating download center data:', error);
    }
  };

  const handleCancel = () => {
    setDownloadData(initialDownloadData);
    setEditMode(false);
    setErrorMessages([]);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <h3>Download Center Editor</h3>
        {!editMode && (
          <Button color="secondary" onClick={handleToggleEditMode}>
            Edit
          </Button>
        )}
      </div>
      <Card className="p-5">
       
        {downloadData.map((item, index) => (
          <Form key={index} className="mb-4">
            <FormGroup>
              <Label for={`image_${index}`}>Image</Label>
              <Input
                type="file"
                id={`image_${index}`}
                onChange={(e) => handleFileChange(index, e)}
                disabled={!editMode}
              />
              {item.image_url && (
                <img src={`/uploads/${item.image_url}`} alt={`Image ${index}`} style={{ maxWidth: '200px', marginTop: '10px' }} />
              )}
            </FormGroup>
            <FormGroup>
              <Label for={`heading_${index}`}>Heading</Label>
              <Input
                type="text"
                id={`heading_${index}`}
                value={item.heading}
                onChange={(e) => handleInputChange(index, 'heading', e.target.value)}
                disabled={!editMode}
              />
            </FormGroup>
            <FormGroup>
              <Label for={`description_${index}`}>Description</Label>
              <Input
                type="textarea"
                id={`description_${index}`}
                value={item.description}
                onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                disabled={!editMode}
              />
            </FormGroup>
            <FormGroup>
              <Label for={`button_text_${index}`}>Button Text</Label>
              <Input
                type="text"
                id={`button_text_${index}`}
                value={item.button_text}
                onChange={(e) => handleInputChange(index, 'button_text', e.target.value)}
                disabled={!editMode}
              />
            </FormGroup>
            <FormGroup>
              <Label for={`button_url_${index}`}>Button URL</Label>
              <Input
                type="text"
                id={`button_url_${index}`}
                value={item.button_url}
                onChange={(e) => handleInputChange(index, 'button_url', e.target.value)}
                disabled={!editMode}
              />
            </FormGroup>
          </Form>
        ))}
         {errorMessages.length > 0 && (
          <Alert color="danger">
            {errorMessages.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </Alert>
        )}
        {editMode && (
          <div className="d-flex gap-2">
            <Button color="success" onClick={handleSave}>
              Save
            </Button>
            <Button color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default DownloadCenterEditor;
