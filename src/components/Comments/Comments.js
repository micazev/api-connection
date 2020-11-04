import React from "react";
import CommentPost from "../CommentPost/CommentPost";
import "./Comments.css";

class Comments extends React.Component {
  state = {
    Comment: "",
  };

  handleChange = (event) => {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  };

  sendData = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="comments">
        <h3>{} Comments</h3>

        <div className="insertComment">
          <img src="" alt="" className="ProfilePic" />
          <div className="join">
            <h4>Join the conversation</h4>
            <form onSubmit={this.sendData} className="flex">
              <textarea
                name="description"
                onChange={this.handleChange}
                rows="2"
                placeholder="Comment"
              ></textarea>
              <button className="button">Comment</button>
            </form>
          </div>
        </div>
        <CommentPost />
      </div>
    );
  }
}

export default Comments;
