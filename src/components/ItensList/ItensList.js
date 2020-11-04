import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import "./ItensList.css";
import axios from "axios";
class ItensList extends React.Component {
  state = {
    playlist: [],
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((res) => {
      this.setState({ playlist: res.data });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="list">
        <h1>🍻 Choose your Beer</h1>
        <div className="cards">
          {this.state.playlist.map((val, i) => {
            return (
              <div className="item-card">
                <Link to={`/beer/${val._id}`}>
                  <ItemCard
                    key={val._id}
                    id={val._id}
                    img={val.image_url}
                    title={val.name}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ItensList;
