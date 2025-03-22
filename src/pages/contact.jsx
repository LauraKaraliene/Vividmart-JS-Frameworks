import React from "react";
import ContactForm from "../components/ContactForm.jsx";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <Container className="mt-5 col-md-4">
      <h2 className="text-center poppins">Contact Us</h2>
      <ContactForm />
    </Container>
  );
}

export default Contact;
