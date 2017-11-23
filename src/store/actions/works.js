import * as types from '../action-types'
import {postWorks,postDraft} from '../../api/works'
import {push} from 'react-router-redux'

export default {
    postWorks(data) {
        return dispatch => {
            postWorks(data).then(payload => {
                dispatch({
                    type: types.POST_WORKS,
                    payload
                });
            })
        }
    },
    postDraft(data) {
        return dispatch => {
            postDraft(data).then(payload => {
                dispatch({
                    type: types.POST_DRAFT,
                    payload
                });
            })
        }
    }
}

