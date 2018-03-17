import React from 'react'
import { Route } from 'react-router-dom'
import './MainLayout.scss'


export const MainLayout = ({ component: Component, store, route, ...rest }) => {
  return (
    <Route exact={route.exact} {...rest} render={props => (
      <div className='main-layout'>
        <Component {...props} store={store} />
      </div>
    )} />
  )
}

export default MainLayout
