import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import React from "react";
import MyList from "./MyList";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      p={2}
      flex={2}
      // With the help of Mui breakpoints we are saying if the Screen Width is less than 600px (xs) display none and if the Screen Width is bigger than 600px (sm) make it display block.
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position={"fixed"}>
        <MyList component="a" primary="Homepage" Icon={<Home />} />
        <MyList component="a" primary="Pages" Icon={<Article />} />
        <MyList component="a" primary="Groups" Icon={<Group />} />
        <MyList component="a" primary="Marketplace" Icon={<Storefront />} />
        <MyList component="a" primary="Friends" Icon={<Person />} />
        <MyList component="a" primary="Settings" Icon={<Settings />} />
        <MyList component="a" primary="Profile" Icon={<AccountBox />} />

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                checked={mode === "light" ? false : true}
                // Using Ternary operator we are saying if mode is equal to light set mode to dark else set light
                onChange={() => {
                  setMode(mode === "light" ? "dark" : "light");
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
