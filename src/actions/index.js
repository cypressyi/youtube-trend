import { INIT_DATA, FETCH_DATA } from '../constants/actionTypes'

export const onInitData = (data) => (
  {
    type: INIT_DATA,
    payload: data,
  }
)

export const onFetchData = (region) => (
  {
    type: FETCH_DATA,
    region,
    cb: (response, dispatch) => dispatch(onInitData(response)),
  }
)
