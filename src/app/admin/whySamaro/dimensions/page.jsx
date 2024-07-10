"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button, Card, Alert } from 'reactstrap';

const DimensionsEditor = () => {
  const [dimensionsData, setDimensionsData] = useState({
    plank_sizes_heading: '',
    plank_sizes_description: '',
    plank_sizes_image: null,
    plank_thickness_heading: '',
    plank_thickness_description: '',
    plank_thickness_main_image_url: '',
    plank_thickness_image_1: null,
    plank_thickness_size_range_1: '',
    plank_thickness_image_2: null,
    plank_thickness_size_range_2: '',
    plank_thickness_image_3: null,
    plank_thickness_size_range_3: ''
  });
  const [initialData, setInitialData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    const fetchDimensionsData = async () => {
      try {
        const response = await axios.get('/api/admin/dimensions');
        if (response.status === 200) {
          setDimensionsData(response.data[0]);
          setInitialData(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching dimensions data:', error);
      }
    };

    fetchDimensionsData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDimensionsData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (name, file) => {
    setDimensionsData(prevData => ({
      ...prevData,
      [name]: file
    }));
  };

  const handleSave = async () => {
    const errors = [];

    // Validate required fields
    if (!dimensionsData.plank_sizes_heading.trim()) {
      errors.push('Plank Sizes Heading is required.');
    }
    if (!dimensionsData.plank_sizes_description.trim()) {
      errors.push('Plank Sizes Description is required.');
    }
    if (!dimensionsData.plank_sizes_image_url) {
      errors.push('Plank Sizes Image is required.');
    }
    if (!dimensionsData.plank_thickness_heading.trim()) {
      errors.push('Plank Thickness Heading is required.');
    }
    if (!dimensionsData.plank_thickness_description.trim()) {
      errors.push('Plank Thickness Description is required.');
    }
    if (!dimensionsData.plank_thickness_main_image_url.trim()) {
      errors.push('Plank Thickness Main Image URL is required.');
    }
    if (!dimensionsData.plank_thickness_image_1_url) {
      errors.push('Plank Thickness Image 1 is required.');
    }
    if (!dimensionsData.plank_thickness_size_range_1.trim()) {
      errors.push('Size Range 1 is required.');
    }

    if (errors.length > 0) {
      setErrorMessages(errors);
      return;
    }

    try {
      const formData = new FormData();
      
      // Trim all fields before sending
      Object.entries(dimensionsData).forEach(([key, value]) => {
        if (typeof value === 'string') {
          formData.append(key, value.trim());
        } else {
          formData.append(key, value);
        }
      });

      const response = await axios.put('/api/admin/dimensions', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        setEditMode(false);
        setInitialData(dimensionsData);
        setErrorMessages([]);
      }
    } catch (error) {
      console.error('Error saving dimensions data:', error);
    }
  };

  const handleCancel = () => {
    setDimensionsData(initialData);
    setEditMode(false);
    setErrorMessages([]);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <h3>Dimensions Editor</h3>
        {!editMode && (
          <Button color="secondary" onClick={() => setEditMode(true)}>Edit</Button>
        )}
      </div>
      {errorMessages.length > 0 && (
        <Alert color="danger">
          {errorMessages.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </Alert>
      )}
      <Card className="p-5">
        <Form>
          <FormGroup>
            <Label for="plankSizesHeading">Plank Sizes Heading</Label>
            <Input
              type="text"
              name="plank_sizes_heading"
              id="plankSizesHeading"
              value={dimensionsData.plank_sizes_heading}
              onChange={handleChange}
              disabled={!editMode}
            />
          </FormGroup>
          <FormGroup>
            <Label for="plankSizesDescription">Plank Sizes Description</Label>
            <Input
              type="textarea"
              name="plank_sizes_description"
              id="plankSizesDescription"
              value={dimensionsData.plank_sizes_description}
              onChange={handleChange}
              disabled={!editMode}
            />
          </FormGroup>
          <FormGroup>
            <Label for="plankSizesImage">Plank Sizes Image</Label>
            {initialData.plank_sizes_image_url && (
              <div>
                <img
                  src={`/uploads/${initialData.plank_sizes_image_url}`}
                  alt="Plank Sizes"
                  className="img-thumbnail"
                  style={{ width: '200px', height: 'auto' }}
                />
                <p>{dimensionsData.plank_sizes_image}</p>
              </div>
            )}
            <Input
              type="file"
              id="plankSizesImage"
              onChange={(e) => handleFileChange('plank_sizes_image', e.target.files[0])}
              disabled={!editMode}
            />
          </FormGroup>
          <div className='border-secondary border-3 border-top my-5'></div>
          <FormGroup>
            <Label for="plankThicknessHeading">Plank Thickness Heading</Label>
            <Input
              type="text"
              name="plank_thickness_heading"
              id="plankThicknessHeading"
              value={dimensionsData.plank_thickness_heading}
              onChange={handleChange}
              disabled={!editMode}
            />
          </FormGroup>
          <FormGroup>
            <Label for="plankThicknessDescription">Plank Thickness Description</Label>
            <Input
              type="textarea"
              name="plank_thickness_description"
              id="plankThicknessDescription"
              value={dimensionsData.plank_thickness_description}
              onChange={handleChange}
              disabled={!editMode}
            />
          </FormGroup>
          <FormGroup>
            <Label for="plankThicknessMainImage">Plank Thickness Main Image URL</Label>
            {initialData.plank_thickness_main_image_url && (
              <div>
                <img
                  src={`/uploads/${initialData.plank_thickness_main_image_url}`}
                  alt="Plank Thickness Main"
                  className="img-thumbnail"
                  style={{ width: '200px', height: 'auto' }}
                />
                <p>{dimensionsData.plank_thickness_main_image_url}</p>
              </div>
            )}
            <Input
              type="file"
              name="plank_thickness_main_image_url"
              id="plankThicknessMainImage"
              onChange={(e) => handleFileChange('plank_thickness_main_image_url', e.target.files[0])}
              disabled={!editMode}
            />
          </FormGroup>
          <FormGroup>
            <Label for="plankThicknessImage1">Plank Thickness Image 1</Label>
            {initialData.plank_thickness_image_1_url && (
              <div>
                <img
                  src={`/uploads/${initialData.plank_thickness_image_1_url}`}
                  alt="Plank Thickness 1"
                  className="img-thumbnail"
                  style={{ width: '100px', height: '100px' }}
                />
                <p>{dimensionsData.plank_thickness_image_1}</p>
              </div>
            )}
            <Input
              type="file"
              id="plankThicknessImage1"
              onChange={(e) => handleFileChange('plank_thickness_image_1', e.target.files[0])}
              disabled={!editMode}
            />
            <Label for="plankThicknessSizeRange1">Size Range 1</Label>
            <Input
              type="text"
              name="plank_thickness_size_range_1"
              id="plankThicknessSizeRange1"
              value={dimensionsData.plank_thickness_size_range_1}
              onChange={handleChange}
              disabled={!editMode}
            />
          </FormGroup>
          <FormGroup>
            <Label for="plankThicknessImage2">Plank Thickness Image 2</Label>
            {initialData.plank_thickness_image_2_url && (
              <div>
                <img
                  src={`/uploads/${initialData.plank_thickness_image_2_url}`}
                  alt="Plank Thickness 2"
                  className="img-thumbnail"
                  style={{ width: '100px', height: '100px' }}
                />
                <p>{dimensionsData.plank_thickness_image_2}</p>
              </div>
            )}
            <Input
              type="file"
              id="plankThicknessImage2"
              onChange={(e) => handleFileChange('plank_thickness_image_2', e.target.files[0])}
              disabled={!editMode}
            />
            <Label for="plankThicknessSizeRange2">Size Range 2</Label>
            <Input
              type="text"
              name="plank_thickness_size_range_2"
              id="plankThicknessSizeRange2"
              value={dimensionsData.plank_thickness_size_range_2}
              onChange={handleChange}
              disabled={!editMode}
            />
          </FormGroup>
          <FormGroup>
            <Label for="plankThicknessImage3">Plank Thickness Image 3</Label>
            {initialData.plank_thickness_image_3_url && (
              <div>
                <img
                  src={`/uploads/${initialData.plank_thickness_image_3_url}`}
                  alt="Plank Thickness 3"
                  className="img-thumbnail"
                  style={{ width: '100px', height: '100px' }}
                />
                <p>{dimensionsData.plank_thickness_image_3}</p>
              </div>
            )}
            <Input
              type="file"
              id="plankThicknessImage3"
              onChange={(e) => handleFileChange('plank_thickness_image_3', e.target.files[0])}
              disabled={!editMode}
            />
            <Label for="plankThicknessSizeRange3">Size Range 3</Label>
            <Input
              type="text"
              name="plank_thickness_size_range_3"
              id="plankThicknessSizeRange3"
              value={dimensionsData.plank_thickness_size_range_3}
              onChange={handleChange}
              disabled={!editMode}
            />
          </FormGroup>

          {/* Save and Cancel buttons */}
          {editMode && (
            <div className="d-flex gap-2">
              <Button color="success" onClick={handleSave}>Save</Button>
              <Button color="secondary" onClick={handleCancel}>Cancel</Button>
            </div>
          )}
        </Form>
      </Card>
    </Container>
  );
};

export default DimensionsEditor;
