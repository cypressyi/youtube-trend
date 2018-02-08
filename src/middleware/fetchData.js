import { FETCH_DATA } from '../constants/actionTypes'

const fetchData = (store) => (next) => (action) => {
  if (action.type !== FETCH_DATA) return next(action)
  fetch('http://localhost:3003/regions', {
    method: 'GET'
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
  })
  .then((data) => {
    return action.cb(data, store.dispatch)
  })
  .catch((error) => { throw new Error(error.message)})
}

export default fetchData
