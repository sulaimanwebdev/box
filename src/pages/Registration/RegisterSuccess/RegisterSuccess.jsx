import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import check from "../../../images/check.png";
import "./RegisterSuccess.css";

const RegisterSuccess = () => {
  return (
    <section id="register-success">
      <div className="overlay"></div>
      <Container>
        <Row className="logo">
          <Col className="z-ind">
            <img src={logo} alt="logo" height="73.3" className="img-fluid" />
          </Col>
        </Row>
        <div className="mid">
          <Row className="login-form-row">
            <Col xs={10} lg={7} className="align-self-center mx-auto z-ind">
              <h1>Hello User</h1>
              <p className="text mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </Col>
            <Col xs={10} lg={5} className="mx-auto z-ind">
              <Card className="login-card text-center">
                <h2 className="my-4">Registeration Successful</h2>
                <div>
                  <img src={check} alt="check" className="img-fluid" />
                </div>
                <p className="register-text">
                  Your registration is completed you can now{" "}
                  <Link to="/">
                    <span style={{ color: "#EC6545" }}>Login</span>
                  </Link>{" "}
                  to use our portal
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default RegisterSuccess;
