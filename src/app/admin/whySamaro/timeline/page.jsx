"use client";
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Container, FormGroup, Label, Input, Button, Card, CardBody, CardTitle, Alert, Row, Col } from 'reactstrap';

const Page = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [newTimeline, setNewTimeline] = useState({ year: '', title: '', icon: '' });
  const [isAdding, setIsAdding] = useState(false); // Track whether we are adding a new timeline
  const [error, setError] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    fetchTimelineData();
  }, [newTimeline]);

  const fetchTimelineData = async () => {
    const response = await axios.get('/api/admin/timeline');
    setTimelineData(response.data);
  };

  const handleEdit = (index) => {
    const updatedData = [...timelineData];
    updatedData[index].isEditing = true; // Mark as editing
    setTimelineData(updatedData);
  };

  const handleSave = async (index) => {
    const { id, year, title, icon } = timelineData[index];
    const formData = new FormData();
    formData.append('id', id);
    formData.append('year', year);
    formData.append('title', title);
    formData.append('icon', icon);

    try {
      await axios.put(`/api/admin/timeline/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const updatedData = [...timelineData];
      updatedData[index].isEditing = false; // Stop editing
      setTimelineData(updatedData);
    } catch (err) {
      setError('Failed to save data.');
    }
  };

  const handleCancel = (index) => {
    const updatedData = [...timelineData];
    updatedData[index].isEditing = false; // Stop editing
    setTimelineData(updatedData);
  };

  const handleDelete = async (index) => {
    const { id } = timelineData[index];
    // console.log('Deleting ID:', id);
    try {
      await axios.delete(`/api/admin/timeline`, { data: { id } }); // Pass the ID in the URL
      const updatedData = timelineData.filter((_, i) => i !== index);
      setTimelineData(updatedData);
    } catch (err) {
      setError('');
    }
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...timelineData];
    updatedData[index][name] = value; // Update the respective field
    setTimelineData(updatedData);
  };

  const handleNewTimelineChange = (e) => {
    const { name, value } = e.target;
    setNewTimeline((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddTimeline = () => {
    setIsAdding(true); // Set adding state to true
  };

  const handleSaveNewTimeline = async () => {
    const formData = new FormData();
    formData.append('year', newTimeline.year);
    formData.append('title', newTimeline.title);
    formData.append('icon', newTimeline.icon);

    try {
      const response = await axios.post('/api/admin/timeline', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setTimelineData([...timelineData, response.data]);
      setNewTimeline({ year: '', title: '', icon: '' }); // Reset the form
      setIsAdding(false); // Reset adding state
    } catch (err) {
      setError('Failed to add new timeline.');
    }
  };

  const handleCancelNewTimeline = () => {
    setIsAdding(false); // Cancel adding state
    setNewTimeline({ year: '', title: '', icon: '' }); // Reset the form
  };

  return (
    <Container>
      <Card className="mb-4" ref={formRef}>
        <CardBody>
          <CardTitle tag="h5">Timeline Manager</CardTitle>
          {error && <Alert color="danger">{error}</Alert>}

          {/* Add Timeline Button */}
          <Button color="primary" onClick={handleAddTimeline}>
            Add Timeline
          </Button>

          {/* New Timeline Form */}
          {isAdding && (
            <div className="mt-3">
              <h6>Add New Timeline Entry</h6>
              <FormGroup>
                <Label htmlFor="new-year">Year</Label>
                <Input
                  type="text"
                  name="year"
                  id="new-year"
                  value={newTimeline.year}
                  onChange={handleNewTimelineChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="new-title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="new-title"
                  value={newTimeline.title}
                  onChange={handleNewTimelineChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="new-icon">Icon Class</Label>
                <Input
                  type="text"
                  name="icon"
                  id="new-icon"
                  value={newTimeline.icon}
                  onChange={handleNewTimelineChange}
                  placeholder="e.g. fa-building"
                />
              </FormGroup>
              <div className="d-flex gap-2">
                <Button color="success" onClick={handleSaveNewTimeline}>
                  Save
                </Button>
                <Button color="secondary" onClick={handleCancelNewTimeline}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </CardBody>
      </Card>

      {/* Timeline List */}
      <Row>
        {timelineData.map((item, index) => (
          <Col sm="6" key={item.id} className="mb-2">
            <Card>
              <CardBody>
                {item.isEditing ? (
                  <>
                    <FormGroup>
                      <Label htmlFor={`year-${index}`}>Year</Label>
                      <Input
                        type="text"
                        name="year"
                        id={`year-${index}`}
                        value={item.year}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor={`title-${index}`}>Title</Label>
                      <Input
                        type="text"
                        name="title"
                        id={`title-${index}`}
                        value={item.title}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor={`icon-${index}`}>Icon Class</Label>
                      <Input
                        type="text"
                        name="icon"
                        id={`icon-${index}`}
                        value={item.icon}
                        onChange={(e) => handleInputChange(index, e)}
                        placeholder="e.g. fa-building"
                      />
                    </FormGroup>
                    <div className="d-flex gap-2">
                      <Button color="success" onClick={() => handleSave(index)}>Save</Button>
                      <Button color="secondary" onClick={() => handleCancel(index)}>Cancel</Button>
                    </div>
                  </>
                ) : (
                  <>
                    <h5>{item.year}</h5>
                    <p>{item.title}</p>
                    <i className={`fa ${item.icon}`} aria-hidden="true"></i>
                    <div className="d-flex gap-2">
                      <Button color="info" onClick={() => handleEdit(index)}>Edit</Button>
                      <Button color="danger" onClick={() => handleDelete(index)}>Delete</Button>
                    </div>
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Page;
