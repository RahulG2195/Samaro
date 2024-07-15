"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Card, CardBody, CardImg, CardTitle } from 'reactstrap';

const GalleryEditor = () => {
  const [images, setImages] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [addingNew, setAddingNew] = useState(false);
  const [newImageFile, setNewImageFile] = useState(null);
  const [orignalImages, setOrignalImages] = useState([])
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('/api/admin/gallery');
      setImages(response.data);
      setOrignalImages(response.data);

    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
    setAddingNew(false);
    setNewImageFile(null);
  };

  const handleSaveChanges = async () => {
    try {
      const newImages = images.filter(image => !image.id); // Filter images with no id (new images)
      const updatedImages = images.filter(image => image.id); // Filter images with id (existing images)

      // Handle new images (POST)
      if (addingNew) {
        for (let image of newImages) {
          const formData = new FormData();
          formData.append('image', image.file);
          // formData.append('imageName', image.imageName); // Ensure imageName is set correctly

          await axios.post('/api/admin/gallery', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });

        }



      }
      setEditMode(false);
      setAddingNew(false);
      setOrignalImages(images)
      fetchImages();




    } catch (error) {
      console.error('Error updating gallery data:', error);
    }
  };

  const handleFileChange = (index, file) => {
    const updatedImages = [...images];
    updatedImages[index].file = file;
    updatedImages[index].imageName = file.name; // Update imageName with file name or appropriate identifier
    setImages(updatedImages);
  };

  const handleAddImage = () => {
    setAddingNew(true); // Activate adding new image mode
    setEditMode(false); // Ensure edit mode is off when adding new image
    setImages([...images, { id: null, imageName: '', file: newImageFile }]);
    setNewImageFile(null); // Clear new image file after adding
  };

  const handleRemoveImage = async (id) => {
    if (id) {
      try {
        await axios.delete(`/api/admin/gallery`, { data: { id } });
        setImages(images.filter(image => image.id !== id));
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
  };

  const handleCancel = () => {
    setImages(orignalImages)
    setEditMode(false)
    setAddingNew(false);
  }

  return (
    <Container>
      <h3 className="mb-4">Gallery Editor</h3>

      <Row className="mb-4">
        {images.map((image, index) => (
          <Col xs="12" sm="6" md="4" lg="4" className="mb-4" key={index}>
            <Card className="h-100">
              <CardBody className="d-flex flex-column">
                {(addingNew && index === images.length - 1) ? ( // Check if adding new mode and current image is the new one
                  <Form className="mb-3">
                    <FormGroup>
                      <Label htmlFor={`imageFile${index}`} className="visually-hidden">
                        Upload Image
                      </Label>
                      <Input
                        type="file"
                        id={`imageFile${index}`}
                        onChange={(e) => handleFileChange(index, e.target.files[0])}
                        accept="image/*"
                        multiple


                      />
                    </FormGroup>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => handleRemoveImage(image.id)}
                    >
                      Remove
                    </Button>
                  </Form>
                ) : (
                  <>
                    <img
                      // top
                      src={`/uploads/${image.imageName}`}
                      alt={`Image`}
                      className=" mb-2"
                    />
                    {!editMode && !addingNew && (
                      <CardTitle tag="h5" className="mb-auto">Image {index + 1}</CardTitle>
                    )}
                    {editMode && (
                      <Button
                        color="danger"
                        size="sm"
                        onClick={() => handleRemoveImage(image.id)}
                      >
                        Remove
                      </Button>
                    )}
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center">
        {/* {!editMode && !addingNew && ( */}
        <Button color="success m-2" onClick={handleAddImage}>
          Add Image
        </Button>
        {/* )} */}
        {(editMode || addingNew) && (
          <>
            <Button color="success" className="mx-2" onClick={handleSaveChanges}>
              Save Changes
            </Button>
            <Button color="secondary" className="mx-2" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        )}
        {!editMode && (
          <Button color="success" className="ml-2" onClick={handleToggleEditMode}>
            Edit Images
          </Button>
        )}
      </div>
    </Container>
  );
};

export default GalleryEditor;
