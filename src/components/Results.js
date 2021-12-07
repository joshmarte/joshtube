import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./results.css";
import Video from "./Video";

export default class Results extends Component {
  constructor() {
    super();
  }

  render() {
    let videoArray = this.props.results.map((item) => {
      return (
        <div className="video-container" key={item.id.videoId}>
          <div className="img-container">
            <img
              src={item.snippet.thumbnails.high.url}
              alt="video"
              height="325"
              width="500"
            />
          </div>
          <Link to={`/videos/${item.id.videoId}`} className="link-title">
            {item.snippet.title}
          </Link>
        </div>
      );
    });

    return (
      <div id="results-container">
        <Routes>
          <Route exact path="/" element={videoArray} />
          <Route path="/videos/:id" element={<Video />} />
        </Routes>
      </div>
    );
  }
}