import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Main from './components/main/Main';
import Leaderboard from './components/leaderboard/Leaderboard';
import Profile from './components/profile/Profile';
import LogIn from './components/login/LogIn';
import SignUp from './components/signup/SignUp';
import { auth } from './actions/user';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <Router>
      <Route exact path='/' component={Main} />
      <Route path='/leaderboard' component={Leaderboard} />
      <Route path='/profile' component={Profile} />
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />
    </Router>
  );
}

export default App;
