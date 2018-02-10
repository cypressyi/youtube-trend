import { FETCH_DATA } from '../constants/actionTypes'

const fetchData = (store) => (next) => (action) => {
  let region = action.region || 'tw'
  const API_KEY = 'AIzaSyAuDRqtHLzXE2yz0rAvNnOwy5XzYn1GK3k'
  let apu_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&maxResults=50&chart=mostPopular&key=${API_KEY}&regionCode=${region}`
  
  if (action.type !== FETCH_DATA) return next(action)
  fetch( apu_url, {
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
