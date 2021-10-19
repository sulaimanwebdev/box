import { Card, Col, Container, Row } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { user } from "../../data/userInfo";
import pencil from "../../images/pencil.png";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from "react-router";

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
  tableHead: {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "25px",
    color: "#000000",
  },
  row: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#EC6545",
    },
  },
}));

const ViewCustomerInfo = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <section className="bg-color">
      <Container>
        <Row className="mt-4">
          <Col xs={10} lg={12} className="mx-auto">
            <h1 className="order-head">Settings</h1>
          </Col>
          <Col xs={10} lg={12} className="mt-4 white-div">
            <h1 className="order-title">Customer # 54845</h1>

            <Row className="mt-5">
              <Col xs={10} lg={5}>
                <h2 className="order-label mb-3">Company Info</h2>
                <Card className="p-4 border-2" style={{ borderRadius: "15px" }}>
                  <img
                    src={pencil}
                    alt="pencil"
                    className="img-fluid review-icon"
                  />
                  <p className="create-order-text2 mb-3">
                    Org Number:{" "}
                    <span className="create-order-text">847512542</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Company Name:{" "}
                    <span className="create-order-text">Pepsi</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Address:{" "}
                    <span className="create-order-text">Flat # C-4, KDA</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    City: <span className="create-order-text">Post Box</span>
                  </p>
                  <p className="create-order-text2">
                    Email:{" "}
                    <span className="create-order-text">fahad@xyz.com</span>
                  </p>
                </Card>
              </Col>
              <Col xs={10} lg={5}>
                <h2 className="order-label mb-3">Contact Person</h2>
                <Card className="p-4 border-2" style={{ borderRadius: "15px" }}>
                  <img
                    src={pencil}
                    alt="pencil"
                    className="img-fluid review-icon"
                  />
                  <p className="create-order-text2 mb-3">
                    First Name: <span className="create-order-text">Fahad</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Last Name: <span className="create-order-text">Iqbal</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Department: <span className="create-order-text"> I.T</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Email:{" "}
                    <span className="create-order-text">fahad@gmail.com</span>
                  </p>
                  <p className="create-order-text2">
                    Mobile:{" "}
                    <span className="create-order-text">+99-243527109</span>
                  </p>
                </Card>
              </Col>
            </Row>

            <Row style={{ marginTop: "6rem" }}>
              <Col xs={10} lg={6} className="mx-auto">
                <h2 className="order-title">User Info</h2>
              </Col>
              <Col xs={10} lg={6} className="mx-auto text-end">
                <Link to="/create-user">
                  <Button className={classes.createOrderBtn}>
                    Create User
                  </Button>
                </Link>
              </Col>
            </Row>

            <div className="mt-4">
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" className={classes.tableHead}>
                        First Name
                      </TableCell>
                      <TableCell align="left" className={classes.tableHead}>
                        Last Name
                      </TableCell>
                      <TableCell align="left" className={classes.tableHead}>
                        Email
                      </TableCell>
                      <TableCell align="left" className={classes.tableHead}>
                        Mobile
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.map((user) => (
                      <TableRow
                        onClick={() => history.push("/view-user")}
                        className={classes.row}
                        key={user.mobile}
                      >
                        <TableCell align="left">{user.firstName}</TableCell>
                        <TableCell align="left">{user.lastName}</TableCell>
                        <TableCell align="left">{user.email}</TableCell>
                        <TableCell align="left">{user.mobile}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ViewCustomerInfo;
