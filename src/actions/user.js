import axios from "axios";
import { setLeaders } from "../reducers/leaderboardReducer";
import { setUser } from "../reducers/userReducer";

export const signUp = async (username, email, password) => {
    try {
        const response = await axios.post('https://api.arith.ru/signup', {
            username,
            email,
            password
        });
        alert(response.data.message);
    } catch (e) {
        //alert(e.response.data.message);
    }
}

export const logIn = (username, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('https://api.arith.ru/login', {
                username,
                password
            });
            dispatch(setUser(response.data.username));
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
        } catch (e) {
            //alert(e.response.data.message);
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get('https://api.arith.ru/auth',
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            dispatch(setUser(response.data.username));
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
        } catch (e) {
            console.log(e);
            localStorage.removeItem('token');
        }
    }
}

export const setResult = async (date, result) => {
    try {
        const response = await axios.post('https://api.arith.ru/set', {
            date,
            result
        }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        alert(response.data.message);
    } catch (e) {
        console.log(e);
    }
}

export const leaderboard = () => {
    return async dispatch => {
        try {
            const response = await axios.get('https://api.arith.ru/leaderboard',
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            debugger
            dispatch(setLeaders(response.data));
            //localStorage.setItem('token', response.data;
            console.log(response.data);
        } catch (e) {
            console.log(e);
            localStorage.removeItem('token');
        }
    }
}
