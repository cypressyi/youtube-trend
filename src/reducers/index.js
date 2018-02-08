import { combineReducers } from 'redux'
import { INIT_DATA, SELECT_REGION } from '../constants/actionTypes'

const trendList = (state = [], action) => {
  switch (action.type) {
    case INIT_DATA:
    {
      return [...action.payload]
    }
    default:
    {
      return state
    }
  }
}

const regionOption = (state = { region: 'TW' }, action) => {
  switch (action.type) {
    case SELECT_REGION:
    {
      return { region: action.payload.region }
    }
    default:
      return state
  }
}

const trendApp = combineReducers({
  trendList,
  regionOption,
})

export default trendApp
