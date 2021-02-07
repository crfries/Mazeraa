import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mazeraaclothing",
        "template_fhsxyc8",
        e.target,
        "user_M935z1ih4tWD9DAfnCT3r"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <FormContainer>
      <Form
        onSubmit={submitHandler}
        className='pt-5 '
        style={{ width: "300px", marginRight: "50px" }}
      >
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name='name'
            type='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter name'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='message'>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as='textarea'
            row='3'
            name='message'
            onChange={(e) => setMessage(e.target.value)}
            style={{ height: "200px" }}
            value={message}
          ></Form.Control>
        </Form.Group>

        <Button
          type='submit'
          variant='primary'
          style={{ width: "300px", marginRight: "50px" }}
        >
          Send Message
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
