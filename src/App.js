import React, { Component } from 'react';
import SummonerForm from './components/summoner-form/summoner-form';
import MatchCard from './components/match-card/match-card';
import { connect } from 'react-redux';
import { fetchSummonerByName } from './shared/actions/index';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [], loading: null };
  }

  handleSearchName = name => {
    this.props.fetchSummonerByName(name);
  }

  renderSummonerName = () => {
    const { matches } = this.props;
    return matches[0] && matches[0]["player"]["summonerName"];
  }

  renderLoading = () => {
    return (
      <img className="loading" src={process.env.PUBLIC_URL + `/dragontail-10.3.1/img/global/load01.gif`} alt='loading...' />);
  }

  render() {
    const { matches, loading } = this.props;
    if(loading) return this.renderLoading();
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

const mapDispatchToProps = {
  fetchSummonerByName
}

const mapStateToProps = ({ matches }) => ({
  matches: matches.matches,
  loading: matches.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
