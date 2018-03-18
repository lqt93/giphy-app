import React from 'react'
import { Route } from 'react-router-dom'
import './MainLayout.scss'
import Header from './Header'

export const MainLayout = ({ component: Component, store, route, ...rest }) => {
  return (
    <Route exact={route.exact} {...rest} render={props => (
      <div className='main-layout'>
        <Header />
        <Component {...props} store={store} />
      </div>
    )} />
  )
}

export default MainLayout
