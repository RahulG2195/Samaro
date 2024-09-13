"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Button, Input, Form, FormGroup, Label, Card, Alert } from "reactstrap";

const BenefitsSection = () => {
  const [benefit, setBenefit] = useState({
    heading: "",
    icons: [],
    titles: [],
    slider_images: []
  });

  const [editMode, setEditMode] = useState(false);
  const [editedBenefit, setEditedBenefit] = useState({
    heading: "",
    icons: [],
    titles: [],
    slider_images: []
  });
  const [iconPreviews, setIconPreviews] = useState([]);
  const [sliderImagePreviews, setSliderImagePreviews] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to fetch initial data
  useEffect(() => {
    const fetchBenefit = async () => {
      try {
        const response = await axios.get("/api/admin/benifits");
        const benefitData = response.data[0];
        benefitData.icons = benefitData.icons.split(",");
        benefitData.titles = benefitData.titles.split(",");
        benefitData.slider_images = benefitData.slider_images.split(",");

        setBenefit(benefitData);
        setEditedBenefit(benefitData);
        setIconPreviews(benefitData.icons.map(icon => `/uploads/${icon}`));
        setSliderImagePreviews(benefitData.slider_images.map(img => `/uploads/${img}`));
      } catch (error) {
        console.error("Error fetching benefit:", error);
      }
    };

    fetchBenefit();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      const fieldName = name.substring(0, name.indexOf("["));
      const index = parseInt(name.substring(name.indexOf("[") + 1, name.indexOf("]")), 10);

      if (fieldName === "icons") {
        const newIcons = [...editedBenefit.icons];
        newIcons[index] = file;
        setEditedBenefit((prevData) => ({ ...prevData, icons: newIcons }));

        const newPreviews = [...iconPreviews];
        newPreviews[index] = URL.createObjectURL(file);
        setIconPreviews(newPreviews);
      } else if (fieldName === "slider_images") {
        const newSliderImages = [...editedBenefit.slider_images];
        newSliderImages[index] = file;
        setEditedBenefit((prevData) => ({ ...prevData, slider_images: newSliderImages }));

        const newPreviews = [...sliderImagePreviews];
        newPreviews[index] = URL.createObjectURL(file);
        setSliderImagePreviews(newPreviews);
      }
    } else {
      setEditedBenefit((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleAddIcon = () => {
    setEditedBenefit((prevData) => ({
      ...prevData,
      icons: [...prevData.icons, ""],
      titles: [...prevData.titles, ""]
    }));
    setIconPreviews([...iconPreviews, ""]);
  };

  const handleRemoveIcon = (index) => {
    const newIcons = [...editedBenefit.icons];
    const newTitles = [...editedBenefit.titles];
    const newPreviews = [...iconPreviews];
    newIcons.splice(index, 1);
    newTitles.splice(index, 1);
    newPreviews.splice(index, 1);
    setEditedBenefit((prevData) => ({ ...prevData, icons: newIcons, titles: newTitles }));
    setIconPreviews(newPreviews);
  };

  const handleAddSliderImage = () => {
    setEditedBenefit((prevData) => ({
      ...prevData,
      slider_images: [...prevData.slider_images, ""]
    }));
    setSliderImagePreviews([...sliderImagePreviews, ""]);
  };

  const handleRemoveSliderImage = (index) => {
    const newSliderImages = [...editedBenefit.slider_images];
    const newPreviews = [...sliderImagePreviews];
    newSliderImages.splice(index, 1);
    newPreviews.splice(index, 1);
    setEditedBenefit((prevData) => ({ ...prevData, slider_images: newSliderImages }));
    setSliderImagePreviews(newPreviews);
  };

  const handleTitleChange = (index, e) => {
    const { value } = e.target;
    const newTitles = [...editedBenefit.titles];
    newTitles[index] = value;
    setEditedBenefit((prevData) => ({ ...prevData, titles: newTitles }));
  };
  const handleSave = async () => {
    try {

      if (!editedBenefit.heading.trim()) {
        setErrorMessage("Please enter a heading.");
        return;
      }

      const hasEmptyTitle = editedBenefit.titles.some(title => !title.trim());
      if (hasEmptyTitle) {
        setErrorMessage("Please enter all titles.");
        return;
      }

        const trimmedBenefit = {
          ...editedBenefit,
          heading: editedBenefit.heading.trim(),
          titles: editedBenefit.titles.map(title => title.trim())
        };

      const formData = new FormData();
      Object.entries(trimmedBenefit).forEach(([key, value]) => {
        if (key === "icons" || key === "slider_images") {
          value.forEach((file, index) => {
            if (file instanceof File) {
              formData.append(`${key}[${index}]`, file);
            }
          });
        } else {
          formData.append(key, value);
        }
      });

      const response = await axios.put("/api/admin/benifits", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      setBenefit(trimmedBenefit);
      setEditMode(false);
      setErrorMessage("");

      console.log("Benefit updated:", response.data);
    } catch (error) {
      console.error("Error updating benefit:", error);
    }
  };

  const handleCancel = () => {
    setEditedBenefit(benefit);
    setEditMode(false);
    setErrorMessage("");

  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="my-4">Benefits Section</h3>
        {!editMode && (
          <Button color="secondary" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </div>
      <Card className="p-5">
        <Form>
          <FormGroup>
            <Label htmlFor="heading">Heading</Label>
            <Input
              type="text"
              name="heading"
              value={editedBenefit.heading}
              onChange={handleChange}
              readOnly={!editMode}
              required

            />
          </FormGroup>

          <FormGroup>
            <Label>Icons and Titles</Label>
            {editedBenefit.icons.map((icon, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                {iconPreviews[index] && (
                  <img src={iconPreviews[index] || `` } alt={`Icon ${index + 1}`} style={{ width: "50px", marginRight: "10px" }} />
                )}
                <Input
                  type="file"
                  name={`icons[${index}]`}
                  onChange={(e) => handleChange(e)}
                  disabled={!editMode}
                  className="mr-2"
                />
                <Input
                  type="text"
                  name="title"
                  value={editedBenefit.titles[index]}
                  onChange={(e) => handleTitleChange(index, e)}
                  readOnly={!editMode}
                  placeholder={`Title ${index + 1}`}
                  className="mr-2"
                  required
                />
                {editMode && (
                  <Button color="danger" onClick={() => handleRemoveIcon(index)}>
                    Remove
                  </Button>
                )}
              </div>
            ))}
            {editMode && (
              <Button color="primary" onClick={handleAddIcon}>
                Add Icon
              </Button>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Slider Images</Label>
            {editedBenefit.slider_images.map((image, index) => (
              <div key={index} className="mb-2 d-flex align-items-center">
                {sliderImagePreviews[index] && (
                  <img src={sliderImagePreviews[index]} alt="Slider" style={{ width: "100px", marginRight: "10px" }} />
                )}
                <Input
                  type="file"
                  name={`slider_images[${index}]`}
                  onChange={(e) => handleChange(e)}
                  disabled={!editMode}
                  className="mr-2"
                />
                {editMode && (
                  <Button color="danger" onClick={() => handleRemoveSliderImage(index)}>
                    Remove
                  </Button>
                )}
              </div>
            ))}
            {editMode && (
              <Button color="primary" onClick={handleAddSliderImage}>
                Add Slider Image
              </Button>
            )}
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
           {errorMessage && (
            <Alert color="danger" className="mt-3">
              {errorMessage}
            </Alert>
          )}
        </Form>
      </Card>
    </Container>
  );
};

export default BenefitsSection;