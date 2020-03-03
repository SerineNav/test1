import React, { Component } from "react";

class Form extends Component {
  state = {
    username: " "
  };
  handleChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(e);
    console.log("Her name is:" + this.state.username);

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button>Submit</button>
          <p>"Her name is:" {this.state.username}</p>;
        </form>
      </div>
    );
  }
}
export default Form;
