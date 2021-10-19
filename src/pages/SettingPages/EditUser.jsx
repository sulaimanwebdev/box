import { Col, Container, Row, Form, Alert } from "react-bootstrap";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

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
    padding: "0.8rem 2.5rem",
    textTransform: "none",
    marginTop: "2rem",
    "&:hover": {
      background: "transparent",
    },
  },
}));

const EditUser = () => {
  const classes = useStyles();
  const [userType, setUserType] = useState("Admin");
  const [passAlert, setPassAlert] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setInterval(() => {
      setPassAlert(false);
    }, 8000);
  }, [passAlert]);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    userType,
    password: "",
    rePassword: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.password !== data.rePassword) {
      setPassAlert(true);
    } else {
      console.log(data);
      history.push("/view-user");
    }
  };

  return (
    <section className="bg-color">
      <Container>
        <Row className="mt-4">
          <Col xs={10} lg={12} className="mx-auto">
            <h1 className="order-head">Settings</h1>
          </Col>
          <Col xs={10} lg={12} className="mt-4 white-div">
            <h1 className="order-title">Edit User</h1>
            {passAlert && (
              <Alert variant="danger">
                <p>Your password doesn't match.</p>
              </Alert>
            )}

            <Form onSubmit={submitHandler}>
              <Row className="mt-5">
                <Col lg={3}>
                  <Form.Group>
                    <Form.Control
                      required
                      placeholder="First Name"
                      className="form-control-order"
                      onChange={(e) =>
                        setData({
                          ...data,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group>
                    <Form.Control
                      required
                      placeholder="Last Name"
                      className="form-control-order"
                      onChange={(e) =>
                        setData({
                          ...data,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email"
                      className="form-control-order"
                      onChange={(e) =>
                        setData({
                          ...data,
                          email: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col lg={3}>
                  <Form.Group>
                    <Form.Control
                      required
                      placeholder="Mobile #"
                      type="number"
                      className="form-control-order"
                      onChange={(e) =>
                        setData({
                          ...data,
                          mobile: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col lg={9} className="align-self-center">
                  <div className="d-flex">
                    <p className="create-order-text align-self-end me-4">
                      User Type:
                    </p>
                    <div className="">
                      <FormControl component="fieldset" className="mb-1">
                        <RadioGroup
                          value={userType}
                          onChange={(e) => {
                            setUserType(e.target.value);
                            setData({ ...data, userType: e.target.value });
                          }}
                          row
                        >
                          <FormControlLabel
                            value="Basic"
                            classes={{ label: classes.label }}
                            control={
                              <Radio
                                classes={{
                                  root: classes.radio,
                                  checked: classes.checked,
                                }}
                              />
                            }
                            label="Basic"
                            style={{ marginRight: "2rem" }}
                          />
                          <FormControlLabel
                            value="Admin"
                            classes={{ label: classes.label }}
                            control={
                              <Radio
                                classes={{
                                  root: classes.radio,
                                  checked: classes.checked,
                                }}
                              />
                            }
                            label="Admin"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col lg={3}>
                  <Form.Group>
                    <Form.Control
                      required
                      placeholder="Password"
                      type="password"
                      className="form-control-order"
                      onChange={(e) =>
                        setData({
                          ...data,
                          password: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group>
                    <Form.Control
                      required
                      placeholder="Re-Enter Password"
                      type="password"
                      className="form-control-order"
                      onChange={(e) =>
                        setData({
                          ...data,
                          rePassword: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <p style={{ color: "#737373" }} className="mt-2">
                  (Password must contain atleast 6 sentences)
                </p>
              </Row>

              <Button type="submit" className={classes.createOrderBtn}>
                Save changes
              </Button>
              <Link to="/view-user">
                <Button className={classes.backBtn}>Back</Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EditUser;
