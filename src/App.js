import React, { Component } from 'react';
import SummonerForm from './summoner-form/summoner-form';
import MatchCard from './match-card/match-card';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] };
  }

  handleSearchName = async (name) => {
    const CREATE_LOCATION_URL = `https://lol-stats-backend.herokuapp.com/api/summoner/${name}`;
    const result = await fetch(CREATE_LOCATION_URL);
    const matches =  await result.json();
    this.setState({ matches });
  }

  renderSummonerName = () => {
    const { matches } = this.state;
    return matches[0] && matches[0]["player"]["summonerName"];
  }

  render() {
    const { matches } = this.state;
    return (
      <div className="root">
        <h1>League Stat</h1>
        <div>
          <SummonerForm handleSearchName={this.handleSearchName} />
          <h2>{matches && this.renderSummonerName()}</h2>
          {matches && matches.map((match, index) => (
            <MatchCard key={index} match={match} />
          ))}
        </div>
      </div>
    );
  }
}
