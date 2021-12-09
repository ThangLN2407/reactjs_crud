import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }

  onChange = (event) => {
   
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = () => {
    this.props.onSearch(this.state.keyword);
  };

  render() {
    const { keyword } = this.state;

    return (
      <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <input
                type="text"
                name="keyword"
                className="form-control"
                value={keyword}
                placeholder="Search..."
                onChange={this.onChange}
              />
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <button type="button" onClick={this.onSubmit} className="btn btn-primary">
                <i className="bi bi-search"></i>
                Search
              </button>
            </div>
          </div>
        
      </div>
    );
  }
}

export default Search;
