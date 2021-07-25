import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './main/Main'
import Leaderboard from './leaderboard/Leaderboard'
import Profile from './profile/Profile'

function App() {
  return (
    <Router>
      <Route exact path='/' component={Main} />
      <Route path='/leaderboard' component={Leaderboard} />
      <Route path='/profile' component={Profile} />
    </Router>
  );
}

export default App;
