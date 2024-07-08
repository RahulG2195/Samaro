"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Button, Input, Form, FormGroup, Label, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

const Page = ({ pageName, initialData, isEditing }) => {
  const [products, setProducts] = useState(initialData);
  const [editedData, setEditedData] = useState({});
  const [editId, setEditId] = useState(null);
  const [files, setFiles] = useState({});

  useEffect(() => {
    setProducts(initialData);
  }, [initialData]);

  const handleEdit = (row) => {
    setEditId(row.banner_id);
    setEditedData({ ...row });
  };

  const handleImageChange = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [imageType]: file
      }));
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setEditedData({});
    setFiles({});
  };

  const saveChanges = async (row) => {
    try {
      const formData = new FormData();
      Object.entries(editedData).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          formData.append(key, value);
        }
      });

      // Append files if they exist
      if (files.banner_img) {
        formData.append('banner_img', files.banner_img);
      }
      if (files.mobileBanner_img) {
        formData.append('mobileBanner_img', files.mobileBanner_img);
      }

      const response = await axios.put('/api/admin/heroBanners', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      // Update the products state with the response data
      const updatedProducts = products.map(p => {
        if (p.banner_id === editedData.banner_id) {
          return { ...p, ...response.data };
        }
        return p;
      });
      setProducts(updatedProducts);
      setEditId(null);
      setEditedData({});
      setFiles({});
    } catch (error) {
      console.error("Error updating the banner:", error);
    }
  };

  return (
    <Container>
      <div className='d-flex justify-content-between align-items-center'>
        <h3 className="my-4">{pageName}</h3>
      </div>
      {products.map((product, index) => (
        <Card className="mb-4" key={product.banner_id}>
          <CardBody>
            <CardTitle tag="h5">Banner {index + 1}</CardTitle>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Image</Label>
                    {editId === product.banner_id ? (
                      <Input type="file" onChange={(e) => handleImageChange(e, 'banner_img')} />
                    ) : (
                      <img src={`/uploads/${product.banner_img}`} alt="Banner Image" style={{ width: '500px' }} className="img-fluid" />
                      // <img src="/uploads/Mask Group 318.png" alt="Banner Image"  />
                    )}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label className='d-block'>Mobile Banner</Label>
                    {editId === product.banner_id ? (
                      <Input type="file" onChange={(e) => handleImageChange(e, 'mobileBanner_img')} />
                    ) : (
                      <img src={`/uploads/${product.mobileBanner_img}`} alt="Mobile Banner Image" style={{ width: '200px' }} className="img-fluid" />
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Title</Label>
                    {editId === product.banner_id ? (
                      <Input 
                        type="text" 
                        value={editedData.banner_title || ''} 
                        onChange={(e) => setEditedData({ ...editedData, banner_title: e.target.value })} 
                      />
                    ) : (
                      <p>{product.banner_title}</p>
                    )}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Content</Label>
                    {editId === product.banner_id ? (
                      <Input 
                        type="text" 
                        value={editedData.banner_content || ''} 
                        onChange={(e) => setEditedData({ ...editedData, banner_content: e.target.value })} 
                      />
                    ) : (
                      <p>{product.banner_content}</p>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Button Text</Label>
                    {editId === product.banner_id ? (
                      <Input 
                        type="text" 
                        value={editedData.button_text || ''} 
                        onChange={(e) => setEditedData({ ...editedData, button_text: e.target.value })} 
                      />
                    ) : (
                      <p>{product.button_text}</p>
                    )}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Button URL</Label>
                    {editId === product.banner_id ? (
                      <Input 
                        type="text" 
                        value={editedData.banner_url || ''} 
                        onChange={(e) => setEditedData({ ...editedData, banner_url: e.target.value })} 
                      />
                    ) : (
                      <p>{product.banner_url}</p>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <div className='gap-2 d-flex'>
                {editId === product.banner_id ? (
                  <>
                    <Button color="success" onClick={() => saveChanges(product)}>Save</Button>
                    <Button color="success" onClick={handleCancel}>Cancel</Button>
                  </>
                ) : (
                  <Button color="secondary" onClick={() => handleEdit(product)}>Edit</Button>
                )}
              </div>
            </Form>
            
          </CardBody>
        </Card>
      ))}
    </Container>
  );
};

export default Page;