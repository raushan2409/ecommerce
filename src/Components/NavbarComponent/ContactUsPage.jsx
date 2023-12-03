import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import classes from "../style/ContactUsPage.module.css";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addContactToFirebase(formData);
  };
  async function addContactToFirebase(formData) {
    try {
      const response = await fetch(
        `https://form-sharp-default-rtdb.firebaseio.com/users.json`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add contact to Firebase");
      }
      const responseData = await response.json();
      console.log("Contact added successfully:", responseData);
    } catch (error) {
      console.error("Error adding contact to Firebase:", error);
    }
  }

  return (
    <Form className={classes.container} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone No</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
