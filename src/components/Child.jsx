import React from 'react';
import Form from 'react-bootstrap/Form';

export const Child = ({ onChangeName }) => {
  const handleNameChange = (event) => {
    onChangeName(event.target.value);
  };

  return (
    <div className="child-box">
      <p>
        <i>Child component</i>
      </p>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={handleNameChange}
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};
