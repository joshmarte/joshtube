import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./results.css";

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
              width="450"
            />
          </div>
          <Link to={`/videos/${item.id.videoId}`} className="link-title">
            {item.snippet.title}
          </Link>
        </div>
      );
    });

    return <div id="results-container">{videoArray}</div>;
  }
}
