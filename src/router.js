import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Landing from './templates/custom/tufirma'
import NotFound from './pages/NotFound'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/:name/landing">
          <Landing />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}