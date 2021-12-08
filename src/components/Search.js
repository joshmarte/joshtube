import React from "react";
import { useNavigate } from "react-router";
import "./search.css";

export default function Search(props) {
  let navigate = useNavigate();
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
        <input
          type="submit"
          value="Search"
          id="submit-bttn"
          onClick={() => {
            navigate("/videos");
          }}
        />
      </form>
    </div>
  );
}
