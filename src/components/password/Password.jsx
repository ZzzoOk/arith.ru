import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { password } from '../../actions/user';
import Input from '../../utils/Input';

const Password = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const navigate = useNavigate();

  return (
    <main>
      <h2>New password</h2>

      <Input
        value={newPassword}
        setValue={setNewPassword}
        type="password"
        placeholder="New password"
      />
      <span className="errorAlert hidden">Use from 6 to 15 characters</span>

      <Input
        value={confirm}
        setValue={setConfirm}
        type="password"
        placeholder="Confirm password"
      />
      <span className="errorAlert hidden">Passwords do not match</span>

      <div>
        <span
          className="button"
          onClick={() => {
            password(newPassword);
            navigate('/signin');
          }}
        >
          Change
        </span>
      </div>

      <div className="links">
        <NavLink to="/signin">Sign in</NavLink>
      </div>
    </main>
  );
};

export default Password;
