import React, { Component } from 'react';
import PodcastList from './components/PodcastList';
import Searchbar from './components/Searchbar';
import Sidebar from './components/Sidebar';
import './styles/styles.css';

interface State {
  newSearchTerm: string;
  favoritePodcast: string[];
}

export class App extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props)
    this.state = {
      newSearchTerm: '',
      favoritePodcast: [localStorage.getItem('favorites')],
    };
  }

  render(): JSX.Element {
    return (
      <div>
        <div className="searchbar-wrapper">
          <Searchbar
            searchTerm={this.state.newSearchTerm}
            onAdd={this.addTerm}
            onChange={this.handleSearchTermChange}
           />
        </div>
        <div>{this.state.favoritePodcast}</div>
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="podcast-wrapper">
          <PodcastList searchTerm={this.state.newSearchTerm} />
        </div>
      </div>
    );
  }

  private addTerm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(() => ({
      newSearchTerm: '',
    }));
  };

  private handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      newSearchTerm: event.target.value,
    });
  };
}

export default App;
