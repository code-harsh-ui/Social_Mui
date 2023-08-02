import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box p={2} flex={4}>
      {/* Passing the props to the Post Component */}
      <Post img={"https://rb.gy/htnao"} />
      <Post img={"https://rb.gy/8a8zd"} />
      <Post img={"https://rb.gy/6eh5b"} />
      <Post img={"https://tinyurl.com/3tkabtu2"} />
    </Box>
  );
};

export default Feed;
