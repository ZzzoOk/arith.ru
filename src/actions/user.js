import axios from "axios";
import { setUser } from "../reducers/userReducer";

export const signUp = async (username, email, password) => {
    await axios.post('https://arith-ru.herokuapp.com/signup', {
        username,
        email,
        password
    }).then(res => {
        alert(res.data.message);
    }).catch(err => {
        alert(err.response.data.message);
    });
}

export const logIn = (username, password) => {
    return async dispatch => {
        await axios.post('https://arith-ru.herokuapp.com/login', {
            username,
            password
        }).then(res => {
            dispatch(setUser(res.data.username));
            localStorage.setItem('token', res.data.token);
            window.location.reload();
        }).catch(() => {
            alert('Failed to log in');
        });
    }
}

export const auth = () => {
    return async dispatch => {
        await axios.get('https://arith-ru.herokuapp.com/auth',
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        ).then(res => {
            dispatch(setUser(res.data.username));
            localStorage.setItem('token', res.data.token);
        }).catch(err => {
            //console.log(err.response.data);
            localStorage.removeItem('token');
        });
    }
}

export const getResults = async (questionCount) => {
    await axios.get('https://arith-ru.herokuapp.com/get', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        params: { questionCount }
    }).then(res => {
        localStorage.setItem('results' + questionCount, JSON.stringify(res.data));
    }).catch(err => {
        //console.log(err.response.data);
    });
}

export const setResult = async (date, result, questionCount) => {
    await axios.post('https://arith-ru.herokuapp.com/set', {
        date,
        result,
        questionCount
    }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).catch(err => {
        //console.log(err.response.data);
    });
}

export const getLeaders = async (questionCount) => {
    await axios.get('https://arith-ru.herokuapp.com/leaders', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        params: { questionCount }
    }
    ).then(res => {
        localStorage.setItem('leaderboard' + questionCount, JSON.stringify({ leaders: res.data, date: new Date() }));
    }).catch(err => {
        //console.log(err.response.data);
    });
}
