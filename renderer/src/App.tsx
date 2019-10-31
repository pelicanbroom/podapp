import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import PodcastContainer from "./components/PodcastContainer";
import "./styles/styles.css";

export class App extends Component {
  render() {
    return (
      <div>
        <div className="searchbar-wrapper">
          <Searchbar></Searchbar>
        </div>
        <div className="sidebar-wrapper">
          <Sidebar></Sidebar>
        </div>
        <div className="podcast-wrapper">
          <PodcastContainer></PodcastContainer>
        </div>
      </div>
    );
  }
}

export default App;
