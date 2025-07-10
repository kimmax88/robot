import "./App.css";

import React from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import Search from "./Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };
  render() {
    const filteredRobets = this.state.robots.filter((rebot) => {
      return rebot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Robot Fridneds</h1>
        <Search searchChange={this.onSearchChange} />
        <CardList robots={filteredRobets} />
      </div>
    );
  }
}

export default App;
