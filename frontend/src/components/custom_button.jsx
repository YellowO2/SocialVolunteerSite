import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ShareIcon from "@mui/icons-material/Share";

function CustomButton({
  displayType,
  buttonType,
  upvoteCount = null,
  handleClick = null,
}) {
  let buttonVariant, buttonText, icon, upvotes;

  if (buttonType === "upvote") {
    buttonVariant = "outlined";
    icon = <ArrowUpwardIcon />;
    buttonText = "Upvote";
    upvotes = <span>({upvoteCount})</span>;
  } else if (buttonType === "share") {
    buttonVariant = "contained";
    icon = <ShareIcon />;
    buttonText = "Share";
  }

  return (
    <Button
      variant={buttonVariant}
      startIcon={icon}
      onClick={handleClick}
      size="small"
    >
      {buttonText}
      {upvotes}
    </Button>
  );
}

CustomButton.propTypes = {
  displayType: PropTypes.oneOf(["card", "post"]).isRequired,
  buttonType: PropTypes.oneOf(["upvote", "share"]).isRequired,
  upvoteCount: PropTypes.number,
  handleClick: PropTypes.func,
};

export default CustomButton;
