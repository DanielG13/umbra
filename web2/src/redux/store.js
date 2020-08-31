import { createStore, combineReducers } from "redux";
import fullPage from './reducers/fullPage'
import asideStateToggle from './reducers/asideStateToggle'
import authReducer from './reducers/auth.reducer'
import flashMessages from './reducers/flashMessages'

const reducer = combineReducers({
  authReducer,
    flashMessages,
    fullPage,
    asideStateToggle
});


export default reducer;
