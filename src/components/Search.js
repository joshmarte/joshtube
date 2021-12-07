import React from "react";
import "./search.css";

export default function Search(props) {
  return (
    <div id="form-container">
      <form onSubmit={props.handleSubmit} id="search-form">
        <input
          type="text"
          placeholder="Search..."
          name="seachText"
          value={props.value}
          onChange={props.handleChange}
          id="search-input"
        />
        <input type="submit" value="Search" id="submit-bttn" />
      </form>
    </div>
  );
}
