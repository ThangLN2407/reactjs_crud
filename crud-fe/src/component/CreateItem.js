import React, { Component } from "react";

class CreateItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      main: "",
      status: false,
    };
  }

  onCloseForm = () => {
    this.props.onCloseFormPr();
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.getNewItem(this.state)
  };

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  render() {
    const { name, main, status } = this.state;

    return (
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">
          Create item
          <span className="close-right" onClick={this.onCloseForm}>
            <i className="bi bi-x-square-fill"></i>
          </span>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmitForm}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                onChange={this.onChangeValue}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Main</label>
              <input
                type="text"
                name="main"
                value={main}
                className="form-control"
                onChange={this.onChangeValue}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="status"
                onChange={this.onChangeValue}
                checked={status}
              />
              <label className="form-check-label">Have read?</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn btn-primary">
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateItem;
