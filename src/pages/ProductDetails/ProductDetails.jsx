import { Col, Container, Row } from "react-bootstrap";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import productImg from "../../images/f1.png";
import productImg1 from "../../images/f2.jpg";
import productImg2 from "../../images/f3.jpg";
import productImg3 from "../../images/f4.jpg";
import productImg4 from "../../images/f5.jpg";
import dstar from "../../images/dstar.png";
import star from "../../images/star.png";
import location from "../../images/location.png";
import shape1 from "../../images/shape1.png";
import shape2 from "../../images/shape2.png";
import shape3 from "../../images/shape3.png";
import logo from "../../images/logo2.png";

const useStyles = makeStyles((theme) => ({
  createOrderBtn: {
    background: "#EC6545",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#FFFFFF",
    padding: "0.8rem 3rem",
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
    padding: "0.8rem 3rem",
    textTransform: "none",
    "&:hover": {
      background: "transparent",
    },
  },
}));

const ProductDetails = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <img src={shape1} alt="shape" className="shapeI1" />
      </div>
      <div className="shape-right-product">
        <img  src={shape2}   className="shapeI2 hhhhhh"/>
      </div>
        <Container className="pb-5 mb-5">
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
            <Col xs={12} lg={6} className="px-3 px-lg-0">
              <Carousel
                showArrows={true}
                showIndicators={false}
                showStatus={false}
              >
                <div>
                  <img src={productImg} alt="product" className="img-fluid" />
                </div>
                <div>
                  <img src={productImg1} alt="product" className="img-fluid" />
                </div>
                <div>
                  <img src={productImg2} alt="product" className="img-fluid" />
                </div>
                <div>
                  <img src={productImg3} alt="product" className="img-fluid" />
                </div>
                <div>
                  <img src={productImg4} alt="product" className="img-fluid" />
                </div>
              </Carousel>
            </Col>
            <Col
              xs={12}
              lg={6}
              className="ps-3 pe-3 pe-lg-0 ps-lg-5 mt-5 mt-lg-0"
            >
              <h1 className="order-title">Cotton Trim Dress</h1>
              <h2 className="order-label mt-4">price</h2>
              <p className="chart-percent chart-color-Ordered">$20</p>
              <hr />
              <h2 className="order-label mt-4">Description</h2>
              <p className="create-order-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <hr />

              <h2 className="order-label mt-4">Amenties</h2>
              <div className="d-md-flex justify-content-md-between my-4">
                <p className="create-order-text">
                  <img src={dstar} alt="star" className="me-2" />
                  Lorem ipsum dolor sit
                </p>
                <p className="create-order-text">
                  <img src={dstar} alt="star" className="me-2" />
                  Lorem ipsum dolor sit
                </p>
              </div>
              <div className="d-md-flex justify-content-md-between mt-4 mb-5 mb-lg-4">
                <p className="create-order-text">
                  <img src={location} alt="star" className="me-2" />
                  Lorem ipsum dolor sit
                </p>
                <p className="create-order-text">
                  <img src={star} alt="star" className="me-2" />
                  Lorem ipsum dolor sit
                </p>
              </div>
              <Link to="/all-products" className="me-lg-4 me-3">
                <Button className={classes.backBtn}>Back</Button>
              </Link>
              <Link to="/cart">
                <Button className={classes.createOrderBtn}>Select</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <img src={shape3} width="195px" height="449px"  className="shape3-img-product shape333" />
     
    </>
  );
};

export default ProductDetails;
