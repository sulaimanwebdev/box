import { Col, Container, Row, Form } from "react-bootstrap";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import { Checkbox, Button } from "@material-ui/core";
import { useHistory } from "react-router";
import calend from "../../images/calend.png";

const useStyles = makeStyles((theme) => ({
  radio: {
    "&$checked": {
      color: "#EC6545",
    },
  },
  checked: {},
  label: {
    fontSize: "18px",
    lineHeight: "23px",
    color: "#737373",
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
    marginTop: "2rem",
    "&:hover": {
      background: "#EC6545",
    },
  },
}));

const EditOrder = () => {
  const classes = useStyles();
  const [orderType, setOrderType] = useState("Pre-Curated Box");
  const [swag, setSwag] = useState("No");
  const [printedMessage, setPrintedMessage] = useState("No");
  const [deliverImmediately, setDeliverImmediately] = useState("No");
  const [showCalend, setShowCalend] = useState(false);
  const [deliverTo, setDeliverTo] = useState("Employee Home");
  const history = useHistory();

  const [data, setData] = useState({
    orderType,
    email: "",
    department: "",
    pickBox: "",
    orderName: "",
    orderDescription: "",
    budget: "",
    orderExpiryDate: "",
    recipientSendAs: "",
    recipientEmail: "",
    message: "",
    swag,
    printedMessage,
    deliverImmediately,
    deliverTo,
    deliveryDate: "",
    confirmChecked: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    history.push("/view-order");
  };

  const orderTypeHandler = (event) => {
    setOrderType(event.target.value);
    setData({ ...data, orderType: event.target.value });
  };

  return (
    <section className="bg-color">
      <Container>
        <Row className="mt-4">
          <Col xs={10} lg={12} className="mx-auto">
            <h1 className="order-head">Order Management</h1>
          </Col>
          <Col xs={10} lg={12} className="mt-4 white-div">
            <h1 className="order-title">Edit Order</h1>

            <Form onSubmit={submitHandler}>
              <h2 className="order-label mt-5">Order Type</h2>
              <FormControl component="fieldset">
                <RadioGroup value={orderType} onChange={orderTypeHandler} row>
                  <FormControlLabel
                    value="Pre-Curated Box"
                    classes={{ label: classes.label }}
                    control={
                      <Radio
                        classes={{
                          root: classes.radio,
                          checked: classes.checked,
                        }}
                        disabled
                      />
                    }
                    label="Pre-Curated Box"
                    style={{ marginRight: "7rem" }}
                  />
                  <FormControlLabel
                    value="Flex-Box"
                    classes={{ label: classes.label }}
                    control={
                      <Radio
                        classes={{
                          root: classes.radio,
                          checked: classes.checked,
                        }}
                        disabled
                      />
                    }
                    label="Flex-Box"
                  />
                </RadioGroup>
              </FormControl>

              <h2 className="order-label mt-5 mb-4">Order Info</h2>
              {orderType === "Pre-Curated Box" ? (
                <>
                  <Row>
                    <Col lg={3}>
                      <Form.Group>
                        <Form.Control
                          required
                          type="email"
                          placeholder="xyz.co@yahoo.com"
                          className="form-control-order"
                          disabled
                          onChange={(e) =>
                            setData({
                              ...data,
                              email: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={3}>
                      <Form.Group>
                        <Form.Control
                          required
                          placeholder="Order Description*"
                          className="form-control-order"
                          disabled
                          onChange={(e) =>
                            setData({
                              ...data,
                              orderDescription: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={3}>
                      <Form.Group>
                        <Form.Control
                          required
                          placeholder="Department*"
                          className="form-control-order"
                          disabled
                          onChange={(e) =>
                            setData({
                              ...data,
                              department: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={3}>
                      <Form.Select
                        className="form-control-order form-control-order-color mt-4"
                        disabled
                        onChange={(e) =>
                          setData({
                            ...data,
                            pickBox: e.target.value,
                          })
                        }
                      >
                        <option>Pick Box</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </>
              ) : (
                <>
                  <Row>
                    <Col lg={3}>
                      <Form.Group>
                        <Form.Control
                          required
                          placeholder="Order Name"
                          className="form-control-order"
                          disabled
                          onChange={(e) =>
                            setData({
                              ...data,
                              orderName: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={3}>
                      <Form.Group>
                        <Form.Control
                          required
                          placeholder="Order Description"
                          className="form-control-order"
                          disabled
                          onChange={(e) =>
                            setData({
                              ...data,
                              orderDescription: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={3}>
                      <Form.Group>
                        <Form.Control
                          required
                          placeholder="Budget"
                          className="form-control-order"
                          disabled
                          onChange={(e) =>
                            setData({
                              ...data,
                              budget: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </>
              )}

              <Row>
                <h2 className="order-label mt-5 mb-4">Order Expiry Date</h2>
                <Col lg={3}>
                  <Form.Group>
                    <Form.Control
                      required
                      type="date"
                      placeholder="Order Expiry Date"
                      className="form-control-order"
                      disabled
                      onChange={(e) =>
                        setData({
                          ...data,
                          orderExpiryDate: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <h2 className="order-label mt-5 mb-4">Recipients</h2>
                <Col lg={6}>
                  <Form.Group className="mb-5">
                    <Form.Control
                      required
                      placeholder="Send As"
                      className="form-control-order"
                      disabled
                      onChange={(e) =>
                        setData({
                          ...data,
                          recipientSendAs: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-4">
                    <Form.Control
                      required
                      as="textarea"
                      rows={7}
                      placeholder="Recipients Email"
                      className="form-control-order-text"
                      disabled
                      onChange={(e) =>
                        setData({
                          ...data,
                          recipientEmail: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-4">
                    <Form.Control
                      required
                      as="textarea"
                      rows={7}
                      placeholder="Message"
                      className="form-control-order-text"
                      disabled
                      onChange={(e) =>
                        setData({
                          ...data,
                          message: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <h2 className="order-label mt-5 mb-4">Extras</h2>
                <Col lg={5}>
                  <p className="create-order-text">
                    Want your own SWAGs in each box?
                  </p>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={swag}
                      onChange={(e) => {
                        setSwag(e.target.value);
                        setData({ ...data, swag: e.target.value });
                      }}
                      row
                    >
                      <FormControlLabel
                        value="Yes"
                        classes={{ label: classes.label }}
                        control={
                          <Radio
                            classes={{
                              root: classes.radio,
                              checked: classes.checked,
                            }}
                          />
                        }
                        label="Yes"
                        style={{ marginRight: "4rem" }}
                      />
                      <FormControlLabel
                        value="No"
                        classes={{ label: classes.label }}
                        control={
                          <Radio
                            classes={{
                              root: classes.radio,
                              checked: classes.checked,
                            }}
                          />
                        }
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Col>
                <Col lg={5}>
                  <p className="create-order-text">
                    Want a special printed message in each box?
                  </p>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={printedMessage}
                      onChange={(e) => {
                        setPrintedMessage(e.target.value);
                        setData({ ...data, printedMessage: e.target.value });
                      }}
                      row
                    >
                      <FormControlLabel
                        value="Yes"
                        classes={{ label: classes.label }}
                        control={
                          <Radio
                            classes={{
                              root: classes.radio,
                              checked: classes.checked,
                            }}
                          />
                        }
                        label="Yes"
                        style={{ marginRight: "4rem" }}
                      />
                      <FormControlLabel
                        value="No"
                        classes={{ label: classes.label }}
                        control={
                          <Radio
                            classes={{
                              root: classes.radio,
                              checked: classes.checked,
                            }}
                          />
                        }
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Col>
              </Row>

              <Row>
                <h2 className="order-label mt-5 mb-4">Delivery Options</h2>
                <Col lg={12}>
                  <p className="create-order-text">
                    Deliver Immediately after closure or Send for delivery on{" "}
                    <img
                      src={calend}
                      className="ms-2"
                      onClick={(e) => setShowCalend(!showCalend)}
                      style={{ cursor: "pointer" }}
                      alt="img"
                    />
                  </p>
                  {showCalend && (
                    <div className="my-4">
                      <Form.Group>
                        <Form.Control
                          required
                          type="date"
                          placeholder="Delivery Date"
                          className="form-control-order"
                          onChange={(e) =>
                            setData({
                              ...data,
                              deliveryDate: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </div>
                  )}
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={deliverImmediately}
                      onChange={(e) => {
                        setDeliverImmediately(e.target.value);
                        setData({
                          ...data,
                          deliverImmediately: e.target.value,
                        });
                      }}
                      row
                    >
                      <FormControlLabel
                        value="Yes"
                        classes={{ label: classes.label }}
                        control={
                          <Radio
                            classes={{
                              root: classes.radio,
                              checked: classes.checked,
                            }}
                          />
                        }
                        label="Yes"
                        style={{ marginRight: "4rem" }}
                      />
                      <FormControlLabel
                        value="No"
                        classes={{ label: classes.label }}
                        control={
                          <Radio
                            classes={{
                              root: classes.radio,
                              checked: classes.checked,
                            }}
                          />
                        }
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                  <div className="mt-4">
                    <p className="create-order-text">Deliver to:</p>
                    <FormControl component="fieldset">
                      <RadioGroup
                        value={deliverTo}
                        onChange={(e) => {
                          setDeliverTo(e.target.value);
                          setData({
                            ...data,
                            deliverTo: e.target.value,
                          });
                        }}
                        row
                      >
                        <FormControlLabel
                          value="Office"
                          classes={{ label: classes.label }}
                          control={
                            <Radio
                              classes={{
                                root: classes.radio,
                                checked: classes.checked,
                              }}
                            />
                          }
                          label="Office (Free Delivery)"
                          style={{ marginRight: "4rem" }}
                        />
                        <FormControlLabel
                          value="Employee Home"
                          classes={{ label: classes.label }}
                          control={
                            <Radio
                              classes={{
                                root: classes.radio,
                                checked: classes.checked,
                              }}
                            />
                          }
                          label="Employee Home (70Kr delivery charges per box)"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </Col>
              </Row>

              <Button type="submit" className={classes.createOrderBtn}>
                Save Changes
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EditOrder;
