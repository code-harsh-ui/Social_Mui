import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

const Post = (props) => {
  return (
    //! Note that in Navbar MUI using its default background color that is why when we use dark mode theme it changes to black it is happen because we did not defined any custom color for background if we do that default dark theme will not work
    <Card sx={{ marginTop: "2rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[400] }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        // We can customize height of the card
        height="400px"
        // getting the props from Feed.jsx file
        image={props.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* Heart Icon with filling when clicked */}
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: red[400] }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
