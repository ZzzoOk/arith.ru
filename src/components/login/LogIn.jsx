import React from 'react';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './LogIn.module.css';
import Menu from '../menu/Menu'
import Input from '../../utils/Input';
import { logIn } from '../../actions/user';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <header>
                <Menu />
            </header>
            <main id={styles.main}>
                <h2>Log In</h2>
                <Input value={username} setValue={setUsername} type='text' placeholder='Username or email' />
                <Input value={password} setValue={setPassword} type='password' placeholder='Password' />
                <span className='button' onClick={() => { dispatch(logIn(username, password)); history.push('/profile'); }}>Log In</span>
            </main>
            <footer>
                <div className='links'><NavLink to='/resetpassword'>Reset password</NavLink></div>
                <div className='links'><NavLink to='/signup'>Sign Up</NavLink></div>
            </footer>
        </>
    );
};

export default LogIn;