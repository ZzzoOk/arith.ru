import React from 'react';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styles from './SignUp.module.css';
import Menu from '../menu/Menu'
import Input from '../../utils/Input';
import { signUp } from '../../actions/user';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    return (
        <>
            <header>
                <Menu />
            </header>
            <main id={styles.main}>
                <h2>Sign Up</h2>
                <Input value={username} setValue={setUsername} type='text' placeholder='Username' />
                <span className='errorAlert hidden'>Username already taken</span>
                <span className='errorAlert hidden'>Only letters and numbers are allowed</span>
                <Input value={email} setValue={setEmail} type='email' placeholder='Email' />
                <span className='errorAlert hidden'>Another account is using this email</span>
                <Input value={password} setValue={setPassword} type='password' placeholder='Password' />
                <span className='errorAlert hidden'>Use from 6 to 15 characters</span>
                <div><span className='button' onClick={() => { signUp(username, email, password); history.push('/login'); }}>Sign Up</span></div>
            </main>
            <footer>
                <div className='links'><NavLink to='/login'>Log In</NavLink></div>
            </footer>
        </>
    );
};

export default SignUp;