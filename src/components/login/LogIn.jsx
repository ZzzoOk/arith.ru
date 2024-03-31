import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logIn} from '../../actions/user';
import Input from '../../utils/Input';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.keyCode == 13) {
            handleOnClick();
        }
    }

    const handleOnClick = () => {
        dispatch(logIn(username, password));
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/profile');
        }
    })

    return (
        <main>
            <h2>Log In</h2>

            <Input value={username} setValue={setUsername} type='text' placeholder='Username or email' onKeyDown={handleKeyDown} />

            <Input value={password} setValue={setPassword} type='password' placeholder='Password' onKeyDown={handleKeyDown} />

            <span className='button' onClick={handleOnClick}>Log In</span>

            <div className='links'><NavLink to='/resetpassword'>Reset password</NavLink></div>
            <div className='links'><NavLink to='/signup'>Sign Up</NavLink></div>
        </main>
    );
};

export default LogIn;