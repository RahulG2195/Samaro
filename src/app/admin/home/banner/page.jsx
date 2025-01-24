

"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Button, Input, Form, FormGroup, Label, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

const Page = () => {
    const [editedData, setEditedData] = useState({});
    const [editId, setEditId] = useState(null);
    const [files, setFiles] = useState({});
    const [initialData, setInitialData] = useState([]);
    const [products, setProducts] = useState(initialData);
    let hidemobile = false
    let carousel = true
    const id = 1;

    useEffect(() => {
        const fetchBanner = async () => {
            const response = await axios.get("/api/admin/heroBanners", {
                params: { id }
            });
            const banner = response.data
            const homepageBanner = banner.filter(banner => banner.banner_id === 1);
            setInitialData(homepageBanner)

        }

        fetchBanner();

    }, [])

    useEffect(() => {
        setProducts(initialData);
    }, [initialData]);

    const handleEdit = (row) => {
        setEditId(row.banner_id);
        setEditedData({
            ...row,
            banner_img: Array.isArray(row.banner_img) ? row.banner_img : row.banner_img.split(','),
            mobileBanner_img: Array.isArray(row.mobileBanner_img) ? row.mobileBanner_img : row.mobileBanner_img.split(',')
        });
    };

    const handleImageChange = (e, imageType, index = null) => {
        const file = e.target.files[0];
        if (file) {
            if (index !== null) {
                setEditedData((prevData) => ({
                    ...prevData,
                    [imageType]: prevData[imageType].map((img, i) => (i === index ? file : img))
                }));
            } else {
                setFiles((prevFiles) => ({
                    ...prevFiles,
                    [imageType]: file
                }));
            }
        }
    };

    const handleAddImage = (imageType) => {
        setEditedData((prevData) => ({
            ...prevData,
            [imageType]: [...(prevData[imageType] || []), null]
        }));
    };

    const handleCancel = () => {
        setEditId(null);
        setEditedData({});
        setFiles({});
    };

    const saveChanges = async (row) => {
        try {
            const trimmedData = {};
            Object.entries(editedData).forEach(([key, value]) => {
                if (typeof value === 'string') {
                    trimmedData[key] = value.trim();
                } else {
                    trimmedData[key] = value;
                }
            });

            const formData = new FormData();
            Object.entries(trimmedData).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach((file, index) => {
                        if (file && file instanceof File) {
                            formData.append(`${key}[${index}]`, file);
                        } else if (file) {
                            formData.append(`${key}[${index}]`, file);
                        }
                    });
                } else {
                    if (value !== null && value !== undefined && value !== '') {
                        formData.append(key, value);
                    }
                }
            });

            if (files.banner_img) {
                formData.append('banner_img', files.banner_img);
            }
            if (files.mobileBanner_img) {
                formData.append('mobileBanner_img', files.mobileBanner_img);
            }

            const response = await axios.put('/api/admin/homeHero', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

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

    const handleDeleteImage = async (imageType, index) => {
        const imageName = editedData[imageType][index];
        if (!imageName) return;

        try {
            await axios.delete('/api/admin/homeHero', {
                headers: { 'Content-Type': 'application/json' },
                data: { banner_id: editId, imageType, imageName }
            });

            setEditedData((prevData) => ({
                ...prevData,
                [imageType]: prevData[imageType].filter((_, i) => i !== index)
            }));
            setFiles((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[`${imageType}_${index}`];
                return updatedFiles;
            });
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    return (
        <Container>
            <div className='d-flex justify-content-between align-items-center'>
                <h3 className="my-4">Home Page</h3>
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
                                            <div>
                                                <Input type="file" onChange={(e) => handleImageChange(e, 'banner_img')} />
                                                {editedData.banner_img && editedData.banner_img.map((img, idx) => (
                                                    img instanceof File ? (
                                                        <p key={idx}>{img.name}</p>
                                                    ) : (
                                                        <img key={idx} src={`/uploads/${img}`} alt="Banner Image" style={{ width: '200px' }} className="img-fluid" />
                                                    )
                                                ))}
                                            </div>
                                        ) : (
                                            <>
                                                {product.banner_img.split(',').map((img, idx) => (
                                                    <img key={idx} src={`/uploads/${img}`} alt="Banner Image" style={{ width: '200px' }} className="img-fluid" />
                                                ))}
                                            </>
                                        )}
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    {!hidemobile && (
                                        <FormGroup>
                                            <Label className='d-block'>Mobile Banner</Label>
                                            {editId === product.banner_id ? (
                                                <div>
                                                    <Input type="file" onChange={(e) => handleImageChange(e, 'mobileBanner_img')} />
                                                    {editedData.mobileBanner_img && editedData.mobileBanner_img.map((img, idx) => (
                                                        img instanceof File ? (
                                                            <p key={idx}>{img.name}</p>
                                                        ) : (
                                                            <img key={idx} src={`/uploads/${img}`} alt="Mobile Banner Image" style={{ width: '200px' }} className="img-fluid m-3" />
                                                        )
                                                    ))}
                                                </div>
                                            ) : (
                                                <>
                                                    {product.mobileBanner_img.split(',').map((img, idx) => (
                                                        <img key={idx} src={`/uploads/${img}`} alt="Mobile Banner Image" style={{ width: '200px' }} className="img-fluid m-3" />
                                                    ))}
                                                </>
                                            )}
                                        </FormGroup>
                                    )}
                                </Col>
                            </Row>

                            {carousel && Array.isArray(editedData.banner_img) && (
                                <>
                                    <Row>
                                        <Col md={6}>
                                            <h5>Carousel Images for Banner</h5>
                                            {editedData.banner_img?.map((img, idx) => (
                                                <FormGroup key={idx}>
                                                    <Label>Carousel Image {idx + 1}</Label>
                                                    {editId === product.banner_id ? (
                                                        <>
                                                            <Input type="file" onChange={(e) => handleImageChange(e, 'banner_img', idx)} />
                                                            {img instanceof File ? (
                                                                <p key={idx}>{img.name}</p>
                                                            ) : (
                                                                <img src={`/uploads/${img}`} alt={`Carousel Image ${idx + 1}`} style={{ width: '150px' }} className="img-fluid" />
                                                            )}
                                                            <Button color="danger" onClick={() => handleDeleteImage('banner_img', idx)} className="mt-2 d-block">Delete</Button>

                                                        </>
                                                    ) : (
                                                        <img src={`/uploads/${img}`} alt={`Carousel Image ${idx + 1}`} style={{ width: '150px' }} className="img-fluid" />
                                                    )}
                                                </FormGroup>
                                            ))}
                                            {editId === product.banner_id && (
                                                <Button color="primary" onClick={() => handleAddImage('banner_img')} className="mt-3">Add Image</Button>
                                            )}
                                        </Col>

                                        {!hidemobile && (
                                            <Col md={6}>
                                                <h5>Carousel Images for Mobile Banner</h5>
                                                {editedData.mobileBanner_img?.map((img, idx) => (
                                                    <FormGroup key={idx}>
                                                        <Label>Carousel Image {idx + 1}</Label>
                                                        {editId === product.banner_id ? (
                                                            <>
                                                                <Input type="file" onChange={(e) => handleImageChange(e, 'mobileBanner_img', idx)} />
                                                                {img instanceof File ? (
                                                                    <p key={idx}>{img.name}</p>
                                                                ) : (
                                                                    <img src={`/uploads/${img}`} alt={`Mobile Carousel Image ${idx + 1}`} style={{ width: '150px' }} className="img-fluid" />
                                                                )}
                                                                <Button color="danger" onClick={() => handleDeleteImage('mobileBanner_img', idx)} className="mt-2 d-block">Delete</Button>

                                                            </>
                                                        ) : (
                                                            <img src={`/uploads/${img}`} alt={`Mobile Carousel Image ${idx + 1}`} style={{ width: '150px' }} className="img-fluid" />
                                                        )}
                                                    </FormGroup>
                                                ))}
                                                {editId === product.banner_id && (
                                                    <Button color="primary" onClick={() => handleAddImage('mobileBanner_img')} className="mt-3">Add Image</Button>
                                                )}
                                            </Col>
                                        )}
                                    </Row>
                                </>
                            )}
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

                            {editId === product.banner_id ? (
                                <>
                                    <Button color="primary" onClick={() => saveChanges(product)} className="mt-3">Save Changes</Button>
                                    <Button color="secondary" onClick={handleCancel} className="ml-2 mt-3">Cancel</Button>
                                </>
                            ) : (
                                <Button color="primary" onClick={() => handleEdit(product)} className="mt-3">Edit</Button>
                            )}
                        </Form>
                    </CardBody>
                </Card>
            ))}
        </Container>
    );
};

export default Page;
