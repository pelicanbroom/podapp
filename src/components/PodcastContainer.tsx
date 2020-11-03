import React, { Component } from 'react';
import PodcastDescription from './PodcastDescription';

export class PodcastContainer extends Component {
  render(): JSX.Element {
    return (
      <div>
        <PodcastDescription />
       
      </div>
    );
  }
}

export default PodcastContainer;
