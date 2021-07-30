const defaultState = {
    leaders: []
}

export default function leaderboardReducer(state = defaultState, action) {
    return {
        leaders: action.payload
    }
}

export const setLeaders = leaders => ({ payload: leaders });