import { Col, Container, Row, Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
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

const ViewUser = () => {
  const classes = useStyles();

  return (
    <section className="bg-color">
      <Container>
        <Row className="mt-4">
          <Col xs={10} lg={12} className="mx-auto">
            <h1 className="order-head">Settings</h1>
          </Col>
          <Col xs={10} lg={12} className="mt-4 white-div">
            <h1 className="order-title">User Profile</h1>

            <Row className="mt-5">
              <Col xs={10} lg={5}>
                <Card className="p-4 border-2" style={{ borderRadius: "15px" }}>
                  <p className="create-order-text2 mb-3">
                    First Name: <span className="create-order-text">Fahad</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Last Name: <span className="create-order-text">Iqbal</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Email:{" "}
                    <span className="create-order-text">fahad@gmail.com</span>
                  </p>
                  <p className="create-order-text2">
                    Mobile:{" "}
                    <span className="create-order-text">+99-243527109</span>
                  </p>
                  <p className="create-order-text2">
                    Password:{" "}
                    <span className="create-order-text">1234sad466</span>
                  </p>
                  <p className="create-order-text2">
                    Re-Enter Password:{" "}
                    <span className="create-order-text">1234sad466</span>
                  </p>
                </Card>
              </Col>
            </Row>
            <Link to="/edit-user">
              <Button className={classes.createOrderBtn}>Edit</Button>
            </Link>
            <Button className={classes.backBtn}>Delete</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ViewUser;
