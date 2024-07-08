"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button, Card } from 'reactstrap';

const DownloadCenterEditor = () => {
  const [downloadData, setDownloadData] = useState([]); // State to hold download center data
  const [initialDownloadData, setInitialDownloadData] = useState([]); // State to hold initial download center data
  const [editMode, setEditMode] = useState(false); // State to toggle edit mode

  // Fetch download center data on component mount
  useEffect(() => {
    fetchDownloadData();
  }, []);

  // Function to fetch download center data
  const fetchDownloadData = async () => {
    try {
      const response = await axios.get('/api/admin/downloadCenter');
      setDownloadData(response.data); // Set fetched data into state
      setInitialDownloadData(response.data); // Store the initial data
    } catch (error) {
      console.error('Error fetching download center data:', error);
    }
  };

  // Toggle edit mode function
  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode); // Toggle edit mode state
  };

  // Function to handle file input change for images
  const handleFileChange = (index, event) => {
    const updatedDownloadData = [...downloadData];
    if (event.target.files && event.target.files.length > 0) {
      updatedDownloadData[index].image = event.target.files[0];
      setDownloadData(updatedDownloadData);
    }
  };

  // Function to handle input changes for other fields
  const handleInputChange = (index, field, value) => {
    const updatedDownloadData = [...downloadData];
    updatedDownloadData[index] = {
      ...updatedDownloadData[index],
      [field]: value
    };
    setDownloadData(updatedDownloadData); // Update downloadData state with new field value
  };

  // Function to save changes to the backend
  const handleSave = async () => {
    try {
      // Create FormData for sending data including binary image
      const formData = new FormData();
      formData.append('downloadData', JSON.stringify(downloadData[0])); 
      if (downloadData[0].image) {
        formData.append('image', downloadData[0].image);
      }

      await axios.put('/api/admin/downloadCenter', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }); // Send updated downloadData to backend

      setEditMode(false); // Exit edit mode after saving
      setInitialDownloadData(downloadData); // Update the initial data to the current state
    } catch (error) {
      console.error('Error updating download center data:', error);
    }
  };

  // Function to cancel changes and revert to initial data
  const handleCancel = () => {
    setDownloadData(initialDownloadData); // Revert to the initial data
    setEditMode(false); // Exit edit mode
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
      <Card className='p-5'>
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
      </Card>
    </Container>
  );
};

export default DownloadCenterEditor;
