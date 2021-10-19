import { Col, Container, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SearchField from "../../Components/SearchBar/SearchField";
import { customers } from "../../data/listOfCustomers";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
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

const SettingDashboard = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <section className="bg-color">
      <Container>
        <Row className="mt-4">
          <Col xs={10} lg={12} className="mx-auto">
            <h1 className="order-head">Settings</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="white-div">
              <Row>
                <Col xs={10} lg={8} className="mx-auto pt-2">
                  <h2 className="order-title">List of Customers</h2>
                </Col>
                <Col xs={10} lg={4} className="mx-auto text-end">
                  <SearchField />
                </Col>
              </Row>

              <div className="mt-4">
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left" className={classes.tableHead}>
                          Company Name
                        </TableCell>
                        <TableCell align="left" className={classes.tableHead}>
                          Org. number
                        </TableCell>
                        <TableCell align="left" className={classes.tableHead}>
                          Email
                        </TableCell>
                        <TableCell align="left" className={classes.tableHead}>
                          Phone
                        </TableCell>
                        <TableCell align="left" className={classes.tableHead}>
                          City
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {customers.map((customers) => (
                        <TableRow
                          key={customers.phone}
                          className={classes.row}
                          onClick={() => history.push("/view-customer-info")}
                        >
                          <TableCell align="left">
                            {customers.companyName}
                          </TableCell>
                          <TableCell align="left">
                            {customers.orgNumber}
                          </TableCell>
                          <TableCell align="left">{customers.email}</TableCell>
                          <TableCell align="left">{customers.phone}</TableCell>
                          <TableCell align="left">{customers.city}</TableCell>
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

export default SettingDashboard;
