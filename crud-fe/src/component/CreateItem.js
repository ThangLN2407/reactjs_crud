import React, { Component } from "react";

class CreateItem extends Component {
  constructor(props) {
    super(props);
  }

  onClose = () => {
    alert("close");
  };
  render() {
    return (
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">
          Create item
          <span className="close-right" onClick={this.onClose}>
            <i class="bi bi-x-square-fill"></i>
          </span>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Main</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Have read?
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-primary">
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateItem;
