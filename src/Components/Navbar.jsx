// import styled from "@emotion/styled";
import { Facebook, Mail, Notifications } from "@mui/icons-material";
import {
  styled,
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = ({ mode }) => {
  // useState hook for handling menu when cliked on user Icons
  const [open, setOpen] = useState(false);

  // The mistake in the provided code is that the variable myToolbar is not defined properly. When using styled components from Emotion, you need to capitalize the component name. So, instead of myToolbar, it should be MyToolbar
  const MyToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  //! Here we are using default "theme" from Material UI. which we are getting from styled props from @mui/material Note that we've not used Styled from @emotion/styled
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    // The theme.shape.borderRadius
    borderRadius: theme.shape.borderRadius, //? These are presets in default material UI follow this link for more information theme https://mui.com/material-ui/customization/default-theme/
    width: "40%",
  }));

  // Using styled from @mui/material
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    // As we know default value of sm: 600px so here we are saying if the screen width is 600px or more display flex and if the screen width goes below 600px make it display none which is defined above
    [theme.breakpoints.up("sm")]: { display: "flex" },
  }));

  // For Mobile
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    // As we know default value of sm: 600px so here we are saying if the screen width is 600px or more display none and if the screen width goes below 600px make it display flex which is defined above
    [theme.breakpoints.up("sm")]: { display: "none" },
  }));

  return (
    <AppBar position="sticky">
      {/* //! Note that in Navbar MUI using its default background color that is why when we use dark mode theme it changes to black it is happen because we did not defined any custom color for background if we do that default dark theme will not work  */}
      <MyToolbar color="text.primary">
        <Typography
          sx={{ display: { xs: "none", sm: "flex" } }}
          variant="h6"
          textTransform="uppercase"
          alignItems="center"
          justifyContent="center"
        >
          <Facebook sx={{ marginRight: "6px" }} />
          Social
        </Typography>
        <Facebook sx={{ display: { xs: "block", sm: "none" } }} />
        {/* Here Search is Div element */}
        <Search
          //! if the mode is light change background color to white and if mode is not light change background color to default it will automatically adapt the dark color for dark mode
          sx={{
            backgroundColor: mode === "light" ? "white" : "background.default",
          }}
        >
          <InputBase sx={{ width: "100%" }} placeholder="Search..." />
        </Search>
        {/* Here Icons is Box element from MUI */}
        <Icons>
          {/* We've Import Badge from MUI */}
          <Badge badgeContent={2} color="error">
            {/* Mail Icon is imported from Mui */}
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            {/* Notifications Icon is imported from Mui */}
            <Notifications />
          </Badge>
          <Avatar
            sx={{ borderRadius: "60%", width: "30px", height: "30px" }}
            src="https://i2-prod.manchestereveningnews.co.uk/incoming/article9831159.ece/ALTERNATES/s810/JS56432235.jpg"
            // function for menu setting open when clicked (true)
            onClick={() => {
              setOpen(true);
            }}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ borderRadius: "60%", width: "30px", height: "30px" }}
            src="https://i2-prod.manchestereveningnews.co.uk/incoming/article9831159.ece/ALTERNATES/s810/JS56432235.jpg"
            // function for menu setting open when clicked (true)
            onClick={() => {
              setOpen(true);
            }}
          />
          <Typography variant="span">John</Typography>
        </UserBox>

        <Menu
          sx={{ marginTop: "50px" }}
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          // setting the intialvalue from "state" = "false"
          open={open}
          // OnClose event function set the state = "false" which it clicked outside from menu
          onClose={() => {
            setOpen(false);
          }}
          // Position top and right corner
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </MyToolbar>
    </AppBar>
  );
};

export default Navbar;
