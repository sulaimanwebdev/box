import { Col, Container, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import dairy from "../../images/dairy.jpg";
import kitkat from "../../images/kitkat.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  createOrderBtn: {
    background: "#EC6545",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#FFFFFF",
    padding: "0.8rem 2.5rem",
    textTransform: "none",
    marginTop: "2rem",
    marginRight: "1rem",
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
    marginTop: "2rem",
    "&:hover": {
      background: "transparent",
    },
  },
}));

const ViewProduct = () => {
  const classes = useStyles();

  return (
    <section className="bg-color">
      <Container>
        <Row className="mt-4">
          <Col xs={10} lg={12} className="mx-auto">
            <h1 className="order-head">Product Management</h1>
          </Col>
          <Col xs={10} lg={12} className="mt-4 white-div">
            <h1 className="order-title">Product Details</h1>

            <Row className="mt-5">
              <Col xs={10} lg={8}>
                <p className="create-order-text2 mb-3">
                  Name: <span className="create-order-text">Product Name</span>
                </p>
                <p className="create-order-text2 mb-3">
                  Supplier:{" "}
                  <span className="create-order-text">Lorem ispum</span>
                </p>
                <p className="create-order-text2 mb-3">
                  Description:{" "}
                  <span className="create-order-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure.
                  </span>
                </p>
                <p className="create-order-text2">
                  Category: <span className="create-order-text">Spices</span>
                </p>
                <p className="create-order-text2">
                  Unit Buy Price:{" "}
                  <span className="create-order-text">$130</span>
                </p>
                <p className="create-order-text2">
                  Unit Sales Price:{" "}
                  <span className="create-order-text">$150</span>
                </p>
                <p className="create-order-text2">
                  Points: <span className="create-order-text">50</span>
                </p>
                <p className="create-order-text2">Product Images</p>
                <Row className="mt-3 me-3">
                  <Col lg={3}>
                    <img
                      src={dairy}
                      alt="product"
                      className="img-fluid upload-img"
                    />
                  </Col>
                  <Col lg={3}>
                    <img
                      src={kitkat}
                      alt="product"
                      className="img-fluid upload-img"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <p className="create-order-text2 mt-3">
              Is Available: <span className="create-order-text">Yes</span>
            </p>
            <p className="create-order-text2">
              Inventory: <span className="create-order-text">No</span>
            </p>
            <p className="create-order-text2">
              Product Tag: <span className="create-order-text">Gluten</span>
            </p>
            <p className="create-order-text2">
              Highlighted:{" "}
              <span className="create-order-text">Lorem ispum</span>
            </p>
            <p className="create-order-text2">
              New Arrival:{" "}
              <span className="create-order-text">Lorem ispum</span>
            </p>
            <Link to="/edit-product">
              <Button className={classes.createOrderBtn}>Edit</Button>
            </Link>
            <Button className={classes.backBtn}>Delete</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ViewProduct;
