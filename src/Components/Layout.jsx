import { makeStyles } from "@material-ui/core";
import SideDrawer from "./Drawer/Drawer";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  page: {
    background: "#f7f7f7",
    width: "100%",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideDrawer />
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
