import React, { Component } from 'react';

/**
 * Our login page
 * Has a login button that hit's the login url
 */
export default class Splash extends Component {
  commenceOAuth = () => { window.location.assign('https://elplay.herokuapp.com/login') }

  render() {
    return (
      <div className="splash">
        <h2>Welcome to elplay! Please log into Spotify to access the main interface.</h2>
        <br></br>
        <button onClick={this.commenceOAuth}>Log Into Spotify</button>
      </div>
    );
  }
}
