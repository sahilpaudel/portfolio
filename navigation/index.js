import CssBaseline from "@material-ui/core/CssBaseline";
import UserHeader from "../header";
import Pages from "../pages";
import { useDrawerStyles } from "./drawerStyles";
import MobileDrawer from "./MobileDrawer";
import WebDrawer from "./WebDrawer";
import { Hidden } from "@material-ui/core";

const SideNavigation = () => {
  const classes = useDrawerStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden smDown>
        <WebDrawer />
        <main className={classes.content}>
          <UserHeader />
        </main>
      </Hidden>
      <Hidden mdUp>
        <MobileDrawer />
        <main className={classes.content}>
          <div className={classes.drawerHeader} />
          <UserHeader />
        </main>
      </Hidden>
    </div>
  );
};

export default SideNavigation;
