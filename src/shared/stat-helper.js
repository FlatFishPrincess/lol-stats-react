import moment from 'moment';

export const convertKda = (kills, deaths, assists) => {
  const kda = (kills + assists)/deaths;
  return isFinite(kda) ? (Number.parseFloat(kda).toFixed(2)+ ":1") : 'Perfect';
}

export const convertTotalKill = (minion, monster) => {
  return minion + monster;
}

export const secondsToMinutes = seconds => Math.floor(seconds / 60) + 'm' + ('0' + Math.floor(seconds % 60)).slice(-2) + 's';

export const convertCSPerMin = (totalKill, duration) => {
  const min = Math.floor(duration / 60)
  const result = totalKill/min;
  return Math.round(result*10)/10;
}

export const timeFromNow = (timestamp) => {
  return moment(timestamp).fromNow();
}

// remove unnecessary workds from queue type
export const convertQueueType = queueType => {
  return queueType.replace(/5v5|3v3|games/g,'');
}