import React from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const MyList = (props) => {
  return (
    <List sx={{ padding: "0 0" }}>
      {/* First Item in the list */}
      <ListItem disablePadding>
        {/* Second Div where icon and text consists */}
        <ListItemButton component={props.component} href="#home">
          {/* For Icons */}
          <ListItemIcon>
            {/* Icons Type */}
            {props.Icon}
          </ListItemIcon>
          {/* Text corresponding to that Icon */}
          <ListItemText primary={props.primary} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default MyList;
