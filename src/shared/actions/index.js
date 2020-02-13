export const fetchSummonerByName = (name) => {
  return { type: FETCH_SUMMONER, name: name }
}

export const FETCH_SUMMONER = 'FETCH_SUMMONER'

export const FETCH_SUMMONER_SUCCESS = 'FETCH_SUMMONER_SUCCESS'

export const FETCH_SUMMONER_FAIL = 'FETCH_SUMMONER_FAIL';