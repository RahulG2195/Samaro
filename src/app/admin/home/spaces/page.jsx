"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Button, Input, Form, FormGroup, Label, Card, CardBody, CardImg, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const SpacesPage = () => {
  const [spacesData, setSpacesData] = useState({
    commercial_images: "",
    residential_images: ""
  });
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [commercialImageFiles, setCommercialImageFiles] = useState([]);
  const [residentialImageFiles, setResidentialImageFiles] = useState([]);
  const [commercialImagePreviews, setCommercialImagePreviews] = useState([]);
  const [residentialImagePreviews, setResidentialImagePreviews] = useState([]);

  // Fetch initial spaces data
  useEffect(() => {
    const fetchSpacesData = async () => {
      try {
        const response = await axios.get("/api/admin/spaces");
        const data = response.data;
        setSpacesData(data);
        setEditedData(data);
        setCommercialImagePreviews(data.commercial_images.split(","));
        setResidentialImagePreviews(data.residential_images.split(","));
      } catch (error) {
        console.error("Error fetching spaces data:", error);
      }
    };

    fetchSpacesData();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e, section) => {
    const files = Array.from(e.target.files);
    const fileNames = files.map(file => file.name).join(",");

    if (section === "commercial") {
      setCommercialImageFiles((prevFiles) => [...prevFiles, ...files]);
      setCommercialImagePreviews((prevPreviews) => [...prevPreviews, ...files.map(file => URL.createObjectURL(file))]);
      setEditedData((prevData) => ({
        ...prevData,
        commercial_images: prevData.commercial_images ? prevData.commercial_images +","+ files : files
      }));
    } else if (section === "residential") {
      setResidentialImageFiles((prevFiles) => [...prevFiles, ...files]);
      setResidentialImagePreviews((prevPreviews) => [...prevPreviews, ...files.map(file => URL.createObjectURL(file))]);
      setEditedData((prevData) => ({
        ...prevData,
        residential_images: prevData.residential_images ? prevData.residential_images +","+ files : files
      }));
    }
  };

  const handleAdd = (section) => {
    const input = document.getElementById(`${section}_images`);
    input.click();
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("commercial_images", editedData.commercial_images);
    formData.append("residential_images", editedData.residential_images);

    commercialImageFiles.forEach((file, index) => {
      formData.append(`commercial_image_${index}`, file);
    });

    residentialImageFiles.forEach((file, index) => {
      formData.append(`residential_image_${index}`, file);
    });

    try {
      const response = await axios.put("/api/admin/spaces", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setSpacesData(editedData);
      setEditMode(false);
      console.log("Spaces data updated:", response.data);
    } catch (error) {
      console.error("Error updating spaces data:", error);
    }
  };

  const handleRemove = (index, section) => {
    if (section === "commercial") {
      const updatedPreviews = [...commercialImagePreviews];
      updatedPreviews.splice(index, 1);
      setCommercialImagePreviews(updatedPreviews);

      const updatedFiles = [...commercialImageFiles];
      updatedFiles.splice(index, 1);
      setCommercialImageFiles(updatedFiles);

      const updatedImages = editedData.commercial_images.split(",");
      updatedImages.splice(index, 1);
      setEditedData((prevData) => ({
        ...prevData,
        commercial_images: updatedImages.join(",")
      }));
    } else if (section === "residential") {
      const updatedPreviews = [...residentialImagePreviews];
      updatedPreviews.splice(index, 1);
      setResidentialImagePreviews(updatedPreviews);

      const updatedFiles = [...residentialImageFiles];
      updatedFiles.splice(index, 1);
      setResidentialImageFiles(updatedFiles);

      const updatedImages = editedData.residential_images.split(",");
      updatedImages.splice(index, 1);
      setEditedData((prevData) => ({
        ...prevData,
        residential_images: updatedImages.join(",")
      }));
    }
  };
  const handleCancel = () => {
    setEditedData(spacesData);
    setCommercialImageFiles([]);
    setResidentialImageFiles([]);
    setCommercialImagePreviews(spacesData.commercial_images.split(","));
    setResidentialImagePreviews(spacesData.residential_images.split(","));
    setEditMode(false);
  };

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Spaces</h1>
        {!editMode && (
          <Button color="secondary" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </div>
      <Card className="p-5">
        <Form>
          <FormGroup>
            <Label for="commercial_images">Commercial Images</Label>
            <Row>
              {commercialImagePreviews.map((preview, index) => (
                <Col sm="6" md="4" lg="3" key={index} className="mb-4">
                  <Card>
                    <CardImg top src={`/uploads/${preview}`} alt={`Commercial Image ${index}`} className="img-thumbnail smaller-image w-100" style={{ height: '100px' }}/>
                    {editMode && (
                      <Button
                        color="danger"
                        className="btn-sm btn-icon btn-circle remove-button position-absolute top-0 end-0"
                        onClick={() => handleRemove(index, "commercial")}
                      >
                        <i className="fa fa-times" />
                      </Button>
                    )}
                  </Card>
                </Col>
              ))}
            </Row>
            {editMode && (
              <div className="mt-2">
                <Button
                  color="primary"
                  className="btn-sm"
                  onClick={() => handleAdd("commercial")}
                >
                  Add Commercial Image
                </Button>
              </div>
            )}
            <Input
              type="file"
              name="commercial_images"
              id="commercial_images"
              onChange={(e) => handleFileChange(e, "commercial")}
              multiple
              style={{ display: "none" }}
              disabled={!editMode}
            />
          </FormGroup>

          <FormGroup>
            <Label for="residential_images">Residential Images</Label>
            <Row>
              {residentialImagePreviews.map((preview, index) => (
                <Col sm="6" md="4" lg="3" key={index} className="mb-4">
                  <Card>
                    <CardImg top src={`/uploads/${preview}`} alt={`Residential Image ${index}`} className="img-thumbnail smaller-image w-100 " style={{ height: '100px' }} />
                    {editMode && (
                      <Button
                        color="danger"
                        className="btn-sm btn-icon btn-circle remove-button position-absolute top-0 end-0"
                        onClick={() => handleRemove(index, "residential")}
                      >
                        <i className="fa fa-times" />
                      </Button>
                    )}
                  </Card>
                </Col>
              ))}
            </Row>
            {editMode && (
              <div className="mt-2">
                <Button
                  color="primary"
                  className="btn-sm"
                  onClick={() => handleAdd("residential")}
                >
                  Add Residential Image
                </Button>
              </div>
            )}
            <Input
              type="file"
              name="residential_images"
              id="residential_images"
              onChange={(e) => handleFileChange(e, "residential")}
              multiple
              style={{ display: "none" }}
              disabled={!editMode}
            />
          </FormGroup>

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
        </Form>
      </Card>
    </Container>
  );
};

export default SpacesPage;
