"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input, Row, Col } from "reactstrap";

const SliderImagesEditor = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const benefitId = 1; // Change this as needed

  useEffect(() => {
    const fetchSliderImages = async () => {
      try {
        const response = await axios.get(`/api/admin/benefits_slider`);
        const images = response.data[0].image.split(','); // Assuming image is a comma-separated string
        setSliderImages(images);
      } catch (error) {
        console.error("Error fetching slider images:", error);
      }
    };
    fetchSliderImages();
  }, []);

  const addSliderImages = async () => {
    const formData = new FormData();
    newImages.forEach((file) => {
      formData.append("files", file);
    });

    try {
      await axios.post(`/api/admin/benefits_slider`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // Refresh the image list
      const response = await axios.get(`/api/admin/benefits_slider`);
      const images = response.data[0].image.split(','); // Fetch updated images
      setSliderImages(images);
      setNewImages([]); // Clear the new images after upload
    } catch (error) {
      console.error("Error uploading slider images:", error);
    }
  };

  const deleteSliderImage = async (imageUrl) => {
    try {
      await axios.delete(`/api/admin/benefits_slider`, { data: { imageUrl } });
      // Refresh the image list
      const response = await axios.get(`/api/admin/benefits_slider`);
      const images = response.data[0].image.split(','); // Fetch updated images
      setSliderImages(images);
    } catch (error) {
      console.error("Error deleting slider image:", error);
    }
  };

  return (
    <div>
      <h2>Slider Images</h2>
      <Row>
        {sliderImages.map((imageUrl, idx) => (
          <Col xs="6" key={idx} style={{ marginBottom: "10px" }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={`/uploads/${imageUrl}`}
                alt={`Slider Image ${idx + 1}`}
                style={{ width: "100%", height: "auto", maxWidth: "150px", marginBottom: "5px" }}
              />
              <Button color="danger" size="sm" onClick={() => deleteSliderImage(imageUrl)}>
                Delete
              </Button>
            </div>
          </Col>
        ))}
      </Row>
      <Input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => setNewImages(Array.from(e.target.files))}
        style={{ marginBottom: "10px" }}
      />
      <Button color="primary" onClick={addSliderImages}>
        Add Slider Images
      </Button>
    </div>
  );
};

export default SliderImagesEditor;
