import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./Components/Add";
import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    const data = window.localStorage.getItem("myDarkMode");
    console.log(data);
    if (data !== null) {
      setMode(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("myDarkMode", JSON.stringify(mode));
    console.log("mode", mode);
  }, [mode]);

  // We are using default dark theme from MUI
  const darkTheme = createTheme({
    palette: {
      // In paletter modes are predefined in default dark theme in MUI
      mode: mode, // either the value can be dark of light which is given in documentation of MUI.
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      {/* //! Note that in Navbar MUI using its default background color that is why when we use dark mode theme it changes to black it is happen because we did not defined any custom color for background if we do that default dark theme will not work same goes with color "text.primary"  check MUI dark mode tab in mui for better understandings*/}
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        {/* Stack is a container component for arranging elements vertically or horizontally.  */}
        {/* By default, Stack arranges items vertically in a column. Use the direction prop to position items horizontally in a row */}
        {/* These Stack are using flexbox that is why we can use the properties of flexboxes like align item justifycontent etc */}
        <Stack direction="row" justifyContent="space-between">
          {/* sending states as a props to sidebar component */}
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
