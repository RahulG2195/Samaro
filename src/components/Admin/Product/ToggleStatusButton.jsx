import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'reactstrap';

const ToggleStatusButton = ({ initialStatus, prodId, onUpdateStatus }) => {
    const [status, setStatus] = useState(initialStatus);

    const handleToggle = async () => {
        try {
            const newStatus = status === 1 ? 0 : 1;
            setStatus(newStatus);

            const payload = {
                prod_status: newStatus,
                prodId: prodId
            };

            const response = await axios.patch(`/api/products`, payload);

            if (response.status === 200) {
                onUpdateStatus(); // Notify parent component of status update
            } else {
                console.error("Failed to update product status");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Button
            onClick={handleToggle}
            color={status === 1 ? "success" : "warning"}
            className="toggle-button"
        >
            {status === 1 ? "Deactivate product" : "Activate product"}
        </Button>
    );
};

export default ToggleStatusButton;
