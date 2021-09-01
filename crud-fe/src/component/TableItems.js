import React, { Component } from "react";
import Item from './Item';

class TableItems extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Main</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           <Item />
           <Item />
           <Item />
           <Item />
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableItems;
