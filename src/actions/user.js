import axios from "axios";
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

export const getResults = async (questionCount) => {
    try {
        const response = await axios.get('https://api.arith.ru/get', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            params: { questionCount }
        }
        );
        localStorage.setItem('results' + questionCount, JSON.stringify(response.data));
    } catch (e) {
        console.log(e);
    }
}

export const setResult = async (date, result, questionCount) => {
    try {
        const response = await axios.post('https://api.arith.ru/set', {
            date,
            result,
            questionCount
        }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    } catch (e) {
        console.log(e);
    }
}

export const getLeaders = async (questionCount) => {
    try {
        const response = await axios.get('https://api.arith.ru/leaders', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            params: { questionCount }
        }
        );
        localStorage.setItem('leaderboard' + questionCount, JSON.stringify({ leaders: response.data, date: new Date }));
    } catch (e) {
        console.log(e);
    }
}
