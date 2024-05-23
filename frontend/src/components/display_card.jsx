import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

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
    <div className="col-md-6 mb-5">
      <div
        className="card"
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        {" "}
        {/* Add onClick handler */}
        <img
          className="card-img-top"
          src={postData.image}
          alt={postData.title}
          style={{ maxWidth: "100%" }}
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{postData.title}</h5>
            <h5 className="fw-bolder">{postData.author}</h5>
            <p className="card-text">{postData.description}</p>
          </div>
        </div>
        <div className="card-footer pt-0 border-top-0 bg-transparent">
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-light mt-auto d-flex align-items-center"
              onClick={handleUpvote}
            >
              <i className="fas fa-arrow-up mr-2"></i>
              <span>Upvote</span>
              <span className="ml-2"> {upvotes}</span>
            </button>
            <button
              className="btn btn-light mt-auto d-flex align-items-center"
              onClick={handleShare}
            >
              <i className="fas fa-share-alt mr-2"></i>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
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
