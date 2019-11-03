import React from 'react';
import logo from '../assets/images/logo.svg'; //nba logo parsed from nba website

export class TopNavBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a className="website" href="https://stats.nba.com" >NBA STATS</a>
            </header>
        );
    }
}
