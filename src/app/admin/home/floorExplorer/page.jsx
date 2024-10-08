"use client";
import React, { useState, useEffect } from 'react';
import { Container, Button, Input, Form, FormGroup, Label, Card, Alert } from 'reactstrap';
import axios from 'axios';

const FloorExplorer = () => {
    const [explorerData, setExplorerData] = useState({
        heading: '',
        sub_heading: '',
        description: '',
        button: '',
        url: '',
        ply_image: '',
        tab_image: ''
    });

    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState({});
    const [plyImagePreview, setPlyImagePreview] = useState('');
    const [tabImagePreview, setTabImagePreview] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Function to fetch initial data
    useEffect(() => {
        const fetchExplorerData = async () => {
            try {
                const response = await axios.get('/api/admin/floorExplorer');
                const data = response.data;
                setExplorerData(data);
                setEditedData(data); // Set initial edited data
                if (data.ply_image) {
                    setPlyImagePreview(`/uploads/${data.ply_image}`); // Ensure correct path for image preview
                }
                if (data.tab_image) {
                    setTabImagePreview(`/uploads/${data.tab_image}`); // Ensure correct path for image preview
                }
            } catch (error) {
                console.error('Error fetching explorer data:', error);
            }
        };

        fetchExplorerData();
    }, []);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            const file = files[0];
            setEditedData((prevData) => ({
                ...prevData,
                [name]: file,
            }));
            const filePreview = URL.createObjectURL(file);
            if (name === 'ply_image') {
                setPlyImagePreview(filePreview);
            } else if (name === 'tab_image') {
                setTabImagePreview(filePreview);
            }
        }
    };

    const handleSave = async () => {
        try {

            const trimmedData = {
                ...editedData,
                heading: editedData.heading.trim(),
                sub_heading: editedData.sub_heading.trim(),
                description: editedData.description.trim(),
                button: editedData.button.trim(),
                url: editedData.url.trim(),
            };
            if (!trimmedData.heading || !trimmedData.sub_heading || !trimmedData.description || !trimmedData.button || !trimmedData.url || !trimmedData.ply_image || !trimmedData.tab_image) {
                setErrorMessage('Please fill in all fields.');
                return;
            }

            const formData = new FormData();
            formData.append('heading', trimmedData.heading);
            formData.append('sub_heading', trimmedData.sub_heading);
            formData.append('description', trimmedData.description);
            formData.append('button', trimmedData.button);
            formData.append('url', trimmedData.url);
            formData.append('ply_image', trimmedData.ply_image);
            formData.append('tab_image', trimmedData.tab_image);

            const response = await axios.put('/api/admin/floorExplorer', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setExplorerData(trimmedData);
            setEditMode(false);
            setErrorMessage('');

            console.log('Floor explorer data updated:', response.data);
        } catch (error) {
            console.error('Error updating floor explorer data:', error);
        }
    };

    const handleCancel = () => {
        setEditedData(explorerData);
        setEditMode(false);
        // Reset image previews to original URLs
        if (explorerData.ply_image) {
            setPlyImagePreview(`/uploads/${explorerData.ply_image}`);
        }
        if (explorerData.tab_image) {
            setTabImagePreview(`/uploads/${explorerData.tab_image}`);
        }
        setErrorMessage('');

    };

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="my-4">Floor Explorer</h3>
                {!editMode && (
                    <Button color="secondary" onClick={handleEdit}>
                        Edit
                    </Button>
                )}
            </div>
            <Card className='p-5'>
                <Form>
                    <FormGroup>
                        <Label htmlFor="heading">Heading</Label>
                        <Input
                            type="text"
                            name="heading"
                            value={editMode ? editedData.heading : explorerData.heading}
                            onChange={handleChange}
                            readOnly={!editMode}
                            
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="sub_heading">Sub Heading</Label>
                        <Input
                            type="text"
                            name="sub_heading"
                            value={editMode ? editedData.sub_heading : explorerData.sub_heading}
                            onChange={handleChange}
                            readOnly={!editMode}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Description</Label>
                        <Input
                            type="textarea"
                            name="description"
                            value={editMode ? editedData.description : explorerData.description}
                            onChange={handleChange}
                            readOnly={!editMode}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="button">Button Text</Label>
                        <Input
                            type="text"
                            name="button"
                            value={editMode ? editedData.button : explorerData.button}
                            onChange={handleChange}
                            readOnly={!editMode}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="url">URL</Label>
                        <Input
                            type="text"
                            name="url"
                            value={editMode ? editedData.url : explorerData.url}
                            onChange={handleChange}
                            readOnly={!editMode}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="ply_image">Ply Image</Label>
                        <div>
                            {editMode ? (
                                <Input type="file" name="ply_image" onChange={handleFileChange} />
                            ) : (
                                <img
                                    src={plyImagePreview}
                                    alt="Ply Image Preview"
                                    style={{ width: '100px', marginBottom: '10px' }}
                                />
                            )}
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="tab_image">Tab Image</Label>
                        <div>
                            {editMode ? (
                                <Input type="file" name="tab_image" onChange={handleFileChange} />
                            ) : (
                                <img
                                    src={tabImagePreview}
                                    alt="Tab Image Preview"
                                    style={{ width: '100px', marginBottom: '10px' }}
                                />
                            )}
                        </div>
                    </FormGroup>

                    {editMode && (
                        <div className="d-flex gap-2">
                            <Button color="success" onClick={handleSave}>
                                Save
                            </Button>
                            <Button color="secondary" onClick={handleCancel}>
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

export default FloorExplorer;
