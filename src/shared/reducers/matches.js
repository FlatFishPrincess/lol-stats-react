import { FETCH_SUMMONER, FETCH_SUMMONER_SUCCESS } from '../actions/index';

const matches = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUMMONER:
      return {
        ...state,
        name: action.name,
        loading: true
      };
    case FETCH_SUMMONER_SUCCESS:
      return {
        ...state,
        loading: false,
        matches: action.matches
      };
    default:
      return state;
  }
}

export default matches
