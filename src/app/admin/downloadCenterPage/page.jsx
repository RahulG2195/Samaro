"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Input, Button, Table } from "reactstrap";

const DownloadCenterEditor = () => {
  const [downloads, setDownloads] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [newDownload, setNewDownload] = useState({
    dc_category: "",
    dc_type: "",
    imgurl: "", // Changed to imgurl
    pdf: null,
    Badgetitle: "", // Added Badgetitle field
    status: 1,
  });

  useEffect(() => {
    fetchDownloads();
  }, []);

  const fetchDownloads = async () => {
    try {
      const response = await axios.get("/api/admin/main_dcPage");
      setDownloads(response.data);
    } catch (error) {
      console.error("Error fetching download items:", error);
    }
  };

  const handleToggleEditMode = () => {
    setEditMode((prevMode) => !prevMode);
  };

  const handleSave = async () => {
    try {
      const trimmedDownloads = downloads.map((download) => ({
        ...download,
        dc_category: download.dc_category.trim(),
        dc_type: download.dc_type.trim(),
        Badgetitle: download.Badgetitle.trim(),
      }));

      await Promise.all(
        trimmedDownloads.map(async (download) => {
          const formData = new FormData();
          formData.append("dc_id", download.dc_id);
          formData.append("dc_category", download.dc_category);
          formData.append("dc_type", download.dc_type);
          formData.append("Badgetitle", download.Badgetitle);
          formData.append("status", download.status);
          if (download.imgurl instanceof File) {
            formData.append("imgurl", download.imgurl);
          }
          if (download.pdf instanceof File) {
            formData.append("pdf", download.pdf);
          }
          await axios.put("/api/admin/main_dcPage", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        })
      );

      
      // Save new download if any
      const trimmedNewDownload = {
        ...newDownload,
        dc_category: newDownload.dc_category.trim(),
        dc_type: newDownload.dc_type.trim(),
        Badgetitle: newDownload.Badgetitle.trim(),
      };

      if (
        trimmedNewDownload.dc_category &&
        trimmedNewDownload.dc_type &&
        trimmedNewDownload.imgurl &&
        trimmedNewDownload.pdf
      ) {
        const formData = new FormData();
        formData.append("dc_category", trimmedNewDownload.dc_category);
        formData.append("dc_type", trimmedNewDownload.dc_type);
        formData.append("imgurl", trimmedNewDownload.imgurl);
        formData.append("pdf", trimmedNewDownload.pdf);
        formData.append("Badgetitle", trimmedNewDownload.Badgetitle);
        formData.append("status", trimmedNewDownload.status);

        await axios.post("/api/admin/main_dcPage", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setNewDownload({
          dc_category: "",
          dc_type: "",
          imgurl: "",
          pdf: null,
          Badgetitle: "",
          status: 1,
        });

        fetchDownloads(); // Refresh the list after save
      }

      setEditMode(false);
    } catch (error) {
      console.error("Error saving downloads:", error);
    }
  };

  const handleInputChange = (field, value, dc_id) => {
    if (dc_id !== "new") {
      // Update existing download
      const updatedDownloads = downloads.map((download) => {
        if (download.dc_id === dc_id) {
          return {
            ...download,
            [field]: value,
          };
        }
        return download;
      });
      setDownloads(updatedDownloads);
    } else {
      // Update new download
      setNewDownload({
        ...newDownload,
        [field]: value,
      });
    }
  };

  const handleFileChange = (event, fileType, dc_id) => {
    const file = event.target.files[0];

    if (dc_id !== "new") {
      // Update existing download
      const updatedDownloads = downloads.map((download) => {
        if (download.dc_id === dc_id) {
          return {
            ...download,
            [fileType]: file,
            [`${fileType}`]: file, // Store file name in state
          };
        }
        return download;
      });
      setDownloads(updatedDownloads);
    } else {
      // Update new download
      setNewDownload({
        ...newDownload,
        [fileType]: file,
        [`${fileType}`]: file, // Store file name in state
      });
    }
  };

  const handleAddNewDownload = () => {
    // Add new download to downloads array
    if (
      newDownload.dc_category &&
      newDownload.dc_type &&
      newDownload.imgurl &&
      newDownload.pdf
    ) {
      setDownloads([...downloads, { ...newDownload }]);
      setNewDownload({
        dc_category: "",
        dc_type: "",
        imgurl: "",
        pdf: null,
        Badgetitle: "",
        status: 1,
      });
    }
  };

  const handleRemove = async (dc_id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`/api/admin/main_dcPage`, { data: { dc_id } });
        setDownloads(downloads.filter((item) => item.dc_id !== dc_id));
      } catch (error) {
        console.error("Error deleting download item:", error);
      }
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    fetchDownloads();
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <h3>Download Center Editor</h3>
        {!editMode && (
          <Button color="secondary" onClick={handleToggleEditMode}>
            Edit
          </Button>
        )}
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Type</th>
            <th>Badge Title</th>
            <th>Image</th>
            <th>PDF</th>
            {editMode && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {downloads.map((download) => (
            <tr key={download.dc_id}>
              <td>
                {editMode ? (
                  <Input
                    type="text"
                    value={download.dc_category}
                    onChange={(e) =>
                      handleInputChange("dc_category", e.target.value, download.dc_id)
                    }
                    required
                  />
                ) : (
                  download.dc_category
                )}
              </td>
              <td>
                {editMode ? (
                  <Input
                    type="text"
                    value={download.dc_type}
                    onChange={(e) =>
                      handleInputChange("dc_type", e.target.value, download.dc_id)
                    }
                  />
                ) : (
                  download.dc_type
                )}
              </td>
              <td>
                {editMode ? (
                  <Input
                    type="text"
                    value={download.Badgetitle}
                    onChange={(e) =>
                      handleInputChange("Badgetitle", e.target.value, download.dc_id)
                    }
                  />
                ) : (
                  download.Badgetitle
                )}
              </td>
              <td>
                {editMode ? (
                  <Input
                    type="file"
                    onChange={(e) => handleFileChange(e, "imgurl", download.dc_id)}
                  />
                ) : (
                  <img
                    src={typeof download?.imgurl === "string" ? `/uploads/${download.imgurl}` : URL.createObjectURL(download.imgurl)}
                    alt="Download"
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </td>
              <td>
                {editMode ? (
                  <Input
                    type="file"
                    onChange={(e) => handleFileChange(e, "pdf", download.dc_id)}
                  />
                ) : (
                  <span>{typeof download.pdf === "string" ? download.pdf : download.pdf.name}</span>
                )}
              </td>
              {editMode && (
                <td>
                  <Button color="danger" onClick={() => handleRemove(download.dc_id)}>
                    Remove
                  </Button>
                </td>
              )}
            </tr>
          ))}
          {editMode && (
            <tr key="new-download">
              <td>
                <Input
                  type="text"
                  value={newDownload.dc_category}
                  onChange={(e) => handleInputChange("dc_category", e.target.value, "new")}
                />
              </td>
              <td>
                <Input
                  type="text"
                  value={newDownload.dc_type}
                  onChange={(e) => handleInputChange("dc_type", e.target.value, "new")}
                />
              </td>
              <td>
                <Input
                  type="text"
                  value={newDownload.Badgetitle}
                  onChange={(e) => handleInputChange("Badgetitle", e.target.value, "new")}
                />
              </td>
              <td>
                <Input
                  type="file"
                  onChange={(e) => handleFileChange(e, "imgurl", "new")}
                />
              </td>
              <td>
                <Input
                  type="file"
                  onChange={(e) => handleFileChange(e, "pdf", "new")}
                />
              </td>
              <td>
                <Button color="primary" onClick={handleAddNewDownload}>
                  Add
                </Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

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
    </Container>
  );
};

export default DownloadCenterEditor;
