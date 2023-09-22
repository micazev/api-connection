import React from "react";
import axios from "axios";
import "./ItemInfo.css";

function Bolinhas({ valor }) {
  const bolinhasPreenchidas = Math.ceil(valor / 20);

  return (
    <div>
      {Array(5)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className={`bolinha ${
              index < bolinhasPreenchidas ? "preenchida" : ""
            }`}
          ></div>
        ))}
    </div>
  );
}

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
        },
      );
  }
  render() {
    return (
      <div className="item-body">
        <div className="item-info ">
          {this.state.loading}
          <h2 className="item-title">{this.state.name}</h2>
          <p className="item-tagline">{this.state.tagline}</p>
          <p>{this.state.description}</p>
          <div className="item-details">
            <div className="item-degree">
              <h4>CRISPNESS</h4>
              <Bolinhas valor={this.state.attenuation_level} />
            </div>
            <button className="item-button">WHERE TO BUY</button>
          </div>
        </div>
        <img className="info-img" src={this.state.image_url} />
      </div>
    );
  }
}

export default ItemInfo;
