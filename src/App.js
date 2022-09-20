import React from 'react'
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Route from './navigation/Route'

const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  )
}

export default App

