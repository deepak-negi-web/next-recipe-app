import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/authContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
      setLoading(false);
      router.push("/");
    } catch (err) {
      console.log(err);
      setError("Failed to create an account");
      setLoading(false);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px", margin: "16px 0" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center">Sign Up</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  ref={nameRef}
                  required
                  placeholder="Enter your full name.."
                />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                  placeholder="Enter you email.."
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  required
                  placeholder="Enter your password.."
                />
              </Form.Group>
              <Form.Group id="passwordConfirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                  placeholder="Re-enter your password.."
                />
              </Form.Group>
              <Button
                disabled={loading}
                type="submit"
                className="w-100 btn btn-primary"
              >
                Sign Up
              </Button>
            </Form>
            <div className="w-100 text-center mt-2 ">
              Already have an account?{" "}
              <Link href="/login">
                <a>Log In</a>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
