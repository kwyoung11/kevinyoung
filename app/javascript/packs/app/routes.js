import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Blog from './components/Blog';
import BlogEntry from './components/BlogEntry';
import LandingPage from './components/LandingPage';
import Portfolio from './components/Portfolio';
import PortfolioEntry from './components/PortfolioEntry';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/blog/:id' component={BlogEntry} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/portfolio/:id' component={PortfolioEntry} />
    </div>
  </Router>
)
export default App;