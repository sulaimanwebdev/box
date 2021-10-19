import { Card, Col, Container, Row } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { RiFileTextLine } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import { BsFileCheck } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { useState } from "react";
import { GoPencil } from "react-icons/go";
import RadialChart from "../../Components/RadialBarChart";
import SearchField from "../../Components/SearchBar/SearchField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import recipientInfo from "../../data/recipientInfo";
import ReactPaginate from "react-paginate";

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
  tableHead: {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "25px",
    color: "#000000",
  },
  colorFailed: {
    color: "#f43609",
  },
  colorOrdered: {
    color: "#ec6545",
  },
  colorPending: {
    color: "#ffd600",
  },
}));

const ViewOrder = () => {
  const classes = useStyles();
  const [inviteSent, setInviteSent] = useState(false);
  const [orderClosed, setOrderClosed] = useState(false);
  const [underPacking, setUnderPacking] = useState(false);
  const [sentForDelivery, setSentForDelivery] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const [recipients, setrecipients] = useState(recipientInfo.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(0);
  const recipientsPerPage = 4;
  const pagesVisited = pageNumber * recipientsPerPage;

  const pageCount = Math.ceil(recipients.length / recipientsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className="bg-color">
      <Container>
        <Row className="mt-4">
          <Col xs={10} lg={12} className="mx-auto">
            <h1 className="order-head">Order Management</h1>
          </Col>
          <Col xs={10} lg={12} className="mt-4 white-div">
            <Row>
              <Col xs={10} lg={6} className="mx-auto align-self-center">
                <h2 className="order-title">Order # ATF-232145</h2>
              </Col>
              <Col xs={10} lg={6} className="mx-auto text-end">
                <Link to="/edit-order">
                  <Button className={classes.createOrderBtn}>Edit</Button>
                </Link>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={10} lg={6} className="mx-auto">
                <h2 className="order-label-1 mb-3">Order Info</h2>
                <Card className="p-4 border-2" style={{ borderRadius: "15px" }}>
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
                </Card>
              </Col>
              <Col xs={10} lg={6} className="mx-auto">
                <h2 className="order-label-1 mb-3">Recipients</h2>
                <Card className="p-4 border-2" style={{ borderRadius: "15px" }}>
                  <p className="create-order-text2 mb-3">
                    Recipients Email:{" "}
                    <span className="create-order-text">fahad@xyz.com</span>
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
                </Card>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={10} lg={6}>
                <h2 className="order-label-1 mb-3">Extras</h2>
                <Card className="p-4 border-2" style={{ borderRadius: "15px" }}>
                  <p className="create-order-text2 mb-3">
                    Want your own SWAGs in each box:{" "}
                    <span className="create-order-text">No</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Want a special printed message in each box:{" "}
                    <span className="create-order-text">No</span>
                  </p>
                </Card>
              </Col>
              <Col xs={10} lg={6}>
                <h2 className="order-label-1 mb-3">Delivery Options</h2>
                <Card className="p-4 border-2" style={{ borderRadius: "15px" }}>
                  <p className="create-order-text2 mb-3">
                    Deliver Immediately after closure or Send for delivery on 16
                    Aug, 2021: <span className="create-order-text">No</span>
                  </p>
                  <p className="create-order-text2 mb-3">
                    Invoice Reference:{" "}
                    <span className="create-order-text">APK-875481</span>
                  </p>
                </Card>
              </Col>
            </Row>

            <div className="mt-5">
              <Card className="p-4 border-2" style={{ borderRadius: "15px" }}>
                <h2 className="order-label-1 mb-5">Order Status</h2>
                <Row className="px-5 my-4">
                  <Col
                    xs={2}
                    className={`icon-col ${
                      inviteSent ? "icon-dashed-border" : "icon-solid-border"
                    }`}
                  >
                    <div className="icon-completed-bg">
                      <RiFileTextLine />
                    </div>
                  </Col>
                  <Col
                    xs={2}
                    className={`icon-col ${
                      orderClosed ? "icon-dashed-border" : "icon-solid-border"
                    }`}
                  >
                    <div
                      className={`${
                        inviteSent
                          ? "icon-completed-bg"
                          : "icon-not-completed-bg"
                      }`}
                    >
                      <FaEnvelope />
                    </div>
                  </Col>
                  <Col
                    xs={2}
                    className={`icon-col ${
                      underPacking ? "icon-dashed-border" : "icon-solid-border"
                    }`}
                  >
                    <div
                      className={`${
                        orderClosed
                          ? "icon-completed-bg"
                          : "icon-not-completed-bg"
                      }`}
                    >
                      <BsFileCheck />
                    </div>
                  </Col>
                  <Col
                    xs={2}
                    className={`icon-col ${
                      sentForDelivery
                        ? "icon-dashed-border"
                        : "icon-solid-border"
                    }`}
                  >
                    <div
                      className={`${
                        underPacking
                          ? "icon-completed-bg"
                          : "icon-not-completed-bg"
                      }`}
                    >
                      <FaBoxOpen />
                    </div>
                  </Col>
                  <Col
                    xs={2}
                    className={`icon-col ${
                      delivered ? "icon-dashed-border" : "icon-solid-border"
                    }`}
                  >
                    <div
                      className={`${
                        sentForDelivery
                          ? "icon-completed-bg"
                          : "icon-not-completed-bg"
                      }`}
                    >
                      <FaShuttleVan />
                    </div>
                  </Col>
                  <Col xs={2} className="icon-col">
                    <div
                      className={`${
                        delivered
                          ? "icon-completed-bg"
                          : "icon-not-completed-bg"
                      }`}
                    >
                      <GiCheckMark />
                    </div>
                  </Col>
                </Row>
                <Row className="pe-5 mt-4">
                  <Col xs={2}>
                    <p className="status-completed-text">Order Created</p>
                  </Col>
                  <Col xs={2}>
                    <p
                      className={`${
                        inviteSent
                          ? "status-completed-text"
                          : "status-not-completed-text"
                      } ms-2`}
                    >
                      Invite Sent
                    </p>
                  </Col>
                  <Col xs={2}>
                    <p
                      className={`${
                        orderClosed
                          ? "status-completed-text"
                          : "status-not-completed-text"
                      }`}
                      style={{ marginLeft: "-0.7rem" }}
                    >
                      Order Closed
                    </p>
                  </Col>
                  <Col xs={2}>
                    <p
                      className={`${
                        underPacking
                          ? "status-completed-text"
                          : "status-not-completed-text"
                      }`}
                      style={{ marginLeft: "-1rem" }}
                    >
                      Under Packing
                    </p>
                  </Col>
                  <Col xs={2}>
                    <p
                      className={`${
                        sentForDelivery
                          ? "status-completed-text"
                          : "status-not-completed-text"
                      }`}
                      style={{ marginLeft: "-1.5rem" }}
                    >
                      Sent for Delivery
                    </p>
                  </Col>
                  <Col xs={2}>
                    <p
                      className={`${
                        delivered
                          ? "status-completed-text"
                          : "status-not-completed-text"
                      }`}
                      style={{ marginLeft: "-1.3rem" }}
                    >
                      Delivered
                    </p>
                  </Col>
                </Row>
              </Card>
            </div>

            {/* --------------------------------CHART------------------------------- */}
            <RadialChart />

            {/* -------------------- Recipient Info--------------------------------- */}
            <Row className="mt-5">
              <Col>
                <Row>
                  <Col lg={8} className="mt-3">
                    <h2 className="order-label-1 mb-5">Recipient Info</h2>
                  </Col>
                  <Col lg={4}>
                    <SearchField />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell
                              align="left"
                              className={classes.tableHead}
                            >
                              Recipient
                            </TableCell>
                            <TableCell
                              align="left"
                              className={classes.tableHead}
                            >
                              Status
                            </TableCell>
                            <TableCell
                              align="left"
                              className={classes.tableHead}
                            >
                              Invitational Email
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {recipientInfo
                            .slice(
                              pagesVisited,
                              pagesVisited + recipientsPerPage
                            )
                            .map((recipientInfo) => (
                              <TableRow hover key={recipientInfo.recipient}>
                                <TableCell align="left">
                                  {recipientInfo.recipient}
                                </TableCell>
                                <TableCell
                                  align="left"
                                  className={
                                    recipientInfo.status === "Error"
                                      ? classes.colorFailed
                                      : recipientInfo.status === "In Cart"
                                      ? classes.colorPending
                                      : classes.colorOrdered
                                  }
                                >
                                  {recipientInfo.status}
                                </TableCell>
                                <TableCell align="left">
                                  {recipientInfo.invitationalEmail}
                                </TableCell>
                                <TableCell align="left">
                                  <GoPencil />
                                </TableCell>
                                <TableCell align="left"></TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* ---------------------------pagination------------------------------ */}
            <div className="paginationContainer">
              <ReactPaginate
                previousLabel={
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 1.23266e-07L0.000155878 6L6.00016 12Z"
                      fill="#333333"
                    />
                  </svg>
                }
                nextLabel={
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z"
                      fill="#333333"
                    />
                  </svg>
                }
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                breakLabel={"..."}
                className="paginated"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ViewOrder;
