import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Search from './components/Search'
import Splash from './components/Splash'
import Carousel from './components/Carousel'

import { CAROUSEL, SEARCH } from './constants'

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Splash} />
        </Switch>
        <Route
          exact
          path='/(.+)'
          render={() => (
            <Fragment>
              <Header />
              <Switch>
                <Route path={CAROUSEL} component={Carousel} />
                <Route path={SEARCH} component={Search} />
              </Switch>
            </Fragment>
          )}
        />
      </Fragment>
    </BrowserRouter>
  )
}

export default App
