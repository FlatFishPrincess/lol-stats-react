import React from 'react'
import './match-card.css';
import { convertKda, convertTotalKill, convertCSPerMin, secondsToMinutes, timeFromNow, convertQueueType } from '../shared/stat-helper';

const MatchCard = ({ match }) => {
  const { stats, gameDuration, gameCreation, queueTypeName, championName, items, spell1Name, spell2Name, primaryPerkIcon, secondaryPerkIcon } = match;
  const { win, kills, deaths, assists, champLevel, totalMinionsKilled, neutralMinionsKilled } = stats;
  const totalKill = convertTotalKill(totalMinionsKilled, neutralMinionsKilled);
  const CSPerMin = convertCSPerMin(totalKill, gameDuration);

  return (
    <div className={`card-wrapper ${win ? 'victory' : 'defeat'}`}>
      <div className="flex">
        <div className="flex-column-center">
          <strong>{convertQueueType(queueTypeName)}</strong>
          <span>{timeFromNow(gameCreation)}</span>
          <div className={`${win ? 'victory' : 'defeat'}-bar`}/>
          <strong className={`${win ? 'victory-text' : 'defeat-text'}`}>{win ? 'Victory': 'Defeat'}</strong>
          <span>{secondsToMinutes(gameDuration)}</span>
        </div>
        <div className="flex-column-center">
          <div className="flex">
            <div>
              <img className="champion-img" src={process.env.PUBLIC_URL + `/dragontail-10.3.1/img/champion/tiles/${championName}_0.jpg`} alt={`${championName} img`} />
            </div>
            <div className="flex">
              <div className="flex-column">
                <img className="spell-img" src={process.env.PUBLIC_URL + `/dragontail-10.3.1/10.3.1/img/spell/${spell1Name}.png`} alt={`${spell1Name} img`} /> 
                <img className="spell-img" src={process.env.PUBLIC_URL + `/dragontail-10.3.1/10.3.1/img/spell/${spell2Name}.png`} alt={`${spell2Name} img`} /> 
              </div>
              <div className="flex-column">
                <img className="perk-img" src={process.env.PUBLIC_URL + `/dragontail-10.3.1/img/${primaryPerkIcon}`} alt={`${championName} img`} /> 
                <img className="perk-img" src={process.env.PUBLIC_URL + `/dragontail-10.3.1/img/${secondaryPerkIcon}`} alt={`${championName} img`} /> 
              </div>
            </div>
          </div>
          <div className="champion-name">
            {championName}
          </div>
        </div>
      </div>
      <div className="flex-column-center">
        <div className="kda">
          <strong className="kda-text">{kills}</strong>
            /
          <strong className="kda-text defeat-text">{deaths}</strong>
            /
          <strong className="kda-text">{assists}</strong>
        </div>
        <strong>{convertKda(kills, deaths, assists)} <span>KDA</span></strong>
      </div>
      <div className="stat">
        <div>Level{champLevel}</div>
        <div>{totalKill} ({CSPerMin}) CS</div>
      </div>
      <div>
        {items.map(((item, index) => item && <div key={index}>{item}</div>))}
      </div>
    </div>
  )
}

export default MatchCard;