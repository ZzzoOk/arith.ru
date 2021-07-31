import axios from "axios";
import { setUser } from "../reducers/userReducer";
import { setLeaders } from "../reducers/leaderboardReducer";

export const signUp = async (username, email, password) => {
    try {
        const response = await axios.post('https://api.arith.ru/signup', {
            username,
            email,
            password
        });
        alert(response.data.message);
    } catch (e) {
        console.log(e);
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
        } catch (e) {
            console.log(e);
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
        } catch (e) {
            console.log(e);
            localStorage.removeItem('token');
        }
    }
}

export const setResult = async (date, result, maxCount) => {
    try {
        const response = await axios.post('https://api.arith.ru/set', {
            date,
            result,
            maxCount
        }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    } catch (e) {
        console.log(e);
    }
}

export const getLeaders = (maxCount) => {
    return async dispatch => {
        try {
            const response = await axios.get('https://api.arith.ru/leaders',
                { maxCount },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            dispatch(setLeaders(response.data));
            localStorage.setItem('leaderboard' + maxCount, JSON.stringify({ leaders: response.data, date: new Date }));
        } catch (e) {
            console.log(e);
        }
    }
}
