import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <tr>
        <td>2</td>
        <td>Yêu thần ký</td>
        <td>Nhiếp Ly</td>
        <td>
          {" "}
          <span className="badge badge-danger bg-danger text-white">
            Un Read
          </span>{" "}
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
