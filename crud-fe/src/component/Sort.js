import React, { Component } from "react";

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUp: false,
    };
  }

  onClickBtn = (name, value) => {
    this.setState({
      isUp: !this.state.isUp
    })
    console.log(name, value)
  }

  render() {
    const { isUp } = this.state;

    const showBtn = isUp ? (
      <button type="button" className="btn btn-primary" onClick ={() => {this.onClickBtn('name', true)}}>
        Sort alpha up <i className="bi bi-sort-alpha-up"></i>
      </button>
    ) : (
      <button type="button" className="btn btn-primary" onClick ={() => {this.onClickBtn('name', false)}}>
        Sort alpha down <i className="bi bi-sort-alpha-down"></i>
      </button>
    );
    return <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">{showBtn}</div>;
  }
}

export default Sort;
