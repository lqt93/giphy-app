import { combineReducers } from 'redux'
import authentication from './authentication'
import giphy from './giphy'

const App = combineReducers({
  authentication,
  giphy
})

export default App
