import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Divider,
  CardHeader,
} from "@mui/material";
import CustomButton from "./custom_button";

const DisplayCard = ({ postData }) => {
  const navigate = useNavigate();
  const [upvotes, setUpvotes] = useState(postData.upvotes);

  const handleUpvote = (e) => {
    e.stopPropagation();
    setUpvotes(upvotes + 1);
  };

  const handleShare = (e) => {
    e.stopPropagation();
  };

  const handleCardClick = () => {
    navigate(`/post/${postData.id}`);
  };

  return (
    <Card
      variant="outlined"
      onClick={handleCardClick}
      sx={{ width: 320, maxWidth: "100%", boxShadow: "lg", cursor: "pointer" }}
    >
      <CardHeader title={postData.title} />

      <CardMedia
        component="img"
        height="194"
        image="/volunteer.png"
        // image={postData.image}
        alt="Paella dish"
      />
      <CardContent>
        {/* <Typography variant="h5" component="div" fontWeight="bold">
            {postData.author}
          </Typography> */}

        <Typography variant="body1" color="text.secondary">
          {postData.description}
        </Typography>
      </CardContent>
      <Divider inset="none" />
      <CardActions>
        <CustomButton
          displayType="card"
          buttonType="upvote"
          upvoteCount={upvotes}
          handleClick={handleUpvote}
        />
        <CustomButton
          displayType="card"
          buttonType="share"
          handleClick={handleShare}
        />
      </CardActions>
    </Card>
  );
};

DisplayCard.propTypes = {
  postData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    upvotes: PropTypes.number.isRequired,
  }).isRequired,
};

export default DisplayCard;
