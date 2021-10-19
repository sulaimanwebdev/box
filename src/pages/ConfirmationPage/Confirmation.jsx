import { Col, Container, Row } from "react-bootstrap";
import logo from "../../images/logo2.png";
import shape1 from "../../images/shape1.png";
import shape2 from "../../images/shape2.png";
import shape3 from "../../images/shape3.png";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
      <div>
        <img src={shape1} alt="shape" className="shapeI1"/>
      </div>
      <div className="shape-right-conf">
        <img  src={shape2} className="shapeI2" />
      </div>
        <Container className="pb-5">
          <Row>
            <Col>
              <Link to="/order-dashboard">
                <img
                  src={logo}
                  alt="logo"
                  className="img-fluid"
                  style={{ margin: "0 0 4rem 0" }}
                />
              </Link>
            </Col>
          </Row>

          <Row>
            <Col xs={12} lg={8} className="px-3 px-lg-0">
              <h1 className="order-title">Confirmation</h1>
              <h2 className="order-label mt-4">Thanks for the order!</h2>
              <p className="create-order-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Col>
          </Row>
        </Container>
        <img src={shape3} width="195px" height="449px"  className="shape3-img-conf shape333" />
    </>
  );
};

export default Confirmation;
