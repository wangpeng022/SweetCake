import * as types from '../action-types';
import {fetchHlist} from '../../api/home';

export default {
    fetchHlist() {
        return dispatch => {
            fetchHlist().then(sliders => {
                dispatch({
                    type: types.SET_MENU,
                    payload: sliders
                });
            });
        }
    },

}