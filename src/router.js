import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Assignment from './pages/Assignment'
import Intro from './pages/Intro'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/intro" component={Intro} />
        <Route path="/assignment" component={Assignment} />
        <Route>
          <Redirect to="/intro" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
