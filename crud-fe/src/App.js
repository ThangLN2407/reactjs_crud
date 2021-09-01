import React, { Component } from 'react';

import "./App.css";
import CreateItem from './component/CreateItem';
import TableItems from './component/TableItems';
import Control from './component/Control';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isDisplayForm : false
    }
  }
  render() {

    const createForm = this.state.isDisplayForm ? <CreateItem /> : '';

    return (
      <div className="container-fluid">
      <div className="row">
        <h1>CURD-REACT JS</h1>
      </div>
      <div className="row mt-20">
        <div className="row">
          <div className={ this.state.isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            {createForm}
          </div>
          <div className={this.state.isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <div className="row">
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <button type="button" className="btn btn-primary">
                  <i className="bi bi-plus-lg"></i> Create
                </button>
                <button type="button" className="btn btn-primary">
                  <i className="bi bi-plus-lg"></i> Create
                </button>
              </div>
            </div>
            <Control />
            <div className="row mt-20">
             <TableItems />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
