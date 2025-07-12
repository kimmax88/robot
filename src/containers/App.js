import "../App.css";

import React from "react";
import CardList from "../Components/CardList";
import Search from "../Components/Search";
import Scroll from "../Components/Scroll";

class App extends React.Component {
  constructor() {
    console.log("constructor");

    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };
  render() {
    console.log("render");

    const filteredRobets = this.state.robots.filter((rebot) => {
      return rebot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Robot Fridneds</h1>
        <Search searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobets} />
        </Scroll>
      </div>
    );
  }
}

export default App;
