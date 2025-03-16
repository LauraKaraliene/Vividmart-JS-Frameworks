import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import styles from "./ContactForm.module.scss";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border rounded poppins"
    >
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          {...register("fullName", {
            required: "Full name is required",
            minLength: 3,
          })}
          type="text"
          placeholder="Enter your full name"
        />
        <p className="text-danger">{errors.fullName?.message}</p>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          {...register("subject", {
            required: "Subject is required",
            minLength: 3,
          })}
          type="text"
          placeholder="Enter subject"
        />
        <p className="text-danger">{errors.subject?.message}</p>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          type="email"
          placeholder="Enter your email"
        />
        <p className="text-danger">{errors.email?.message}</p>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          {...register("body", {
            required: "Message is required",
            minLength: 3,
          })}
          as="textarea"
          rows={4}
          placeholder="Enter your message"
        />
        <p className="text-danger">{errors.body?.message}</p>
      </Form.Group>

      <Button
        type="submit"
        variant="primary"
        className={`syncopate w-100 ${styles.submit}`}
      >
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
