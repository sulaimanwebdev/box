import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import { useDispatch } from "react-redux";
import { registerTwo } from "../../Redux/Actions/userActions";
import "./Registration.css";

const RegisterPageTwo = () => {
  const [data, setData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userMobileNumber: "",
    userPassword: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerTwo(data));
    history.push("/registration-success");
  };
  return (
    <section id="register">
      <div className="overlay"></div>
      <Container>
        <Row className="logo">
          <Col className="z-ind">
            <img src={logo} alt="logo" height="73.3" className="img-fluid" />
          </Col>
        </Row>

        <Row>
          <Col xs={10} lg={7} className="align-self-center mx-auto z-ind">
            <h1>Hello User</h1>
            <p className="text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </Col>
          <Col xs={10} lg={5} className="mx-auto z-ind pb-4">
            <Card className="login-card">
              <h2>Register Yourself</h2>
              <p className="register-text">Contact Person</p>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-4">
                  <Form.Control
                    required
                    placeholder="First Name"
                    className="form-control-login"
                    onChange={(e) =>
                      setData({ ...data, userFirstName: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    required
                    placeholder="Last Name"
                    className="form-control-login"
                    onChange={(e) =>
                      setData({ ...data, userLastName: e.target.value })
                    }
                  />
                </Form.Group>
      
                <Form.Group className="mb-4">
                  <Form.Control
                    required
                    placeholder="Email"
                    type="email"
                    className="form-control-login"
                    onChange={(e) =>
                      setData({ ...data, userEmail: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    required
                    placeholder="Mobile"
                    type="number"
                    className="form-control-login"
                    onChange={(e) =>
                      setData({ ...data, userMobileNumber: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    required
                    placeholder="Password"
                    type="password"
                    className="form-control-login"
                    onChange={(e) =>
                      setData({ ...data, userPassword: e.target.value })
                    }
                  />
                </Form.Group>

                <div className="d-grid mt-4">
                  <button type="submit" className="login-btn btn">
                    Register
                  </button>
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <p className="new-user-login me-1">Already registered?</p>
                  <Link to="/">
                    <p className="reg-login">Login</p>
                  </Link>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RegisterPageTwo;
