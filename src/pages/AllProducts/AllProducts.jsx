import { Card, Col, Container, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { allProducts } from "../../data/allProducts";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
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
    padding: "0.8rem 6.5rem",
    textTransform: "none",
    margin: "1rem 0",
    "&:hover": {
      background: "#EC6545",
    },
  },
}));

const AllProducts = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <img src={shape1} alt="shape" className="shapeI1"/>
      </div>
      <div className="shape-right">
        <img  src={shape2}  className="shapeI2"/>
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
            <Col xs={12} lg={12} className="px-3 px-lg-0">
              <h1 className="product-title">Vi skaper opplevelser</h1>
              <h2 className="product-title-1">
                Bedriftsgaver - Imponerene fleksible og enkelt!
              </h2>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={10} md={12} className="mx-auto">
              <h1 className="prod-head text-center">Products</h1>
            </Col>
          </Row>

          <Row className="mt-5">
            {allProducts.map((product) => (
              <Col xs={12} md={6} lg={4} className="mx-auto" key={product.id}>
                <Card className="pro-card mb-5">
                  <Link to="/product-details">
                    <img
                      src={product.image}
                      alt="product"
                      className="img-fluid pro-img"
                    />
                  </Link>
                  <div className="p-3">
                    <Link to="/product-details">
                      <h1 className="pro-text mt-3 mb-5">{product.name}</h1>
                    </Link>
                    <div className="text-center">
                      <Link to="/cart">
                        <Button className={classes.createOrderBtn}>
                          Select
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <img src={shape3} width="195px" height="449px"  className="shape3-img" />
    </>
  );
};

export default AllProducts;
