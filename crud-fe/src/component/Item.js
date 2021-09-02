import React, { Component } from "react";

class Item extends Component {
  render() {
    const { index, item } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.main}</td>
        <td>
          {item.status ? (
            <span className="badge bg-success text-white">
              Read
            </span>
          ) : (
            <span className="badge bg-danger text-white">
              Un Read
            </span>
          )}
        </td>
        <td>
          <button type="button" className="btn btn-warning">
            <i className="bi bi-pencil-square"></i> Edit
          </button>
          <button type="button" className="btn btn-danger">
            <i className="bi bi-trash"></i>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
