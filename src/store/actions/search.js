import * as types from '../action-types';
import {searchFood, searchIndex} from '../../api/search'

export default {
    searchFood(data) {
        return dispatch => {
            searchFood(data).then(payload => {
                console.log(payload);
                setTimeout(() => {
                    dispatch({
                        type: types.FETCH_SEARCH,
                        payload
                    }, 2000)
                })
            })
        }
    },
    searchIndex(index) {
        return dispatch => {
            searchIndex(index).then(payload => {
                setTimeout(() => {
                    console.log(payload);
                    dispatch({
                        type: types.FETCH_CLASSIFY,
                        payload
                    }, 8000)
                })
            })
        }
    }
}