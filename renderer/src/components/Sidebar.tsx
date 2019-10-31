import React, { Component } from "react";

export class Sidebar extends Component {
  render() {
    return (
      <div >
        <nav className="sidebar-block">
          <div className="sidebar-container">
            <div className="sidebar-item-box">
              <span className="logo">PodApp</span>
            </div>
          </div>
          <div className="sidebar-container">
            <button className="sidebar-item-box sidebar-item-box--button">
              <span className="sidebar-heading">My Podcasts</span>
            </button>
            <button className="sidebar-item-box sidebar-item-box--button">
              <span className="sidebar-text">Recently Played</span>
            </button>
            <button className="sidebar-item-box sidebar-item-box--button">
              <span className="sidebar-text">Playlists</span>
            </button>
          </div>

          <div className="sidebar-container">
            <button className="sidebar-item-box sidebar-item-box--button">
              <span className="sidebar-heading">Explore</span>
            </button>
            <button className="sidebar-item-box sidebar-item-box--button">
              <span className="sidebar-text">Genres</span>
            </button>
            <button className="sidebar-item-box sidebar-item-box--button">
              <span className="sidebar-text">New Releases</span>
            </button>
          </div>

          <div className="sidebar-container sidebar-container--end">
            <button className="sidebar-item-box sidebar-item-box--button">
              <span className="sidebar-text">My Account</span>
            </button>
            <button className="sidebar-item-box sidebar-item-box--button">
              <span className="sidebar-text">Settings</span>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
