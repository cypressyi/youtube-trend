import { FETCH_DATA } from '../constants/actionTypes'

const fetchData = (store) => (next) => (action) => {
  
  const REGION = action.region
  const API_KEY = 'AIzaSyAuDRqtHLzXE2yz0rAvNnOwy5XzYn1GK3k'
  const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&maxResults=50&chart=mostPopular&key=${API_KEY}&regionCode=${REGION}`
  
  if (action.type !== FETCH_DATA) return next(action)
  fetch( API_URL, {
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
