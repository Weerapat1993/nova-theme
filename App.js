import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/redux/store'
import Routes from './src/routes'
 
const App = () => (
  <Provider store={configureStore()}>
    <Routes />
  </Provider>
)

export default App