import { Col, Container, Row } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import pencil from "../../images/pencil.png";

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
    marginRight: "2rem",
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
    padding: "0.8rem 3rem",
    textTransform: "none",
    "&:hover": {
      background: "transparent",
    },
  },
}));

const ReviewOrder = () => {
  const classes = useStyles();
  let noOfBox = 49;
  let pricePerBox = 500;
  let pricePerBoxTotal = 24500;
  let deliveryPerBox = 70;
  let deliveryPerBoxTotal = 3449;

  return (
    <section className="bg-color">
      <Container>
        <Row className="mt-4">
          <Col xs={10} lg={12} className="mx-auto">
            <h1 className="order-head">Order Management</h1>
          </Col>
          <Col xs={10} lg={12} className="mt-4 white-div">
            <h1 className="order-title">Review Order</h1>
            <h2 className="order-label mt-5">Order Type</h2>
            <p className="create-order-text mt-4">Pre-Curated Box</p>

            <Row className="mt-5">
              <Col xs={10} lg={6}>
                <h2 className="order-label mb-3">Order Info</h2>
                <div className="review-order-card">
                  <img
                    src={pencil}
                    alt="pencil"
                    className="img-fluid review-icon"
                  />
                  <p className="create-order-text2 mb-3">
                    Order Name: <span className="create-order-text">Fahad</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Order Description:{" "}
                    <span className="create-order-text">Lorem ispum</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Department: <span className="create-order-text"> I.T</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Pick Box:{" "}
                    <span className="create-order-text">Lorem ispum</span>
                  </p>
                  <p className="create-order-text2">
                    Order Expiry Date:{" "}
                    <span className="create-order-text">19th Aug, 2021</span>
                  </p>
                </div>
              </Col>
              <Col xs={10} lg={6}>
                <h2 className="order-label mb-3">Recipients</h2>
                <div className="review-order-card">
                  <img
                    src={pencil}
                    alt="pencil"
                    className="img-fluid review-icon"
                  />
                  <p className="create-order-text2 mb-3">
                    Recipients Email:{" "}
                    <span className="create-order-text"> fahad@xyz.com</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Send As:{" "}
                    <span className="create-order-text">Lorem ispum</span>
                  </p>
                  <p className="create-order-text2">
                    Message:{" "}
                    <span className="create-order-text">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={10} lg={6}>
                <h2 className="order-label mb-3">Extras</h2>
                <div className="review-order-card">
                  <img
                    src={pencil}
                    alt="pencil"
                    className="img-fluid review-icon"
                  />
                  <p className="create-order-text2 mb-3">
                    Want your own SWAGs in each box:{" "}
                    <span className="create-order-text">No</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Want a special printed message in each box:{" "}
                    <span className="create-order-text">No</span>
                  </p>
                </div>
              </Col>
              <Col xs={10} lg={6}>
                <h2 className="order-label mb-3">Delivery Options</h2>
                <div className="review-order-card">
                  <img
                    src={pencil}
                    alt="pencil"
                    className="img-fluid review-icon"
                  />
                  <p className="create-order-text2 mb-3">
                    Deliver Immediately after closure or Send for delivery on 16
                    Aug, 2021: <span className="create-order-text">No</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Invoice Reference:{" "}
                    <span className="create-order-text">APK-875481</span>
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={10} lg={12}>
                <h2 className="order-label mb-3">Price Estimate</h2>
                <div className="mt-5">
                  <p className="mb-3">
                    <span className="create-order-text2">Number of boxes:</span>{" "}
                    {noOfBox}
                  </p>
                  <p className="mb-3">
                    <span className="create-order-text2">Price per box:</span>{" "}
                    {`${pricePerBox} NOK (Total: ${pricePerBoxTotal} NOK)`}
                  </p>
                  <p className="mb-4">
                    <span className="create-order-text2">
                      Delivery per box:
                    </span>{" "}
                    {`${deliveryPerBox} NOK (Total: ${deliveryPerBoxTotal} NOK)`}
                  </p>
                  <p className="create-order-text2 mb-3">
                    Grand Total: {pricePerBoxTotal + deliveryPerBoxTotal} NOK
                  </p>
                  <div>
                    <small style={{ color: "#737373" }}>
                      *Prices are without VAT
                    </small>
                  </div>
                  <small style={{ color: "#737373" }}>
                    *Final Price is may be lower. Depend on how many accept
                    invite and order
                  </small>
                </div>
              </Col>
            </Row>
            <div className="mt-5">
              <Link to="/view-order">
                <Button className={classes.createOrderBtn}>Create Order</Button>
              </Link>
              <Link to="/create-order">
                <Button className={classes.backBtn}>
                  <IoIosArrowBack /> Back
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReviewOrder;
