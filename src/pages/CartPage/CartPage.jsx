import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo2.png";
import pro1 from "../../images/pro1.jpg";
import shape1 from "../../images/shape1.png";
import shape2 from "../../images/shape2.png";
import shape3 from "../../images/shape3.png";

const useStyles = makeStyles((theme) => ({
  createOrderBtn: {
    background: "#EC6545",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#FFFFFF",
    padding: "0.8rem 2rem",
    textTransform: "none",
    "&:hover": {
      background: "#EC6545",
    },
  },
  backBtn: {
    border: "1px solid #EC6545",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#EC6545",
    padding: "0.8rem 2.5rem",
    textTransform: "none",
    "&:hover": {
      background: "transparent",
    },
  },
}));

const CartPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    address: "",
    postCode: "",
    city: "",
    mobileNo: "",
    desiredDeliveryDate: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div>
        <img src={shape1} alt="shape" className="shapeI1"/>
      </div>

      <div className="shape-right-cart">
        <img  src={shape2}  className="shapeI2" />
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
            <Col xs={12} lg={8} className="px-3 px-lg-0 pe-lg-5">
              <h1 className="order-title-c">Cotton Trim Dress</h1>
              <h2 className="order-label mt-4">Description</h2>
              <p className="create-order-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <h1 className="order-title-c" style={{ marginTop: "5rem" }}>
                Delivery Information
              </h1>
              <Form onSubmit={submitHandler} id="myform">
                <Row className="mt-4">
                  <Col xs={12} md={6} className="mx-auto mb-4 mb-md-0">
                    <Form.Group>
                      <Form.Control
                        required
                        placeholder="Name"
                        className="form-control-order"
                        onChange={(e) =>
                          setData({
                            ...data,
                            name: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} className="mx-auto">
                    <Form.Group>
                      <Form.Control
                        required
                        placeholder="Address"
                        className="form-control-order"
                        onChange={(e) =>
                          setData({
                            ...data,
                            address: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} className="mx-auto mt-4">
                    <Form.Group>
                      <Form.Control
                        required
                        placeholder="Post Code"
                        type="number"
                        className="form-control-order"
                        onChange={(e) =>
                          setData({
                            ...data,
                            postCode: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} className="mx-auto mt-4">
                    <Form.Group>
                      <Form.Control
                        required
                        placeholder="City"
                        className="form-control-order"
                        onChange={(e) =>
                          setData({
                            ...data,
                            city: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} className="mx-auto mx-md-0 mt-4">
                    <Form.Group>
                      <Form.Control
                        required
                        placeholder="Mobile no"
                        type="number"
                        className="form-control-order"
                        onChange={(e) =>
                          setData({
                            ...data,
                            mobileNo: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6} className="mx-auto mx-md-0 mt-4">
                    <h2 className="order-label mb-2">Desired delivery date</h2>
                    <Form.Group>
                      <Form.Control
                        required
                        type="date"
                        placeholder="Desired delivery date"
                        className="form-control-order"
                        onChange={(e) =>
                          setData({
                            ...data,
                            desiredDeliveryDate: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Col>

            <Col xs={12} lg={4} className="px-3 px-lg-0 align-self-center">
              <Card className="cart-card mt-5 mt-lg-0 text-center">
                <h1 className="cart-text">Selected Box</h1>
                <div className="p-4">
                  <img src={pro1} alt="product" className="img-fluid" />
                </div>
                <h1 className="cart-text mb-5">Box nr.1</h1>
                <div className="d-flex justify-content-center">
                  <Link to="/all-products" className="me-lg-4 me-3">
                    <Button className={classes.backBtn}>Back</Button>
                  </Link>
                  <Button
                    type="submit"
                    form="myform"
                    className={classes.createOrderBtn}
                    onClick={() => history.push("./confirmation")}
                  >
                    Confirm
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <img src={shape3} width="195px" height="449px"  className="shape3-img-cart shape333" />
    </>
  );
};

export default CartPage;
