import React from "react";
import { connect } from "react-redux";
import Dashboard from "./Content_Dashboard";
import Catalog from "./Content_Catalog";
import Sales from "./Content_Sales";
import Reports from "./Content_Reports";
import Extensions from "./Content_Extensions";
import SearchBar from "./SearchBar";
const ContentManager = (props) => (
  <div id="content-wrapper">
    <SearchBar />
      <div>
        <h1 className="heading">Content Manager</h1>
      </div>
    {props.content == "dashboard" && <Dashboard />}
    {props.content == "catalog" && <Catalog />}
    {props.content == "sales" && <Sales />}
    {props.content == "reports" && <Reports />}
    {props.content == "extensions" && <Extensions />}
  </div>
);

const MapStateToProps = (state) => {
  return {
    content: state.content,
  };
};

export default connect(MapStateToProps)(ContentManager);
