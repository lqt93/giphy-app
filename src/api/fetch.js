import axios from 'axios'

type fetchOptions = {
  method?: string; // Default: GET
  query?: Object; // URL query for GET method
  data?: string | Object; // Body for POST method
  headers?: Object;
  credentials?: string; // default: TRUE
  url?: string; // API Endpoint
}

const fetchInstance = axios.create({
  baseURL: 'https://api.giphy.com/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

function _fetch (url: string, options: fetchOptions = {}) {
  var esc = encodeURIComponent
  if (options.query) {
    var queryString = Object.keys(options.query)
        .map(k => esc(k) + '=' + esc(options.query[k]))
        .join('&')
    url = url + '?' + queryString
  }
  options.url = url

  return fetchInstance(options)
}

export default _fetch