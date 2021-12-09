import React, { Component } from "react";
import Item from "./Item";

class TableItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      main: "",
      status: -1,
    };
    
  
  }

  onDeleteItem = (id) => {
    this.props.onDeleteItemPr(id);
  };

  onEditItem = (id) => {
    this.props.onEditItemPr(id);
  };

  onChangeVal = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    this.props.onFilterItemPr(
      name === 'name' ? value : this.state.name,
      name === 'main' ? value : this.state.main,
      name === 'status' ? Number(value) : this.state.status
    )

    this.setState({
      [name]: value,
    } );

   
  };

  render() {
    const { listItems } = this.props;
    const { name, main, status } = this.state;
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
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={this.onChangeVal}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="main"
                  className="form-control"
                  value={main}
                  onChange={this.onChangeVal}
                />
              </td>
              <td>
                <select
                  name="status"
                  className="form-select"
                  value={status}
                  onChange={this.onChangeVal}
                >
                  <option value={-1}>all</option>
                  <option value={0}>read</option>
                  <option value={1}>un read</option>
                </select>
              </td>
              <td></td>
            </tr>
            {elmItem}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableItems;
