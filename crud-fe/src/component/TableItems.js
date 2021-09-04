import React, { Component } from "react";
import Item from "./Item";

class TableItems extends Component {
  onDeleteItem = (id) => {
    this.props.onDeleteItemPr(id);
  };

  onEditItem = (id) => {
    this.props.onEditItemPr(id);
  };
  
  render() {
    const { listItems } = this.props;

    const elmItem = listItems.map((item, index) => {
      return (
        <Item
          key={item.id}
          index={index}
          item={item}
          onEditItem={this.onEditItem}
          onDeleteItem={this.onDeleteItem}
        />
      );
    });
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
          <tbody>{elmItem}</tbody>
        </table>
      </div>
    );
  }
}

export default TableItems;
