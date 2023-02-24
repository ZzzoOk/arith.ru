import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
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
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route path='/leaderboard' element={<Leaderboard/>} />
        {isAuth ?
          <Route path='/profile' element={<Profile/>} />
          :
          <>
            <Route path='/login' element={<LogIn/>} />
            <Route path='/signup' element={<SignUp/>} />
          </>
        }
      </Routes>
      <footer>
      </footer>
    </Router>
  );
}

export default App;
