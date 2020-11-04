import React from "react";
import "./CommentPost.css";

class CommentPost extends React.Component {
  render() {
    return (
      <div className="commentBox flex">
        <img src="" alt="" className="ProfilePic" />
        <div>
          <div className="flex">
            <h3>By {} Red Cow</h3>
            <span> {} data</span>
          </div>
          <p>
            {} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            ipsam consequuntur recusandae velit quisquam necessitatibus et dolor
            rerum quis mollitia perspiciatis, soluta distinctio ad culpa
            similique! Sint nostrum ad incidunt?
          </p>
        </div>
      </div>
    );
  }
}

export default CommentPost;
