import React from "react";
import { Outlet, useNavigate } from "react-router";
import "./search.css";

export default function Search(props) {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.fetch();
    navigate("/videos");
  };
  const noSearch = (
    <div id="blank">No Search Results Yet! Please submit a search Above!</div>
  );

  return (
    <div>
      <div id="form-container">
        <form onSubmit={handleSubmit} id="search-form">
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
      {props.display > 0 ? null : noSearch}
      <Outlet />
    </div>
  );
}
