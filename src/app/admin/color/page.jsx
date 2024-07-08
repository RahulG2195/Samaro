"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Button, Input, Form, FormGroup, Label, Table, Modal, ModalHeader, ModalBody, ModalFooter, Card } from "reactstrap";

const ColorCodesPage = () => {
    const [clrCodes, setClrCodes] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState({
        id: null,
        clrCode: "",
        image: "",
    });
    const [imagePreview, setImagePreview] = useState("");
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetchClrCodes();
    }, []);

    const fetchClrCodes = async () => {
        try {
            const response = await axios.get("/api/color");
            setClrCodes(response.data);
        } catch (error) {
            console.error("Error fetching color codes:", error);
        }
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleEdit = (clrCode) => {
        setEditMode(true);
        setEditedData(clrCode);
        setImagePreview(`/path/to/your/images/${clrCode.image}`);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEditedData((prevData) => ({ ...prevData, image: file }));
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSave = async () => {
        try {
            const formData = new FormData();
            Object.entries(editedData).forEach(([key, value]) => {
                formData.append(key, value);
            });

            if (editedData.id) {
                await axios.put("/api/color", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
            } else {
                await axios.post("/api/color", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
            }

            fetchClrCodes();
            setEditMode(false);
            setEditedData({ id: null, clrCode: "", image: "" });
            setImagePreview("");
        } catch (error) {
            console.error("Error saving color code:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete("/api/color", { data: { id } });
            fetchClrCodes();
        } catch (error) {
            console.error("Error deleting color code:", error);
        }
    };

    const handleAddNew = () => {
        setEditMode(true);
        setEditedData({ id: null, clrCode: "", image: "" });
        setImagePreview("");
    };

    const handleCancel = () => {
        setEditMode(false);
        setEditedData({ id: null, clrCode: "", image: "" });
        setImagePreview("");
    };

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="my-4">Color Codes</h3>
                {!editMode && (
                    <Button color="primary" onClick={handleAddNew}>
                        Add New
                    </Button>
                )}
            </div>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Color Code</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clrCodes.map((clrCode, index) => (
                        <tr key={clrCode.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{clrCode.clrCode}</td>
                            <td>
                                <img
                                    src={`/path/to/your/images/${clrCode.image}`}
                                    alt={clrCode.clrCode}
                                    style={{ width: "100px" }}
                                />
                            </td>
                            <td>
                                <Button color="secondary" onClick={() => handleEdit(clrCode)}>
                                    Edit
                                </Button>{" "}
                                <Button color="danger" onClick={() => handleDelete(clrCode.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal isOpen={editMode} toggle={toggleModal}>
                <Card>

                    <ModalHeader toggle={toggleModal}>Edit Color Code</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="clrCode">Color Code</Label>
                                <Input
                                    type="text"
                                    name="clrCode"
                                    value={editedData.clrCode}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="image">Image</Label>
                                {imagePreview && (
                                    <div>
                                        <img
                                            src={imagePreview}
                                            alt="Color Code"
                                            style={{ width: "100px", marginBottom: "10px" }}
                                        />
                                    </div>
                                )}
                                <Input
                                    type="file"
                                    name="image"
                                    id="image"
                                    onChange={handleFileChange}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={handleSave}>
                            Save
                        </Button>{" "}
                        <Button color="secondary" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Card>
            </Modal>
        </Container>
    );
};

export default ColorCodesPage;
