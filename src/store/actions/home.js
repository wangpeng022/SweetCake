import * as types from '../action-types';
import {getHList} from '../../api/home';

export default {
    getHList() {//获取首页轮播图&&列表
        return dispatch => {
            getHList().then( payload=> {
                dispatch({
                    type: types.GET_HLIST,
                    payload
                });
            });
        }
    },

}