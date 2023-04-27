import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

// rce
export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <News pageSixe={6} country="in" category="general" />
        <Routes>
          <Route
            path="/News/"
            element={<News pageSixe={6} country="in" category="general" />}
          />
          <Route
            path="*"
            element={<News pageSixe={6} country="in" category="general" />}
          />
          <Route
            path="/"
            element={<News pageSixe={6} country="in" category="general" />}
          />
          <Route
            path="/general"
            element={<News pageSixe={6} country="in" category="general" />}
          />
          <Route
            path="/business"
            element={<News pageSixe={6} country="in" category="business" />}
          />

          <Route
            path="/entertainment"
            element={
              <News pageSixe={6} country="in" category="entertainment" />
            }
          />
          <Route
            path="/health"
            element={<News pageSixe={6} country="in" category="health" />}
          />
          <Route
            path="/science"
            element={<News pageSixe={6} country="in" category="science" />}
          />
          <Route
            path="/sports"
            element={<News pageSixe={6} country="in" category="sports" />}
          />
          <Route
            path="/technology"
            element={<News pageSixe={6} country="in" category="technology" />}
          />
        </Routes>
      </>
    );
  }
}
