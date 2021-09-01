import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button" className="btn btn-primary">
          Sort alpha down <i className="bi bi-sort-alpha-down"></i>
        </button>
        <button type="button" className="btn btn-primary">
          Sort alpha up <i className="bi bi-sort-alpha-up"></i>
        </button>
      </div>
    );
  }
}

export default Sort;
