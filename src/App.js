import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// rce
export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <News pageSixe={6} />
      </>
    );
  }
}
