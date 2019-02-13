import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Blog from './components/Blog'
import LandingPage from './components/LandingPage';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/blog' component={Blog} />
    </div>
  </Router>
)
export default App;