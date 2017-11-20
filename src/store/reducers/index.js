import {combineReducers} from 'redux';
import home from './home';
import lessons from './lessons'
import {routerReducer} from 'react-router-redux';
export default combineReducers({
    router: routerReducer,
    home,
    lessons,
})
