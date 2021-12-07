import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Results from "./components/Results";
import Search from "./components/Search";

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

  handleSubmit = (event) => {
    event.preventDefault();

    this.fetchData();
  };

  render() {
    let noResults = (
      <div id="blank">No Search Results Yet! Please submit a search Above!</div>
    );

    return (
      <div className="app">
        <Nav />
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.searchTerm}
        />
        {!this.state.results ? (
          noResults
        ) : (
          <Results results={this.state.apiResults} />
        )}
      </div>
    );
  }
}

export default App;
