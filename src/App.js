import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { auth } from './actions/user';
import Leaderboard from './components/leaderboard/Leaderboard';
import Main from './components/main/Main';
import Menu from './components/menu/Menu';
import Profile from './components/profile/Profile';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';
import Reset from './components/reset/Reset';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    dispatch(auth());
  });

  return (
    <Router>
      <header>
        <Menu />
      </header>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        {isAuth
          ? <Route path="/profile" element={<Profile />} />
          : <>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/reset" element={<Reset />} />
            </>}
      </Routes>
      <footer></footer>
    </Router>
  );
}

export default App;
