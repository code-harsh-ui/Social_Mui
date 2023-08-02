import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import styled from "@emotion/styled";

const Add = () => {
  const [open, setOpen] = useState(false);
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "1rem",
  });
  return (
    <>
      {/* Floating Action button */}
      <Fab
        onClick={() => {
          setOpen(true);
        }}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        color="primary"
        aria-label="add"
      >
        {/* With Add Icon imported form mui icons */}
        <AddIcon />
      </Fab>

      {/* Modal for when we click on fab */}
      <Modal
        //   making modal position center
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        // useState Inital state "open" is "false"
        open={open}
        // OnClose making changing initial state to "false"
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Setting Modal box Size , Background color, padding and border */}
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"} // background set as default so that we can toggle colors in darkmode
          color={"text.primary"} // for dark mode
          p={3}
          borderRadius={5}
        >
          {/* Heading Title in inner box */}
          {/* text.primary we used so that we can toggle colors in dark mode */}
          <Typography variant="h6" color="text.primary" textAlign={"center"}>
            Create Post
          </Typography>
          {/* UserImage and Name in a Row styled using emotion@mui */}
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={500}>
              John Doe
            </Typography>
          </UserBox>
          {/* TextField Element imported from MUI */}
          <TextField
            sx={{
              width: "100%",
            }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="standard"
          />
          {/* Stack use display flex by default that is why we can use flex properties like gap and directions */}
          <Stack direction="row" gap={1} mt={2} mb={3}>
            {/* Icons with different colors */}
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            // the buttons will take up the fullwidth of its container.
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
