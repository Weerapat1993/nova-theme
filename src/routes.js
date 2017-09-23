import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import {
  HomeScene,
  LoginScene,
  TabExample,
} from './scenes'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={HomeScene} hideNavBar />
      <Scene key="login" component={LoginScene} hideNavBar />
      <Scene key='tabExample' component={TabExample} hideNavBar />
    </Scene>
  </Router>
)

export default Routes
