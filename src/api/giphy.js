import fetch from './fetch'

function getTrendingGifs (query) {
  const url = '/gifs/trending'
  const options = {
    method: 'GET',
    query: {
      ...query,
      api_key: 'bQBuO8uOs5nBXyonzTLg54hPWoYyuZVL',
      rating: 'G'
    }
  }
  return fetch(url, options)
}

export default {
  getTrendingGifs
}