import React, { Component } from "react";

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUp: false,
    };
  }

  render() {
    const { isUp } = this.state;

    const showBtn = isUp ? (
      <button type="button" className="btn btn-primary">
        Sort alpha up <i className="bi bi-sort-alpha-up"></i>
      </button>
    ) : (
      <button type="button" className="btn btn-primary">
        Sort alpha down <i className="bi bi-sort-alpha-down"></i>
      </button>
    );
    return <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">{showBtn}</div>;
  }
}

export default Sort;
