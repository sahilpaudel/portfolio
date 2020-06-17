import { useDrawerStyles } from "../navigation/drawerStyles";
import MobileDrawer from "../navigation/MobileDrawer";
import WebDrawer from "../navigation/WebDrawer";
import { CssBaseline, Hidden } from "@material-ui/core";
import UserHeader from "../header";

const Layout = props => {
  const classes = useDrawerStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden smDown>
        <WebDrawer />
        <main className={classes.content}>
          <UserHeader />
          {props.children}
        </main>
      </Hidden>
      <Hidden mdUp>
        <MobileDrawer />
        <main className={classes.content}>
          <div className={classes.drawerHeader} />
          <UserHeader />
          {props.children}
        </main>
      </Hidden>
    </div>
  )
}

export default Layout;