import axios from "axios";
import { setUser } from "../reducers/userReducer";

export const signUp = async (username, email, password) => {
    try {
        const response = await axios.post('http://api.arith.ru/signup', {
            username,
            email,
            password
        });
        alert(response.data.message);
    } catch (e) {
        alert(e.response.data.message);
    }
}

export const logIn = (username, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://api.arith.ru/login', {
                username,
                password
            });
            dispatch(setUser(response.data.username));
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
        } catch (e) {
            alert(e.response.data.message);
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get('http://api.arith.ru/auth',
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
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