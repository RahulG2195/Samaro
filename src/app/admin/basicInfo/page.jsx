"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  Card,
  Row,
  Col,
  FormFeedback, // Added for form validation feedback
} from "reactstrap";

const BasicInfoPage = () => {
  const [basicInfo, setBasicInfo] = useState({
    comp_logo: "",
    comp_footer_logo:"",
    email1: "",
    email2: "",
    mobile_no_1: "",
    mobile_no_2: "",
    facebook_url: "",
    insta_url: "",
    linkedin_url: "",
    youtube_url: "",
    twitter_url: "",
    address: "",
    map_url: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [logoPreview, setLogoPreview] = useState("");
  const [footerLogoPreview, setFooterLogoPreview] = useState("");

  // Function to fetch initial data
  useEffect(() => {
    const fetchBasicInfo = async () => {
      try {
        const response = await axios.get("/api/admin/basicInfo");
        const info = response.data;
        setBasicInfo(info);
        setEditedData(info);
        setLogoPreview(info.comp_logo); 
        setFooterLogoPreview(info.comp_footer_logo)
      } catch (error) {
        console.error("Error fetching basic info:", error);
      }
    };

    fetchBasicInfo();
  }, []);

  // Validate email function
  const validateEmail = (email) => {
    // Basic email format validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Validate mobile number function
  const validateMobileNumber = (mobileNumber) => {
    // Basic mobile number format validation
    const re = /^[0-9 +]{13}$/;
    return re.test(String(mobileNumber));
  };

  // Validate form function
  const validateForm = () => {
    const {
      email1,
      mobile_no_1,
      address,
    } = editedData;

    if (!email1 || !mobile_no_1 || !address) {
      return false; // Return false if any required field is empty
    }

    if (!validateEmail(email1)) {
      return false; // Return false if email format is invalid
    }

    if (!validateMobileNumber(mobile_no_1)) {
      return false; // Return false if mobile number format is invalid
    }

    // You can add more specific validations here as needed

    return true;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file change for logo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditedData((prevData) => ({ ...prevData, comp_logo: file }));
      setLogoPreview(URL.createObjectURL(file));
    }
  };
  const handleFooterLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditedData((prevData) => ({ ...prevData, comp_footer_logo: file }));
      setFooterLogoPreview(URL.createObjectURL(file));
    }
  };

  // Handle save button click
  const handleSave = async () => {
    try {
      if (!validateForm()) {
        return; // Exit function if form validation fails
      }

      const formData = new FormData();
      Object.entries(editedData).forEach(([key, value]) => {
        if (typeof value === "string") {
          formData.append(key, value.trim()); // Trim string values
        } else {
          formData.append(key, value);
        }
      });

      const response = await axios.put("/api/admin/basicInfo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setBasicInfo(editedData);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating basic info:", error);
    }
  };

  // Handle cancel button click
  const handleCancel = () => {
    setEditMode(false);
    setEditedData(basicInfo); // Reset edited data to original basic info
  };
  const handleEdit = () => {
    setEditMode(true);
  };
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="my-4">Basic Information</h3>
        {!editMode && (
          <Button color="secondary" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </div>
      <Card className="p-5">
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="comp_logo">Company Logo</Label>
                <div className="">
                  {logoPreview && (
                    <img
                      src={`/uploads/${logoPreview}`}
                      alt="Company Logo"
                      style={{ width: "100px", marginBottom: "10px" }}
                    />
                  )}
                  <Input
                    type="file"
                    name="comp_logo"
                    id="comp_logo"
                    onChange={handleFileChange}
                    disabled={!editMode}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="comp_footer_logo">Company Logo on Footer</Label>
                <div className="">
                  {logoPreview && (
                    <img
                      src={`/uploads/${footerLogoPreview}`}
                      alt="comp_footer_logo"
                      style={{ width: "100px", marginBottom: "10px" }}
                    />
                  )}
                  <Input
                    type="file"
                    name="comp_footer_logo"
                    id="comp_footer_logo"
                    onChange={handleFooterLogoChange}
                    disabled={!editMode}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email1">Email 1</Label>
                <Input
                  type="email"
                  name="email1"
                  value={editedData.email1}
                  onChange={handleChange}
                  readOnly={!editMode}
                  invalid={!editedData.email1 || !validateEmail(editedData.email1)} // Added for validation feedback
                />
                {!editedData.email1 && <FormFeedback>Please enter Email 1.</FormFeedback>}
                {!validateEmail(editedData.email1) && <FormFeedback>Please enter a valid Email 1.</FormFeedback>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email2">Email 2</Label>
                <Input
                  type="email"
                  name="email2"
                  value={editedData.email2}
                  onChange={handleChange}
                  readOnly={!editMode}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="mobile_no_1">Mobile No 1</Label>
                <Input
                  type="text"
                  name="mobile_no_1"
                  value={editedData.mobile_no_1}
                  onChange={handleChange}
                  readOnly={!editMode}
                  invalid={!editedData.mobile_no_1 || !validateMobileNumber(editedData.mobile_no_1)} // Added for validation feedback
                />
                {!editedData.mobile_no_1 && <FormFeedback>Please enter Mobile No 1.</FormFeedback>}
                {!validateMobileNumber(editedData.mobile_no_1) && <FormFeedback>Please enter a valid Mobile No 1.</FormFeedback>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="mobile_no_2">Mobile No 2</Label>
                <Input
                  type="text"
                  name="mobile_no_2"
                  value={editedData.mobile_no_2}
                  onChange={handleChange}
                  readOnly={!editMode}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="facebook_url">Facebook URL</Label>
                <Input
                  type="text"
                  name="facebook_url"
                  value={editedData.facebook_url}
                  onChange={handleChange}
                  readOnly={!editMode}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="insta_url">Instagram URL</Label>
                <Input
                  type="text"
                  name="insta_url"
                  value={editedData.insta_url}
                  onChange={handleChange}
                  readOnly={!editMode}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="linkedin_url">LinkedIn URL</Label>
                <Input
                  type="text"
                  name="linkedin_url"
                  value={editedData.linkedin_url}
                  onChange={handleChange}
                  readOnly={!editMode}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="youtube_url">YouTube URL</Label>
                <Input
                  type="text"
                  name="youtube_url"
                  value={editedData.youtube_url}
                  onChange={handleChange}
                  readOnly={!editMode}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="twitter_url">Twitter URL</Label>
                <Input
                  type="text"
                  name="twitter_url"
                  value={editedData.twitter_url}
                  onChange={handleChange}
                  readOnly={!editMode}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address">Address</Label>
                <Input
                  type="textarea"
                  name="address"
                  value={editedData.address}
                  onChange={handleChange}
                  readOnly={!editMode}
                  invalid={!editedData.address} // Added for validation feedback
                />
                {!editedData.address && <FormFeedback>Please enter Address.</FormFeedback>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="map_url">Map URL</Label>
                <Input
                  type="text"
                  name="map_url"
                  value={editedData.map_url}
                  onChange={handleChange}
                  readOnly={!editMode}
                />
              </FormGroup>
            </Col>
          </Row>

          {editMode && (
            <div className="d-flex justify-content-center mt-3">
              <Button color="success" onClick={handleSave} className="mx-2">
                Save
              </Button>
              <Button color="success" onClick={handleCancel} className="mx-2">
                Cancel
              </Button>
            </div>
          )}
        </Form>
      </Card>
    </Container>
  );
};

export default BasicInfoPage;
