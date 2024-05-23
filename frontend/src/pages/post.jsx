import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button.jsx";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Mock fetch post and comments data
    // For actual, fetch data using id
    const fetchPost = async () => {
      const postData = {
        id: id,
        title: `Post Title ${id}`,
        content: `This is the content of post ${id}. We will fetch the content from back end using the id in url for actual work .
         \nufosfnsofnsfiodnsfiosfnsdiofndsfodsfnisofnsidfndsofnsfnosnfosnfosdnfodns`,
        upvotes: Math.floor(Math.random() * 100),
        createdAt: new Date().toLocaleDateString(),
      };
      setPost(postData);

      const commentsData = [
        {
          id: 1,
          author: "User1",
          content: "Great post!",
          createdAt: "2024-05-01",
        },
        {
          id: 2,
          author: "User2",
          content: "Thanks for sharing!",
          createdAt: "2024-05-02",
        },
      ];
      setComments(commentsData);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <div className="d-flex justify-content-between mb-3">
            <span className="text-muted">Posted on {post.createdAt}</span>
          </div>
          <p className="card-text">{post.content}</p>
        </div>
        <div className="card-body">
          <Button
            displayType="post"
            buttonType="upvote"
            upvoteCount={post.upvotes}
            handleClick={() => setPost({ ...post, upvotes: post.upvotes + 1 })}
          />
          <Button displayType="post" buttonType="share" />
        </div>
      </div>
      <div>
        <h4>Comments</h4>
        {comments.map((comment) => (
          <div key={comment.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{comment.author}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {comment.createdAt}
              </h6>
              <p className="card-text">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
