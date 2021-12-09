import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Results from "./components/Results";
import Search from "./components/Search";
import Video from "./components/Video";

require("dotenv").config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      apiResults: [],
      results: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  //API CALL COMPONENET
  fetchData = async () => {
    const API_KEY = `${process.env.REACT_APP_API_KEY}`;
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.searchTerm}&type=video&key=${API_KEY}`
    );
    let data = await res.json();
    this.setState({
      searchTerm: "",
      apiResults: data.items,
      results: true,
    });
  };

  render() {
    return (
      <div className="app">
        <Nav />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Search
                handleChange={this.handleChange}
                fetch={this.fetchData}
                value={this.state.searchTerm}
                display={this.state.apiResults.length}
              />
            }
          >
            <Route
              path="/videos"
              element={<Results results={this.state.apiResults} />}
            />
          </Route>
          <Route path="/videos/:id" element={<Video />} />
          <Route path="/about" />
        </Routes>
      </div>
    );
  }
}

export default App;
