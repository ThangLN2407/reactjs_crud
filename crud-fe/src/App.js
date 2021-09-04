import React, { Component } from "react";

import "./App.css";
import CreateItem from "./component/CreateItem";
import TableItems from "./component/TableItems";
import Control from "./component/Control";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisplayForm: false,
      listItems: [],
      itemUpdate: {},
    };
  }

  toggleForm = () => {
    this.setState({
      isDisplayForm: true,
      itemUpdate: {
        id: "",
        name: "",
        main: "",
        status: false,
      },
    });
  };

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
      itemUpdate: {
        id: "",
        name: "",
        main: "",
        status: false,
      },
    });
  };

  onShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };

  generateData = () => {
    const items = [
      {
        id: uuidv4(),
        name: "Pham Nhan Tu Tien",
        main: "Han Lap",
        status: true,
      },
      {
        id: uuidv4(),
        name: "Kiem Dong Cuu Thien",
        main: "Chu Hang",
        status: true,
      },
      {
        id: uuidv4(),
        name: "Than Dao Dan Ton",
        main: "Lang Han",
        status: true,
      },
    ];

    localStorage.setItem("data", JSON.stringify(items));
  };

  componentDidMount() {
    if (!localStorage || !localStorage.getItem("data")) {
      this.generateData();
    }
    this.setState({
      listItems: JSON.parse(localStorage.getItem("data")),
    });
  }

  onSubmitForm = (dataNewItem) => {
    const { listItems } = this.state;
    if (dataNewItem.name !== "") {
      // create
      if (dataNewItem.id === "") {
        const data = {
          id: uuidv4(),
          name: dataNewItem.name,
          main: dataNewItem.main,
          status: dataNewItem.status,
        };
        listItems.push(data);
      } else {
        //update
        const { listItems } = this.state;
        const indexOfItem = listItems.findIndex((item) => { return (item.id === dataNewItem.id) });
        // const indexOfItem = listItems.findIndex(item => item.id === dataNewItem.id)
        listItems[indexOfItem] = dataNewItem;
      }

      localStorage.setItem("data", JSON.stringify(listItems));
      this.setState({
        listItems: listItems,
      });
    }

    this.onCloseForm();
  };

  onDeleteItem = (idItem) => {
    const newList = this.state.listItems.filter((item) => item.id !== idItem);
    localStorage.setItem("data", JSON.stringify(newList));
    this.setState({
      listItems: JSON.parse(localStorage.getItem("data")),
    });
  };

  onEditItem = (idItem) => {
    const { listItems } = this.state;
    const itemSelected = listItems.find((item) => item.id === idItem);
    this.setState({
      itemUpdate: itemSelected,
    });

    this.onShowForm();
  };

  componentDidUpdate() {
    if (JSON.parse(localStorage.getItem("data")).length === 0) {
      localStorage.removeItem("data");
    }
  }

  render() {
    const { listItems, isDisplayForm, itemUpdate } = this.state;

  
    const createForm = isDisplayForm ? (
      <CreateItem
        onCloseFormPr={this.onCloseForm}
        getNewItem={this.onSubmitForm}
        itemUpdate={itemUpdate}
      />
    ) : (
      ""
    );

    return (
      <div className="container-fluid">
        <div className="row">
          <h1>CURD-REACT JS</h1>
        </div>
        <div className="row mt-20">
          <div className="row">
            <div
              className={
                isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
              }
            >
              {createForm}
            </div>
            <div
              className={
                isDisplayForm
                  ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                  : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
              }
            >
              <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.toggleForm}
                  >
                    <i className="bi bi-plus-lg"></i> Create
                  </button>
                </div>
              </div>
              <Control />
              <div className="row mt-20">
                <TableItems
                  listItems={listItems}
                  onEditItemPr={this.onEditItem}
                  onDeleteItemPr={this.onDeleteItem}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
