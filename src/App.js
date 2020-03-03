import React, { Component } from "react";
import User from "./components/User";
import Form from "./components/Form";
import Slideshow from "./components/Slideshow";
import Weather from "./components/Weather";
import "./App.css";

class App extends Component {
  state = {
    member: [
      { name: "Jack", age: "20", hobby: "swimming", id: 1 },
      { name: "Jack1", age: "20", hobby: "playingFootball", id: 2 },
      { name: "Jack2", age: "22", hobby: "reading", id: 3 }
    ]
  };
  deleteMember = id => {
    let member = this.state.member.filter(i => {
      return i.id !== id;
    });
    this.setState({
      member: member
    });
  };
  render() {
    return (
      <div>
        <Slideshow />
        <Weather />
        <User deleteMember={this.deleteMember} member={this.state.member} />
        <Form />
      </div>
    );
  }
}
export default App;
