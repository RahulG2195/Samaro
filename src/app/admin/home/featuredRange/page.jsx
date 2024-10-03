"use client";
import React, { useState, useEffect } from 'react';
import { Container, Button, Input, Form, FormGroup, Label, Card, Alert } from 'reactstrap';
import axios from 'axios';

const Page = () => {
    const [rangeData, setRangeData] = useState([]);
    const [editMode, setEditMode] = useState(null); // Track which item is being edited
    const [editedData, setEditedData] = useState({});
    const [imagePreviews, setImagePreviews] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    // Fetch the range data
    useEffect(() => {
        const fetchRangeData = async () => {
            try {
                const response = await axios.get('/api/admin/featuredRange');
                const data = response.data;
                setRangeData(data);
                const previews = data.reduce((acc, item) => {
                    if (item.image) {
                        acc[item.id] = `/uploads/${item.image}`;
                    }
                    return acc;
                }, {});
                setImagePreviews(previews);
            } catch (error) {
                console.error('Error fetching range data:', error);
            }
        };

        fetchRangeData();
    }, [editMode]);

    const handleEdit = (id) => {
        setEditMode(id);
        const rangeItem = rangeData.find(item => item.id === id);
        setEditedData(rangeItem);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e, id) => {
        const { files } = e.target;
        if (files && files[0]) {
            const file = files[0];
            setEditedData((prevData) => ({
                ...prevData,
                image: file,
            }));
            const filePreview = URL.createObjectURL(file);
            setImagePreviews((prevPreviews) => ({
                ...prevPreviews,
                [id]: filePreview
            }));
        }
    };

    const handleSave = async (id) => {
        try {
            const trimmedData = {
                ...editedData,
                name: editedData.name.trim(),
                description: editedData.description.trim(),
            };

            if (!trimmedData.name || !trimmedData.description || !trimmedData.image) {
                setErrorMessage('Please fill in all fields.');
                return;
            }

            const formData = new FormData();
            formData.append('id', id); // Include the id in the form data
            formData.append('name', trimmedData.name);
            formData.append('description', trimmedData.description);
            formData.append('image', trimmedData.image);

            const response = await axios.put('/api/admin/featuredRange', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const updatedRangeData = rangeData.map((item) =>
                item.id === id ? { ...item, ...trimmedData, image: response.data.image || item.image } : item
            );

            setRangeData(updatedRangeData);
            setEditMode(null);
            setErrorMessage('');
            console.log('Featured range data updated:', response.data);
        } catch (error) {
            console.error('Error updating featured range data:', error);
        }
    };

    const handleCancel = (id) => {
        setEditMode(null);
        const originalItem = rangeData.find(item => item.id === id);
        setEditedData(originalItem);
        if (originalItem.image) {
            setImagePreviews((prevPreviews) => ({
                ...prevPreviews,
                [id]: `/uploads/${originalItem.image}`,
            }));
        }
        setErrorMessage('');
    };

    return (
        <Container>
            <h3 className="my-4">Featured Range CMS</h3>
            {rangeData.map((item) => (
                <Card key={item.id} className="p-4 mb-3">
                    <Form>
                       
                        <FormGroup>
                            <Label htmlFor="name">Title</Label>
                            <Input
                                type="text"
                                name="name"
                                value={editMode === item.id ? editedData.name : item.name}
                                onChange={handleChange}
                                readOnly={editMode !== item.id}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            <Input
                                type="textarea"
                                name="description"
                                value={editMode === item.id ? editedData.description : item.description}
                                onChange={handleChange}
                                readOnly={editMode !== item.id}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="image">Image</Label>
                            <div>
                                {editMode === item.id ? (
                                    <Input type="file" name="image" onChange={(e) => handleFileChange(e, item.id)} />
                                ) : (
                                    <img
                                        src={imagePreviews[item.id]}
                                        alt="Image Preview"
                                        style={{ width: '100px', marginBottom: '10px' }}
                                    />
                                )}
                            </div>
                        </FormGroup>

                        {editMode === item.id ? (
                            <div className="d-flex gap-2">
                                <Button color="success" onClick={() => handleSave(item.id)}>
                                    Save
                                </Button>
                                <Button color="secondary" onClick={() => handleCancel(item.id)}>
                                    Cancel
                                </Button>
                            </div>
                        ) : (
                            <Button color="secondary" onClick={() => handleEdit(item.id)}>
                                Edit
                            </Button>
                        )}
                    </Form>
                </Card>
            ))}
            {errorMessage && (
                <Alert color="danger" className="mt-3">
                    {errorMessage}
                </Alert>
            )}
        </Container>
    );
};

export default Page;