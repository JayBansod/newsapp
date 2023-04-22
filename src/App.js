import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// rce
export default class App extends Component {
  render() {
    return (
      <>
        {/* <Router>
          <NavBar />
          <Routes>
            <Route path="/">
              <News pageSixe={6} country="in" category="general" />
            </Route>
            <Route path="/business">
              <News pageSixe={6} country="in" category="business" />
            </Route>
            <Route path="/entertainment">
              <News pageSixe={6} country="in" category="entertainment" />
            </Route>
            <Route path="/health">
              <News pageSixe={6} country="in" category="health" />
            </Route>
            <Route path="/science">
              <News pageSixe={6} country="in" category="science" />
            </Route>
            <Route path="/sports">
              <News pageSixe={6} country="in" category="sports" />
            </Route>
            <Route path="/technology">
              <News pageSixe={6} country="in" category="technology" />
            </Route>
          </Routes>
        </Router> */}
        <NavBar />
        <News pageSixe={6} country="in" category="general" />
      </>
    );
  }
}
