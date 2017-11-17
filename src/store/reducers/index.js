import {combineReducers} from 'redux';
import home from './home';
import {routerReducer} from 'react-router-redux';
export default combineReducers({
    router: routerReducer,
    home,
})
