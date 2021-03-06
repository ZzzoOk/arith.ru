const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

const defaultState = {
    username: 'anon',
    isAuth: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                username: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.clear();
            return {
                username: 'anon',
                isAuth: false
            }
        default:
            return state;
    }
}

export const setUser = user => ({ type: SET_USER, payload: user });
export const logout = () => ({ type: LOGOUT });