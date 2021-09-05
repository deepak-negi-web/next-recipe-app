import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useSession } from "next-auth/client";
import { useAuth } from "../../contexts/authContext";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Link from "next/link";
import { useRouter } from "next/router";

export default function UpdateProfile() {
  const [session, isSessionLoading] = useSession();
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const { currentUser, updateEmail, updatePassword, updateProfile } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !currentUser.emailVerified &&
      passwordRef.current.value !== passwordConfirmRef.current.value
    ) {
      return setError("Passwords do not match");
    }
    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (!currentUser.emailVerified && passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    if (nameRef.current.value) {
      promises.push(updateProfile({ displayName: nameRef.current.value }));
    }

    Promise.all(promises)
      .then(() => {
        setLoading(false);
        router.go(0);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to update account");
      });
  };
  if (!session && !isSessionLoading) {
    router.push("/login");
  }
  if (isSessionLoading) {
    return <Spinner />;
  }
  return (
    <Container
      className="d-flex align-items-center justify-content-center mt-2"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {session && (
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Update Profile</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    disabled
                    defaultValue={session?.user?.email || "N/A"}
                  />
                </Form.Group>
                <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    ref={nameRef}
                    defaultValue={session?.user?.name || "N/A"}
                  />
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    placeholder="Leave blank to keep the same"
                  />
                </Form.Group>
                <Form.Group id="passwordConfirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmRef} />
                </Form.Group>

                <Button
                  disabled={loading}
                  type="submit"
                  className="w-100 btn btn-primary"
                >
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
        )}

        <div className="w-100 text-center mt-2 ">
          <Link href="/">
            <a>Cancel</a>
          </Link>
        </div>
      </div>
    </Container>
  );
}
