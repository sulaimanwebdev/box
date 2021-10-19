import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import { registerOne } from "../../Redux/Actions/userActions";
import "./Registration.css";

const RegisterPageOne = () => {
  const [data, setData] = useState({
    organizationNumber: "",
    companyName: "",
    companyAddress: "",
    companyCity: "",
    poBox: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerOne(data));

    history.push("/registration-step-two");
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
              <p className="register-text">Company Info</p>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-4">
                  <Form.Control
                    required
                    placeholder="Organization Number"
                    type="number"
                    className="form-control-login"
                    onChange={(e) =>
                      setData({ ...data, organizationNumber: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    required
                    placeholder="Company Name"
                    className="form-control-login"
                    onChange={(e) =>
                      setData({ ...data, companyName: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    required
                    placeholder="Address"
                    className="form-control-login"
                    onChange={(e) =>
                      setData({ ...data, companyAddress: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    required
                    placeholder="City"
                    className="form-control-login"
                    onChange={(e) =>
                      setData({ ...data, companyCity: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    required
                    placeholder="Post Box"
                    type="number"
                    className="form-control-login"
                    onChange={(e) =>
                      setData({ ...data, poBox: e.target.value })
                    }
                  />
                </Form.Group>

                <div className="d-grid mt-4">
                  <button type="submit" className="login-btn btn">
                    Next
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

export default RegisterPageOne;
