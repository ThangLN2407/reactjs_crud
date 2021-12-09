import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {

  onSearch = (keyword) => {
    this.props.onSearch(keyword)
  }
  render() {
    return (
      <div className="row mt-20">
        <Search onSearch={this.props.onSearch} />
        <Sort />
      </div>
    );
  }
}

export default Control;
