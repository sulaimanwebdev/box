import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import { login } from "../../Redux/Actions/userActions";
import { useDispatch } from "react-redux";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(data));
    history.push("/order-dashboard");
  };
  return (
    <section id="login">
      <div className="overlay"></div>
      <Container>
        <Row>
          <Col className="z-ind">
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
                <h2 className="mb-4">Login with your details</h2>
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-4">
                    <Form.Label className="label-form mb-3">Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      className="form-control-login"
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label className="label-form mb-3">
                      Password
                    </Form.Label>
                    <Form.Control
                      required
                      type="password"
                      className="form-control-login"
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Link to="/forgot-password">
                    <p className="text-end forget-pass">
                      Forgot your password?
                    </p>
                  </Link>

                  <div className="d-grid mt-4">
                    <button type="submit" className="login-btn btn">
                      Login
                    </button>
                  </div>

                  <div className="d-flex justify-content-center mt-3">
                    <p className="new-user-login me-1">New User?</p>
                    <Link to="/registration-step-one">
                      <p className="reg-login">Register</p>
                    </Link>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Login;
