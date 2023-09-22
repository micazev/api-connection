import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ApiBeerList from "./components/ApiBeerList/ApiBeerList";
import Upload from "./components/Upload/Upload";
import ItemInfo from "./components/ItemInfo/ItemInfo";

import { Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route path="/beers" component={ApiBeerList} />
      <Route path="/newbeer" component={Upload} />
      <Route path="/beer/:beerId" component={ItemInfo} />
      <ApiBeerList />
    </div>
  );
}

export default App;
