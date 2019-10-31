import React, { Component } from "react";
import PodcastDescription from "./PodcastDescription";
import PodcastList from "./PodcastList";

export class PodcastContainer extends Component {
  render() {
    return (
      <div>
        <PodcastDescription></PodcastDescription>
        <PodcastList searchTerm="test"></PodcastList>
      </div>
    );
  }
}

export default PodcastContainer;
