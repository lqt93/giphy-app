import { combineReducers } from 'redux'
import authentication from './authentication'
import giphy from './giphy'
import modal from './modal'

const App = combineReducers({
  authentication,
  giphy,
  modal
})

export default App
