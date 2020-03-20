import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { SideDrawer } from './components'

export const App = () => (
  <Router>
    <SideDrawer />
    <Route path="/">
      <p>Supermarket Frontend</p>
    </Route>
  </Router>
)
