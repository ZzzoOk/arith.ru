import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signUp } from '../../actions/user';
import Input from '../../utils/Input';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  return (
    <main>
      <h2>Sign up</h2>

      <Input
        value={username}
        setValue={setUsername}
        type="text"
        placeholder="Username"
        required
      />
      <span className="errorAlert hidden">Username already taken</span>
      <span className="errorAlert hidden">
        Only letters and numbers are allowed
      </span>

      <Input
        value={email}
        setValue={setEmail}
        type="email"
        placeholder="Email"
        required
      />
      <span className="errorAlert hidden">
        Another account is using this email
      </span>

      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Password"
        required
      />
      <span className="errorAlert hidden">Use from 6 to 15 characters</span>

      <div>
        <span
          className="button"
          onClick={() => {
            signUp(username, email, password);
            navigate('/signin');
          }}
        >
          Sign up
        </span>
      </div>

      <div className="links">
        <NavLink to="/signin">Sign in</NavLink>
      </div>
      <div className="links">
        <NavLink to="/reset">Reset password</NavLink>
      </div>
    </main>
  );
};

export default SignUp;
