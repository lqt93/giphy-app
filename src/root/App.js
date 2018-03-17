import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'

// Layouts
import MainLayout from '../layouts/MainLayout'

// Pages
import HomePage from '../pages/Home'


const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    layout: MainLayout,
  }
]

const App = (props) => {
  return (
    <Switch>
      <Route
        render={() => {
          return (
            <div className='app-container'>
              {
                routes.map((route, index) => (
                  <route.layout
                    key={index}
                    path={route.path}
                    component={route.component}
                    route={route} />
                ))
              }
            </div>
          )
        }}
      />
    </Switch>
  )
}

export default App
