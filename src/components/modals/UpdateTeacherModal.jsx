import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateTeacherModal = ({ row, onUpdate }) => {
  const [updatedData, setUpdatedData] = useState({ ...row });

  const handleUpdate = async () => {
    try {
      // Make the API request to update the data
      const response = await fetch(`http://francisop.pythonanywhere.com/school/teacher/${row.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        // Perform any additional logic on successful update
        onUpdate(updatedData);
      } else {
        // Handle errors if the update request fails
        console.error('Update Request Failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Update Request Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Row</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Render the form fields based on your row data */}
          <Form.Group controlId="formField1">
            <Form.Label>Field 1</Form.Label>
            <Form.Control
              type="text"
              name="full_name"
              value={updatedData.full_name}
              onChange={handleChange}
            />
          </Form.Group>
          {/* Add more form fields as needed */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateTeacherModal;