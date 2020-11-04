import React from "react";
import "./Upload.css";

class Upload extends React.Component {
  state = {
    name: "",
    description: "",
    year: "",
    price: "",
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
      <div className="upload-info flex">
        <h1>Add your brew</h1>
        <form onSubmit={this.sendData}>
          <input
            name="name"
            onChange={this.handleChange}
            type="text"
            placeholder="Name"
          />
          <input
            name="year"
            onChange={this.handleChange}
            type="number"
            placeholder="Year"
          />
          <input
            name="price"
            onChange={this.handleChange}
            type="text"
            placeholder="Price"
          />
          <textarea
            name="description"
            onChange={this.handleChange}
            rows="5"
            placeholder="Descrição"
          ></textarea>
          <button>Add new</button>
        </form>
      </div>
    );
  }
}

export default Upload;
