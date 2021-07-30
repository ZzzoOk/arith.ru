const SET_LEADERBOARD = 'SET_LEADERBOARD';

const defaultState = {
    leaders: []
}

export default function leaderboardReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_LEADERBOARD:
            return {
                leaders: action.payload
            }
        default:
            return state;
    }
}

export const setLeaders = leaders => ({ type: 'SET_LEADERBOARD', payload: leaders });