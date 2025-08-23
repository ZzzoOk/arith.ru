import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signIn } from '../../actions/user';
import Input from '../../utils/Input';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      handleOnClick();
    }
  };

  const handleOnClick = () => {
    dispatch(signIn(username, password));
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/profile');
    }
  });

  return (
    <main>
      <h2>Sign in</h2>

      <Input
        value={username}
        setValue={setUsername}
        type="text"
        placeholder="Username or email"
        onKeyDown={handleKeyDown}
      />

      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Password"
        onKeyDown={handleKeyDown}
      />

      <span className="button" onClick={handleOnClick}>
        Sign in
      </span>

      <div className="links">
        <NavLink to="/signup">Sign up</NavLink>
      </div>
      <div className="links">
        <NavLink to="/reset">Reset password</NavLink>
      </div>
    </main>
  );
};

export default SignIn;
