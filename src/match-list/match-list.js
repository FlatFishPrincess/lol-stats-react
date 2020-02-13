import React, { Component } from 'react'
import MatchCard from '../match-card/match-card';

export default class MatchList extends Component {
  constructor(props) {
    super(props);
    console.log('matches in match list?',props.matches);
    this.state = { matches: props.matches };
  }

  render() {
    return (
      <div>
        {/* {matches && matches.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))} */}
      </div>
    )
  }
}
