import React from 'react'
import { Route } from 'react-router'
import App from './views/App'

export default (store) => (
  <Route>
    <Route path='/' component={App} />
  </Route>
)
