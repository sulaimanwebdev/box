import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../images/logo2.png";
import avatar from "../../images/avatar.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { GoFileDirectory } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import "./Drawer.css";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "#818CA8",
    marginTop: 10,
  },
  listItemText: {
    fontSize: "18px",
  },
  active: {
    color: "#EC6545",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: "transparent",
  },
}));

const SideDrawer = () => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className="mt-4 text-center">
        <img src={logo} alt="logo" className="img-fluid" />
      </div>
      <div className="drawer-avatar text-center">
        <img src={avatar} alt="avatar" className="img-fluid" />
      </div>
      <p className="drawer-tite">Fahad Ahmed</p>
      <Link to="/view-user">
        <p className="drawer-text">My Profile</p>
      </Link>

      <div className={classes.root}>
        <List component="nav" className={classes.lists}>
          <ListItem
            button
            classes={{ root: classes.root, button: classes.button }}
            onClick={() => {
              history.push("/order-dashboard");
            }}
            className={
              location.pathname === "/order-dashboard" ||
              location.pathname === "/create-order" ||
              location.pathname === "/review-order" ||
              location.pathname === "/edit-order" ||
              location.pathname === "/view-order"
                ? classes.active
                : null
            }
          >
            <ListItemIcon
              className={
                location.pathname === "/order-dashboard" ||
                location.pathname === "/create-order" ||
                location.pathname === "/review-order" ||
                location.pathname === "/edit-order" ||
                location.pathname === "/view-order"
                  ? classes.active
                  : null
              }
            >
              <HiMenuAlt1 style={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Order Management"
            />
          </ListItem>

          <ListItem
            button
            classes={{ root: classes.root, button: classes.button }}
            onClick={() => {
              history.push("/setting-dashboard");
            }}
            className={
              location.pathname === "/setting-dashboard" ||
              location.pathname === "/create-user" ||
              location.pathname === "/edit-user" ||
              location.pathname === "/view-user" ||
              location.pathname === "/view-customer-info"
                ? classes.active
                : null
            }
          >
            <ListItemIcon
              className={
                location.pathname === "/setting-dashboard" ||
                location.pathname === "/create-user" ||
                location.pathname === "/edit-user" ||
                location.pathname === "/view-user" ||
                location.pathname === "/view-customer-info"
                  ? classes.active
                  : null
              }
            >
              <IoIosSettings style={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Settings"
            />
          </ListItem>

          <ListItem
            button
            classes={{ root: classes.root, button: classes.button }}
            onClick={() => {
              history.push("/product-dashboard");
            }}
            className={
              location.pathname === "/product-dashboard" ||
              location.pathname === "/create-product" ||
              location.pathname === "/view-product" ||
              location.pathname === "/edit-product"
                ? classes.active
                : null
            }
          >
            <ListItemIcon
              className={
                location.pathname === "/product-dashboard" ||
                location.pathname === "/create-product" ||
                location.pathname === "/view-product" ||
                location.pathname === "/edit-product"
                  ? classes.active
                  : null
              }
            >
              <GoFileDirectory style={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Product Management"
            />
          </ListItem>

          <ListItem
            button
            classes={{ root: classes.root, button: classes.button }}
            onClick={() => {
              history.push("/");
            }}
          >
            <ListItemIcon>
              <GoSignOut style={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Signout"
            />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default SideDrawer;
