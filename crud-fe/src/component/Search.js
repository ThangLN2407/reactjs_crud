import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        <form>
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Search..."
              />
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-search"></i>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
