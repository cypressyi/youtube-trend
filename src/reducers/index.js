import { combineReducers } from 'redux'
import { INIT_DATA } from '../constants/actionTypes'

const trendList = (state = [], action) => {
  switch (action.type) {
    case INIT_DATA:
    {
      return [...action.payload.items]
    }
    default:
    {
      return state
    }
  }
}

const trendApp = combineReducers({
  trendList,
})

export default trendApp
