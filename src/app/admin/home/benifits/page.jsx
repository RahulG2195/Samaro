"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input, FormGroup, Table } from "reactstrap";
import SliderImagesEditor from "@/components/Admin/SliderImagesEditor/page";

const BenefitsEditor = () => {
  const [benefits, setBenefits] = useState([]);
  const [newBenefit, setNewBenefit] = useState({ icons: "", titles: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitles, setEditedTitles] = useState({});
  const [heading, setHeading] = useState("");
  const [isEditingHeading, setIsEditingHeading] = useState(false);
  console.log("cls", heading)

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await axios.get("/api/admin/benifits");
        setBenefits(response.data);
      } catch (error) {
        console.error("Error fetching benefits:", error);
      }
    };

    const fetchHeading = async () => {
      try {
        const response = await axios.get("/api/admin/benefits_slider");
        setHeading(response.data[0].heading); // Assuming the response contains a heading field
      } catch (error) {
        console.error("Error fetching heading:", error);
      }
    };

    fetchBenefits();
    fetchHeading();
  }, [isEditing]);

  const addBenefit = async () => {
    const formData = new FormData();
    formData.append("file", newBenefit.icons);
    formData.append("titles", newBenefit.titles);

    try {
      const response = await axios.post("/api/admin/benifits", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setBenefits([...benefits, response.data]);
      setNewBenefit({ icons: "", titles: "" });
      setIsEditing(true);
    } catch (error) {
      console.error("Error adding benefit:", error);
    }
  };


  const updateHeading = async () => {
    try {
      const response = await fetch('/api/admin/benefits_slider', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ heading }), // Directly use the current heading state
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log(data.message); // Successfully updated
      } else {
        console.error(data.message); // Handle error response
      }
    } catch (error) {
      console.error('Error updating heading:', error);
    }
  };
  

  const updateBenefit = async (benefitId, updatedBenefitData) => {
    const formData = new FormData();

    // Check for icons update
    if (updatedBenefitData.icons instanceof File) {
      formData.append("icons", updatedBenefitData.icons);
    }

    // Titles update
    formData.append("titles", updatedBenefitData.titles);

    // Sequence update
    if (updatedBenefitData.sequence !== undefined) {
      formData.append("sequence", updatedBenefitData.sequence);
    }

    formData.append("id", benefitId);

    try {
      const response = await axios.put(`/api/admin/benifits/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // Update the local state if necessary
      // setBenefits((prev) => prev.map((benefit) => benefit.id === benefitId ? response.data : benefit));
    } catch (error) {
      console.error("Error updating benefit:", error);
    }
  };


  const handleFileChange = async (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const updatedBenefitData = {
        ...benefits.find((b) => b.id === id),
        icons: file,
      };
      await updateBenefit(id, updatedBenefitData);
    }
  };

  const handleTitleChange = (e, id) => {
    const value = e.target.value;
    setEditedTitles((prev) => ({ ...prev, [id]: value }));
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      const initialEditedTitles = {};
      benefits.forEach((benefit) => {
        initialEditedTitles[benefit.id] = benefit.titles;
      });
      setEditedTitles(initialEditedTitles);
    } else {
      setEditedTitles({}); // Clear titles on cancel
    }
  };

  const deleteBenefit = async (id) => {
    try {
      await axios.delete("/api/admin/benifits", { data: { id } });
      setBenefits(benefits.filter((benefit) => benefit.id !== id));
    } catch (error) {
      console.error("Error deleting benefit:", error);
    }
  };

  const moveBenefit = async (index, direction) => {
    const newBenefits = [...benefits];
    const targetIndex = index + direction;

    if (targetIndex >= 0 && targetIndex < newBenefits.length) {
      // Swap benefits
      const temp = newBenefits[index];
      newBenefits[index] = newBenefits[targetIndex];
      newBenefits[targetIndex] = temp;

      setBenefits(newBenefits);

      // Update the sequence for both benefits
      await Promise.all([
        updateBenefit(newBenefits[index].id, { titles: editedTitles[newBenefits[index].id] || newBenefits[index].titles, sequence: targetIndex }),
        updateBenefit(newBenefits[targetIndex].id, { titles: editedTitles[newBenefits[targetIndex].id] || newBenefits[targetIndex].titles, sequence: index })
      ]);
    }
  };


  return (
    <div>

      <h1>Benefits Editor</h1>

      {/* <h2>Heading</h2> */}
      <div className="my-4">
        <Input
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          readOnly={!isEditingHeading} // Make input read-only if not editing
        />
        <Button
          color="primary"
          className="m-2"
          onClick={async () => {
            if (isEditingHeading) {
              await updateHeading(); // Save changes
            }
            setIsEditingHeading(!isEditingHeading); // Toggle editing state
          }}
        >
          {isEditingHeading ? "Save Heading" : "Edit Heading"}
        </Button>
        {isEditingHeading && (
          <Button
            color="secondary"
            onClick={() => {
              setIsEditingHeading(false);
              // Optionally, reset the heading if you want to discard changes
              // setHeading(originalHeading); // Uncomment if you want to revert changes
            }}
          >
            Cancel
          </Button>
        )}
      </div>



      <FormGroup>
        <h4>Icons and Titles</h4>

        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setNewBenefit({ ...newBenefit, icons: e.target.files[0] })}
        />
        <Input
          placeholder="Titles"
          value={newBenefit.titles}
          onChange={(e) => setNewBenefit({ ...newBenefit, titles: e.target.value })}
        />
        <Button onClick={addBenefit}>Add Benefit</Button>
      </FormGroup>

      <Button color="primary" onClick={handleEdit}>
        {isEditing ? "Cancel Editing" : "Edit"}
      </Button>
      {isEditing && (
        <Button color="success" onClick={() => {
          benefits.forEach((benefit) => {
            updateBenefit(benefit.id, { titles: editedTitles[benefit.id] || benefit.titles });
          });
          setIsEditing(false);
        }}>
          Save
        </Button>
      )}
      <Table striped>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {benefits.map((benefit, index) => (
            <tr key={benefit.id}>
              <td>
                <img
                  src={`/uploads/${benefit.icons}`}
                  alt={benefit.titles}
                  style={{ width: "50px", height: "50px" }}
                />
                {isEditing && (
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, benefit.id)}
                  />
                )}
              </td>
              <td>
                {isEditing ? (
                  <Input
                    value={editedTitles[benefit.id] || benefit.titles}
                    onChange={(e) => handleTitleChange(e, benefit.id)}
                  />
                ) : (
                  benefit.titles
                )}
              </td>
              <td>
                {isEditing && (
                  <>
                    {index > 0 && (
                      <Button color="secondary" onClick={() => moveBenefit(index, -1)}>
                        <i className="fa fa-arrow-up" />
                      </Button>
                    )}
                    {index < benefits.length - 1 && (
                      <Button color="secondary" onClick={() => moveBenefit(index, 1)}>
                        <i className="fa fa-arrow-down" />
                      </Button>
                    )}
                  </>
                )}
                <Button color="danger" onClick={() => deleteBenefit(benefit.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <SliderImagesEditor />
      </div>
    </div>
  );
};

export default BenefitsEditor;
