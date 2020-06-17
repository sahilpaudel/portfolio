import React from "react";
import { useDrawerStyles } from "./drawerStyles";
import {
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItem
} from "@material-ui/core";

import { drawerOptions as data } from "../dataSource/drawerData";
import Link from "next/link";

const WebDrawer = () => {
  const classes = useDrawerStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}>
      <div className={classes.drawerContainer}>
        <List>
          {data.map((item, index) => (
            <Link
              href={item.path}
              key={item.text}>
              <ListItem button>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default WebDrawer;
