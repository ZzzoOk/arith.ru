import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {signUp} from '../../actions/user';
import Input from '../../utils/Input';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    return (
        <main>
            <h2>Sign Up</h2>

            <Input value={username} setValue={setUsername} type='text' placeholder='Username' />
            <span className='errorAlert hidden'>Username already taken</span>
            <span className='errorAlert hidden'>Only letters and numbers are allowed</span>

            <Input value={email} setValue={setEmail} type='email' placeholder='Email' />
            <span className='errorAlert hidden'>Another account is using this email</span>

            <Input value={password} setValue={setPassword} type='password' placeholder='Password' />
            <span className='errorAlert hidden'>Use from 6 to 15 characters</span>

            <div><span className='button' onClick={() => { signUp(username, email, password); navigate('/login'); }}>Sign Up</span></div>

            <div className='links'><NavLink to='/login'>Log In</NavLink></div>
        </main>
    );
};

export default SignUp;