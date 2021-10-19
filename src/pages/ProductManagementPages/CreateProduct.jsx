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
import upload from "../../images/upload.png";
import dustbin from "../../images/dustbin.png";

const useStyles = makeStyles((theme) => ({
  radio: {
    "&$checked": {
      color: "#EC6545",
    },
  },
  checked: {},
  label: {
    fontSize: "17px",
    lineHeight: "22px",
    color: "#737373",
  },
  createOrderBtn: {
    background: "#EC6545",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#FFFFFF",
    padding: "0.8rem 3rem",
    textTransform: "none",
    marginTop: "2rem",
    "&:hover": {
      background: "#EC6545",
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

const CreateProduct = () => {
  const classes = useStyles();
  const [interior, setInterior] = useState(false);
  const [spices, setSpices] = useState(false);
  const [chocolate, setChocolate] = useState(false);
  const [coffeeTea, setCoffeeTea] = useState(false);
  const [dressing, setDressing] = useState(false);
  const [oils, setOils] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [meat, setMeat] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const [newArrival, setNewArrival] = useState(false);
  const [isAvailable, setIsAvailable] = useState("No");
  const [inventory, setInventory] = useState("No");
  const [selectedImages, setSelectedImages] = useState([]);
  const history = useHistory();

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImages((prevImages) => prevImages.concat(filesArray));
      setData({ ...data, selectedImages: filesArray });
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const removeHandler = (pics) => {
    const newFiles = selectedImages.filter((pic) => pic !== pics);
    setSelectedImages(newFiles);
    setData({ ...data, selectedImages: newFiles });
  };

  const [data, setData] = useState({
    name: "",
    supplier: "",
    description: "",
    interior: false,
    spices: false,
    chocolate: false,
    coffeeTea: false,
    dressing: false,
    oils: false,
    vegetarian: false,
    gluten: false,
    meat: false,
    highlighted: false,
    newArrival: false,
    unitBuyPrice: "",
    unitSalesPrice: "",
    points: "",
    isAvailable,
    inventory,
    selectedImages,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    history.push("/view-product");
  };

  return (
    <section className="bg-color">
      <Container>
        <Row className="mt-4">
          <Col xs={10} lg={12} className="mx-auto">
            <h1 className="order-head">Product Management</h1>
          </Col>
          <Col xs={10} lg={12} className="mt-4 white-div">
            <h1 className="order-title">Add Product</h1>

            <Form onSubmit={submitHandler}>
              <Row className="mt-5">
                <Col lg={3}>
                  <Form.Group>
                    <Form.Control
                      required
                      placeholder="Name"
                      className="form-control-order"
                      onChange={(e) =>
                        setData({
                          ...data,
                          name: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Select
                    className="form-control-order form-control-order-color"
                    onChange={(e) =>
                      setData({
                        ...data,
                        supplier: e.target.value,
                      })
                    }
                  >
                    <option>Supplier</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col lg={6}>
                  <Form.Group className="mb-5">
                    <Form.Control
                      required
                      as="textarea"
                      rows={7}
                      placeholder="Description"
                      className="form-control-order-text"
                      onChange={(e) =>
                        setData({
                          ...data,
                          description: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={8}>
                  <div className="d-flex">
                    <p className="create-order-text mt-3 me-4">Category:</p>
                    <FormControlLabel
                      classes={{ label: classes.label }}
                      control={
                        <CustomCheckbox
                          checked={interior}
                          onChange={(e) => {
                            setInterior(e.target.checked);
                            setData({
                              ...data,
                              interior: e.target.checked,
                            });
                          }}
                        />
                      }
                      label="Interior"
                    />
                    <FormControlLabel
                      classes={{ label: classes.label }}
                      control={
                        <CustomCheckbox
                          checked={spices}
                          onChange={(e) => {
                            setSpices(e.target.checked);
                            setData({
                              ...data,
                              spices: e.target.checked,
                            });
                          }}
                        />
                      }
                      label="Spices"
                    />
                    <FormControlLabel
                      classes={{ label: classes.label }}
                      control={
                        <CustomCheckbox
                          checked={chocolate}
                          onChange={(e) => {
                            setChocolate(e.target.checked);
                            setData({
                              ...data,
                              chocolate: e.target.checked,
                            });
                          }}
                        />
                      }
                      label="Chocolate"
                    />
                    <FormControlLabel
                      classes={{ label: classes.label }}
                      control={
                        <CustomCheckbox
                          checked={coffeeTea}
                          onChange={(e) => {
                            setCoffeeTea(e.target.checked);
                            setData({
                              ...data,
                              coffeeTea: e.target.checked,
                            });
                          }}
                        />
                      }
                      label="Coffee/Tea"
                    />
                    <FormControlLabel
                      classes={{ label: classes.label }}
                      control={
                        <CustomCheckbox
                          checked={dressing}
                          onChange={(e) => {
                            setDressing(e.target.checked);
                            setData({
                              ...data,
                              dressing: e.target.checked,
                            });
                          }}
                        />
                      }
                      label="Dressing"
                    />
                    <FormControlLabel
                      classes={{ label: classes.label }}
                      control={
                        <CustomCheckbox
                          checked={oils}
                          onChange={(e) => {
                            setOils(e.target.checked);
                            setData({
                              ...data,
                              oils: e.target.checked,
                            });
                          }}
                        />
                      }
                      label="Oils"
                    />
                  </div>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col lg={3}>
                  <Form.Group>
                    <Form.Control
                      required
                      placeholder="Unit Buy Price"
                      type="number"
                      className="form-control-order"
                      onChange={(e) =>
                        setData({
                          ...data,
                          unitBuyPrice: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group>
                    <Form.Control
                      required
                      placeholder="Unit Sales Price"
                      type="number"
                      className="form-control-order"
                      onChange={(e) =>
                        setData({
                          ...data,
                          unitSalesPrice: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group>
                    <Form.Control
                      required
                      placeholder="Points"
                      type="number"
                      className="form-control-order"
                      onChange={(e) =>
                        setData({
                          ...data,
                          points: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col lg={9} className="col-border-dashed">
                  <input
                    type="file"
                    id="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {selectedImages.length === 0 ? (
                    <label htmlFor="file" className="label-upload">
                      <img src={upload} alt="upload image" />
                      <h1 className="create-order-text2 mt-3">
                        Drop your image here or browse
                      </h1>
                      <p className="create-order-text3">
                        Supports JPG, Png etc
                      </p>
                    </label>
                  ) : (
                    <>
                      <label htmlFor="file" className="label-upload-1">
                        <h1 className="create-order-text2 mt-3">
                          Click here to upload more images
                        </h1>
                      </label>
                      <Row className="mt-4 mx-1">
                        {selectedImages.map((pics) => (
                          <Col
                            xs={6}
                            md={3}
                            className="upload-img-col"
                            key={pics}
                          >
                            <img
                              src={pics}
                              alt="pics"
                              className="img-fluid upload-img mb-4"
                            />
                            <div className="dustbin">
                              <img
                                src={dustbin}
                                alt="dustbin"
                                onClick={() => removeHandler(pics)}
                                className="img-fluid"
                              />
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
                </Col>
              </Row>
              <Row className="mt-5">
                <Col lg={5} className="d-flex">
                  <p className="create-order-text mt-2 me-4">Is Available:</p>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={isAvailable}
                      onChange={(e) => {
                        setIsAvailable(e.target.value);
                        setData({ ...data, isAvailable: e.target.value });
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
                        style={{ marginRight: "3rem" }}
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
                <Col lg={5} className="d-flex">
                  <p className="create-order-text mt-2 me-4">Inventory:</p>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={inventory}
                      onChange={(e) => {
                        setInventory(e.target.value);
                        setData({ ...data, inventory: e.target.value });
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
                        style={{ marginRight: "3rem" }}
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
                <Col lg={6}>
                  <div className="d-flex">
                    <p className="create-order-text mt-3 me-4">Product Tag:</p>
                    <FormControlLabel
                      classes={{ label: classes.label }}
                      control={
                        <CustomCheckbox
                          checked={vegetarian}
                          onChange={(e) => {
                            setVegetarian(e.target.checked);
                            setData({
                              ...data,
                              vegetarian: e.target.checked,
                            });
                          }}
                        />
                      }
                      label="Vegetarian"
                    />
                    <FormControlLabel
                      classes={{ label: classes.label }}
                      control={
                        <CustomCheckbox
                          checked={gluten}
                          onChange={(e) => {
                            setGluten(e.target.checked);
                            setData({
                              ...data,
                              gluten: e.target.checked,
                            });
                          }}
                        />
                      }
                      label="Gluten"
                    />
                    <FormControlLabel
                      classes={{ label: classes.label }}
                      control={
                        <CustomCheckbox
                          checked={meat}
                          onChange={(e) => {
                            setMeat(e.target.checked);
                            setData({
                              ...data,
                              meat: e.target.checked,
                            });
                          }}
                        />
                      }
                      label="Meat"
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={6}>
                  <div className="d-flex">
                    <p className="create-order-text mt-3 me-4">Highlighted:</p>
                    <FormControlLabel
                      classes={{ label: classes.label }}
                      control={
                        <CustomCheckbox
                          checked={highlighted}
                          onChange={(e) => {
                            setHighlighted(e.target.checked);
                            setData({
                              ...data,
                              highlighted: e.target.checked,
                            });
                          }}
                        />
                      }
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={6}>
                  <div className="d-flex">
                    <p className="create-order-text mt-3 me-4">New arrival:</p>
                    <FormControlLabel
                      classes={{ label: classes.label }}
                      control={
                        <CustomCheckbox
                          checked={newArrival}
                          onChange={(e) => {
                            setNewArrival(e.target.checked);
                            setData({
                              ...data,
                              newArrival: e.target.checked,
                            });
                          }}
                        />
                      }
                    />
                  </div>
                </Col>
              </Row>

              <Button type="submit" className={classes.createOrderBtn}>
                Add
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CreateProduct;
