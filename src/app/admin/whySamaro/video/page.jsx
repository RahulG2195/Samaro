"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button, Card } from 'reactstrap'; // Adjust as per your styling library

const EditVideoForm = () => {
  const [videoData, setVideoData] = useState({
    id: '',
    heading: '',
    description: '',
    logo_file: null,
    logo: '',
    video_file: null,
    video: ''
  });
  console.log("vdooo",videoData)

  const [initialVideoData, setInitialVideoData] = useState(null); // Store initial data
  const [editMode, setEditMode] = useState(false);
  const [logoPreview, setLogoPreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(`/api/admin/whysamaro_video`);
        setVideoData(response.data);
        setInitialVideoData(response.data); // Store the initial data
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
  }, []);

  useEffect(() => {
    if (videoData.logo) {
      setLogoPreview(`/uploads/${videoData.logo}`);
    }
    if (videoData.video) {
      setVideoPreview(`/uploads/${videoData.video}`);
    }
  }, [videoData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const name = e.target.name;
      setVideoData(prevData => ({
        ...prevData,
        [name]: file,
        [`${name}_filename`]: file.name
      }));

      if (name === 'logo_file') {
        setLogoPreview(URL.createObjectURL(file));
      } else if (name === 'video_file') {
        setVideoPreview(URL.createObjectURL(file));
      }
    }
  };

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
    if (!editMode) {
      setInitialVideoData(videoData); // Store the initial data when entering edit mode
    }
  };

  const handleCancel = () => {
    setVideoData(initialVideoData); // Revert to the initial data
    setEditMode(false);
    // Reset previews
    setLogoPreview(initialVideoData.logo ? `/uploads/${initialVideoData.logo}` : null);
    setVideoPreview(initialVideoData.video ? `/uploads/${initialVideoData.video}` : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', videoData.heading);
    formData.append('description', videoData.description);
    if (videoData.logo_file) formData.append('logo_file', videoData.logo_file);
    if (videoData.video_file) formData.append('video_file', videoData.video_file);
    formData.append('logo_filename', videoData.logo);
    formData.append('video_filename', videoData.video);

    try {
      const response = await axios.put(`/api/admin/whysamaro_video`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Video data updated:', response.data);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating video data:', error);
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-end mb-3">
        {!editMode && (
          <Button color="secondary" onClick={handleToggleEditMode}>
            Edit
          </Button>
        )}
      </div>
      <h3>Edit Video Details</h3>
      <Card className="p-5">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="heading">Heading</Label>
            <Input
              type="text"
              name="heading"
              id="heading"
              value={videoData.heading}
              onChange={handleChange}
              disabled={!editMode}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={videoData.description}
              onChange={handleChange}
              disabled={!editMode}
            />
          </FormGroup>

          {!editMode ? (
            <FormGroup>
              <Label className='d-block'>Logo Preview</Label>
              {logoPreview && (
                <img src={`${logoPreview}`} alt="Logo Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
              )}
            </FormGroup>
          ) : (
            <FormGroup>
              <Label for="logo_file">Upload Logo File</Label>
              <Input type="file" name="logo_file" id="logo_file" onChange={handleFileChange} disabled={!editMode} />
            </FormGroup>
          )}

          {!editMode ? (
            <FormGroup>
              <Label className='d-block'>Video Preview</Label>
              {videoPreview && (
                < video controls autoPlay  width="400">
              <source src={`${videoPreview}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </FormGroup>
        ) : (
        <FormGroup>
          <Label for="video_file">Upload Video File</Label>
          <Input type="file" name="video_file" id="video_file" onChange={handleFileChange} disabled={!editMode} />
        </FormGroup>
          )}

        {editMode && (
          <div className="d-flex gap-2">
            <Button color="success" type="submit">
              Save
            </Button>
            <Button color="success" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        )}
      </Form>
    </Card>
    </Container >
  );
};

export default EditVideoForm;
