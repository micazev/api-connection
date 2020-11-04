import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ItensList from "./components/ItensList/ItensList";
import Upload from "./components/Upload/Upload";
import ItemInfo from "./components/ItemInfo/ItemInfo";

import {
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route path="/beers" component={ItensList} />
      <Route path="/newbeer" component={Upload} />
      <Route path="/beer/:beerId" component={ItemInfo} />
      <ItensList />
    
    </div>
  );
}

export default App;
