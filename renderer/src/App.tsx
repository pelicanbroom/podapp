import React, { Component, FormEvent, ChangeEvent } from "react";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import PodcastContainer from "./components/PodcastContainer";
import "./styles/styles.css";
import PodcastList from "./components/PodcastList";

interface State {
  newSearchTerm: string;
}

export class App extends Component<{}, State> {
  state = {
    newSearchTerm: ""
  };

  render() {
    return (
      <div>
        <div className="searchbar-wrapper">
          <Searchbar
            searchTerm={this.state.newSearchTerm}
            onAdd={this.addTerm}
            onChange={this.handleSearchTermChange}
          ></Searchbar>
        </div>
        <div className="sidebar-wrapper">
          <Sidebar></Sidebar>
        </div>
        <div className="podcast-wrapper">
          <PodcastList searchTerm={this.state.newSearchTerm}></PodcastList>
        </div>
      </div>
    );
  }

  private addTerm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(previousState => ({
      newSearchTerm: ""
    }));
  };

  private handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      newSearchTerm: event.target.value
    });
  };
}

export default App;
