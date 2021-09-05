import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/authContext";
import Spinner from "../../Components/UI/Spinner/Spinner";

export default function Login() {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, googleLogin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      router.push("/");
    } catch (err) {
      console.log(err);
      setError("Failed to sign up");
    }

    setLoading(false);
  };

  const loginWithGoogle = async () => {
    try {
      setError("");
      setLoading(true);
      await googleLogin();
      setLoading(false);
      router.push("/");
    } catch (err) {
      console.log(err);
      setError("Failed to sign up");
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px", margin: "16px 0" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="googleCard" onClick={loginWithGoogle}>
              <div className="row ">
                <div className="col-md-12">
                  <button className="btn btn-lg btn-google btn-block  btn-outline">
                    <img
                      src="https://img.icons8.com/color/48/000000/google-logo.png"
                      alt="google icon"
                    />
                    Login Using Google
                  </button>
                </div>
              </div>
            </div>
            <div className="or-container">
              <div className="line-separator"></div>
              <div className="or-label">or</div>
              <div className="line-separator"></div>
            </div>
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
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  required
                  placeholder="Enter your password here"
                />
              </Form.Group>
              <Button
                disabled={loading}
                type="submit"
                className="w-100 btn btn-primary"
              >
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3 ">
              <Link href="/forgotPassword">
                <a>Forgot Password?</a>
              </Link>
            </div>
            <div className="w-100 text-center mt-2 ">
              Need an account?
              <Link href="/signup">
                <a>Sign Up</a>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
