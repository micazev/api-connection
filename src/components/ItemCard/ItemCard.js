import React from "react";
import "./ItemCard.css";

class ItemCard extends React.Component {
  state = {};

  render() {
    return (
      <div className="item-card" key={this.props.id}>
        <div className="img-bg flex">
          <img src={this.props.img} alt="" className="card-img" />
        </div>
        <h4 className="card-title">{this.props.title}</h4>
      </div>
    );
  }
}

export default ItemCard;
