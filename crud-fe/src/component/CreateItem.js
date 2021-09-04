import React, { Component } from "react";

class CreateItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastId: '',
      id: '',
      name: '',
      main: '',
      status: false,
    };
  }

  onCloseForm = () => {
    this.props.onCloseFormPr();
  };

  onSubmitForm = (event) => {
    event.preventDefault();

    this.props.getNewItem(this.state);
  };

  onChangeValue = (event) => {
    if(this.props.itemUpdate.id !== ''){
      this.setState({
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      });
    }
    
  };

  componentDidMount(){
    // console.log('itemUpdate 1',this.props.itemUpdate)

    if(this.props.itemUpdate.id){
      this.setState({
        id: this.props.itemUpdate.id,
        name: this.props.itemUpdate.name,
        main: this.props.itemUpdate.main,
        status: this.props.itemUpdate.status,
        lastId: this.props.itemUpdate.id,
      })
    }
  }

  componentDidUpdate(){
    // console.log('itemUpdate 2',this.props.itemUpdate)
    if(this.props.itemUpdate.id !== this.state.lastId){
      this.setState({
        id: this.props.itemUpdate.id,
        name: this.props.itemUpdate.name,
        main: this.props.itemUpdate.main,
        status: this.props.itemUpdate.status,
        lastId: this.props.itemUpdate.id,
      })
    }
  }

  render() {
    const {name, main, status} = this.state;

    const {itemUpdate} = this.props;
   
    return (
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">
          {itemUpdate.id === '' ? "Create" : "Update"} item
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmitForm}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                onChange={this.onChangeValue}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Main</label>
              <input
                type="text"
                name="main"
                value={main}
                className="form-control"
                onChange={this.onChangeValue}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="status"
                onChange={this.onChangeValue}
                checked={status}
              />
              <label className="form-check-label">Have read?</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onCloseForm}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateItem;
