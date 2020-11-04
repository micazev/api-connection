import React from "react";
import axios from "axios";
import "./ItemInfo.css";

class ItemInfo extends React.Component {
  state = {
    image_url: "",
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewer_tips: "",
    attenuation_level: "",
    contributed_by: "",
    loading: true,
  };
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
      .then(
        (res) => {
          let item = res.data;
          this.setState(item);
          this.setState({ loading: false });
        },
        (error) => {
          console.log("erro: " + error);
          this.setState({ loading: false });
        }
      );
  }
  render() {
    return (
      <div className="item-info  flex">
        <div className="item-body flex">
          {this.state.loading}
          <h2 className="item-title">{this.state.name}</h2>
          <p>{this.state.description}</p>
          <p className="item-author">{this.state.contributed_by}</p>
        </div>
        <img className="info-img" src={this.state.image_url} />
      </div>
    );
  }
}

export default ItemInfo;
