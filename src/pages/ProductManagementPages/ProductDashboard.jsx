import { Col, Container, Row } from "react-bootstrap";
import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import filter from "../../images/filter.png";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { products } from "../../data/listOfProducts";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import SearchField from "../../Components/SearchBar/SearchField";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { withStyles } from "@material-ui/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  filterBtn: {
    border: "2px solid #818ca8",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#818ca8",
    padding: "0.7rem 2.5rem",
    textTransform: "none",
  },
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
  saveBtn: {
    background: "#EC6545",
    borderRadius: "5px",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#FFFFFF",
    padding: "0.5rem 1.5rem",
    textTransform: "none",
    "&:hover": {
      background: "#EC6545",
    },
  },
  row: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#EC6545",
    },
  },
}));

const CustomCheckbox = withStyles({
  root: {
    color: "#EC6545",
    "&$checked": {
      color: "#EC6545",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const ProductDashboard = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    orderId: false,
    orderName: false,
    orderStatus: false,
  });
  const history = useHistory();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const clearCheck = () => {
    setState({
      orderId: false,
      orderName: false,
      orderStatus: false,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <section className="bg-color">
      <Container>
        <Row className="mt-4">
          <Col xs={10} lg={6} className="mx-auto">
            <h1 className="order-head">Product Management</h1>
          </Col>
          <Col xs={10} lg={6} className="mx-auto align-self-center text-end">
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <Button
                    className={classes.filterBtn}
                    {...bindTrigger(popupState)}
                  >
                    <img src={filter} alt="icon" className="me-3" /> Filter By
                  </Button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    className="mt-2"
                  >
                    <Box p={2}>
                      <form onSubmit={submitHandler}>
                        <div className="d-flex justify-content-between">
                          <p className="pop-text">Name</p>
                          <FormControlLabel
                            control={
                              <CustomCheckbox
                                checked={state.orderId}
                                onChange={handleChange}
                                name="orderId"
                                style={{ marginTop: "-1rem" }}
                              />
                            }
                          />
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="pop-text">Supplier</p>
                          <FormControlLabel
                            control={
                              <CustomCheckbox
                                checked={state.orderName}
                                onChange={handleChange}
                                name="orderName"
                                style={{ marginTop: "-1rem" }}
                              />
                            }
                          />
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="pop-text">Unit Sales Price</p>
                          <FormControlLabel
                            control={
                              <CustomCheckbox
                                checked={state.orderStatus}
                                onChange={handleChange}
                                name="orderStatus"
                                style={{ marginTop: "-1rem" }}
                              />
                            }
                          />
                        </div>
                        <div className="d-flex justify-content-between">
                          <Button
                            onClick={clearCheck}
                            style={{
                              color: "#818CA8",
                              textTransform: "none",
                              textDecoration: "underline",
                            }}
                          >
                            Clear
                          </Button>
                          <div>
                            <Button type="submit" className={classes.saveBtn}>
                              Save
                            </Button>
                          </div>
                        </div>
                      </form>
                    </Box>
                  </Popover>
                </div>
              )}
            </PopupState>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/all-products">
              click here to see all products and cart pages
            </Link>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="white-div">
              <Row>
                <Col xs={10} lg={5} className="mx-auto align-self-center">
                  <h2 className="order-title">List of Products</h2>
                </Col>
                <Col xs={10} lg={4} className="mx-auto align-self-center">
                  <SearchField />
                </Col>
                <Col xs={10} lg={3} className="mx-auto text-end">
                  <Link to="/create-product">
                    <Button className={classes.createOrderBtn}>
                      Add Product
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
                          Name
                        </TableCell>
                        <TableCell align="left" className={classes.tableHead}>
                          Supplier
                        </TableCell>
                        <TableCell align="left" className={classes.tableHead}>
                          Unit Sales Price
                        </TableCell>
                        <TableCell align="left" className={classes.tableHead}>
                          Points
                        </TableCell>
                        <TableCell align="left" className={classes.tableHead}>
                          Is Available
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {products.map((products) => (
                        <TableRow
                          key={products.id}
                          className={classes.row}
                          onClick={() => history.push("/view-product")}
                        >
                          <TableCell align="left">{products.name}</TableCell>
                          <TableCell align="left">
                            {products.supplier}
                          </TableCell>
                          <TableCell align="left">
                            {products.unitSalesPrice}
                          </TableCell>
                          <TableCell align="left">{products.points}</TableCell>
                          <TableCell align="left">
                            {products.isAvailable}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDashboard;
