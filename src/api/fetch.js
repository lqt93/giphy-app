import axios from 'axios'
import Keys from '../config/keys' 

type fetchOptions = {
  method?: string; // Default: GET
  query?: Object; // URL query for GET method
  data?: string | Object; // Body for POST method
  headers?: Object;
  credentials?: string; // default: TRUE
  url?: string; // API Endpoint
}

const fetchInstance = axios.create({
  baseURL: Keys.api_domain || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
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