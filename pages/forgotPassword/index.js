import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/authContext";
import Link from "next/link";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox for further instructions");
    } catch (err) {
      console.log(err);
      setError("Failed to sign up");
    }

    setLoading(false);
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Reset Password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="info">{message}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                  placeholder="Enter your email here"
                />
              </Form.Group>

              <Button
                disabled={loading}
                type="submit"
                className="w-100 btn btn-primary"
              >
                Reset Password
              </Button>
            </Form>
            <div className="w-100 text-center mt-3 ">
              <Link href="/login">
                <a>Log In</a>
              </Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2 ">
          Need an account?
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </div>
      </div>
    </Container>
  );
}
