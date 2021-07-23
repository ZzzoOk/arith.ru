import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Main from './main/Main'
import Stats from './stats/Stats'
import Settings from './settings/Settings'

function App() {
  return (
    <Router>
      <Route exact path='/' component={Main} />
      <Route path='/stats' component={Stats} />
      <Route path='/settings' component={Settings} />
    </Router>
  );
}

export default App;
