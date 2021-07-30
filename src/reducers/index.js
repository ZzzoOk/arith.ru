import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import leaderboardReducer from "./leaderboardReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    leaderboard: leaderboardReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));