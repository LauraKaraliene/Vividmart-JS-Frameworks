// function Contact() {
//   return (
//     <main className="flex flex-col mx-auto h-2/3 text-center">
//       <h1 className="text-black text-3xl ">Welcome to Getting started</h1>
//       <p>This is the contact page</p>
//     </main>
//   );
// }

// export default Contact;

import React from "react";
import ContactForm from "../components/ContactForm.jsx";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <Container className="mt-5 col-md-4">
      <h2 className="text-center">Contact Us</h2>
      <ContactForm />
    </Container>
  );
}

export default Contact;
