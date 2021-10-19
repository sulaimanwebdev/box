import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const ForgetPassword = () => {
  const [data, setData] = useState({
    emailAddress: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <section id="login">
       <div className="overlay"></div>
      <Container>
        <Row>
          <Col className='z-ind'>
            <img
              src={logo}
              alt="logo"
              height="73.3"
              className="img-fluid mb-4 logo"
            />
          </Col>
        </Row>

        <div className="mid">
          <Row className="login-form-row">
            <Col xs={10} lg={7} className="align-self-center mx-auto">
              <h1>
                Welcome back
                <br /> Fahad
              </h1>
              <p className="text mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </Col>
            <Col xs={10} lg={5} className="mx-auto">
              <Card className="login-card">
                <h2 className="mb-4">Forgot Password</h2>
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-4">
                    <Form.Label className="label-form mb-3">Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      className="form-control-login"
                      onChange={(e) =>
                        setData({ ...data, emailAddress: e.target.value })
                      }
                    />
                  </Form.Group>

                  <div className="d-grid mt-5">
                    <button type="submit" className="login-btn btn">
                      Send Email
                    </button>
                  </div>

                  <Link to="/">
                    <p className="text-center new-user-login text-decoration-underline mt-3">
                      Back
                    </p>
                  </Link>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ForgetPassword;
