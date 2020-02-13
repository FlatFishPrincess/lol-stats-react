import React, { Component } from 'react'
import './summoner-form.css';

export default class SummonerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { summonerName: '' };
  }

  keyPressed = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const { summonerName } = this.state;
      this.props.handleSearchName(summonerName);
    } 
  }

  handleChange = (event) => {
    this.setState({ summonerName: event.target.value});
  }

  render() {
    const { summonerName } = this.state;
    return (
      <form className='form-wrapper' onSubmit={this.onSubmitSummonerName}>
        <input
          placeholder='enter summoner name'
          onChange={this.handleChange} 
          onKeyPress={this.keyPressed}
          value={summonerName}
        />
      </form>
    )
  }
}
