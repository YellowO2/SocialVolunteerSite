import React, { useState } from "react";
import CustomEditor from "../components/custom_editor/custom_editor.jsx";
import { useNavigate } from "react-router-dom";

const tags = [
  "Tag 1",
  "Tag 2",
  "Tag 3",
  "Tag 4",
  // Add more tags as needed
];

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  //   const [images, setImages] = useState([]); // For optional images
  const [community, setCommunity] = useState(""); // For selecting community

  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (content) => {
    setContent(content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock API call
    const newPost = {
      id: Date.now(),
      title,
      content,
      selectedTags,
      //   images,
      community,
      createdAt: new Date().toLocaleDateString(),
    };

    // Replace this with actual API call
    console.log("New Post:", newPost);

    // Redirect to the new post page
    navigate(`/post/${newPost.id}`);
    alert(
      newPost.title +
        "\n" +
        newPost.content +
        +"\n" +
        newPost.selectedTags +
        "\n" +
        "We will send this to backend for actual"
    );
  };
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-6">
        <h1 className="text-2xl font-semibold">Create post</h1>
      </div>
      <div className="mb-6">
        <div className="d-flex align-items-center space-x-2">
          <button className="text-muted d-flex align-items-center space-x-1 btn btn-link">
            <span>Community</span>
            <i className="fas fa-caret-down"></i>
          </button>
        </div>
      </div>
      <div className="mb-6">
        <div className="my-4 d-flex">
          {/* <button className="text-primary font-semibold pb-2 border-bottom border-primary btn btn-link">
            Text
          </button>
          <button className="text-muted pb-2 btn btn-link">
            Images & Video
          </button> */}
          {/* <button className="text-muted pb-2 btn btn-link">Link</button>
          <button className="text-muted pb-2 btn btn-link">Poll</button> */}
          <h3>Title</h3>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Give it a title..."
          className="form-control"
          maxLength="300"
          value={title}
          onChange={handleTitleChange}
        />
        <div className="text-end text-muted text-sm mt-1">
          {title.length}/300
        </div>
      </div>
      <div className="mb-4">
        {/* Tag selector */}
        <div className="mb-4 dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Add tags
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {tags.map((tag, index) => (
              <li key={index}>
                <button
                  className={`dropdown-item ${
                    selectedTags.includes(tag) ? "active" : ""
                  }`}
                  type="button"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Tag selector end */}

        {/* Selected tags */}
        <div className="my-4 selected-tags">
          {selectedTags.map((tag, index) => (
            <span key={index} className="badge bg-primary me-2">
              {tag}{" "}
              <button
                className="btn-close"
                onClick={() => toggleTag(tag)}
              ></button>
            </span>
          ))}
        </div>

        <CustomEditor value={content} onChange={handleContentChange} />

        <div className="d-flex justify-content-end mt-2">
          <button className="btn btn-light me-2">Save draft</button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
