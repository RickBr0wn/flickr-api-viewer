import React from 'react'

import Header from './components/Header'
import Search from './components/Search'

const App = () =>
  (
  <div>
    <Header />
    <div className="container">
      <Search />
    </div>
  </div>
  )

export default App