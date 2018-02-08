import { INIT_DATA, FETCH_DATA, SELECT_REGION } from '../constants/actionTypes'

export const onInitData = (data) => (
  {
    type: INIT_DATA,
    payload: data,
  }
)

export const onFetchData = (payload) => (
  {
    type: FETCH_DATA,
    payload,
    cb: (response, dispatch) => dispatch(onInitData(response)),
  }
)

export const onSelectRegion = (payload) => (
  {
    type: SELECT_REGION,
    payload,
  }
)