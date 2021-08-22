import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './components/menu/Menu'
import Main from './components/main/Main';
import Leaderboard from './components/leaderboard/Leaderboard';
import Profile from './components/profile/Profile';
import SignUp from './components/signup/SignUp';
import LogIn from './components/login/LogIn';
import { auth } from './actions/user';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  });

  return (
    <Router>
      <header>
        <Menu />
      </header>
      <Route exact path='/' component={Main} />
      <Route path='/leaderboard' component={Leaderboard} />
      {isAuth ?
        <Route path='/profile' component={Profile} />
        :
        <>
          <Route path='/login' component={LogIn} />
          <Route path='/signup' component={SignUp} />
        </>
      }
      <footer>
      </footer>
    </Router>
  );
}

export default App;
