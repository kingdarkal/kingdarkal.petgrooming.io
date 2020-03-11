import React from 'react'
import {Route, Switch} from 'react-router-dom'
import LandingScreen from '../container/news/screens/Landing_screen'
import NewsScreen from '../container/news/screens/News_screen'
import CategoryNewsScreen from '../container/news/screens/CategoryNews_screen'

function GuestNavigation () {
  return (
    <Switch>
      <Route exact path="/" component={LandingScreen}/>
      <Route exact path='/news' component={NewsScreen}/>
      <Route exact path='/sportnews' component={CategoryNewsScreen}/>
    </Switch>
  )
}

export default GuestNavigation
