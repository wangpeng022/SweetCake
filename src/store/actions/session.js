import * as types from '../action-types'
import {register} from '../../api/session'
import {push} from 'react-router-redux'

export default {
    register(data){
        debugger
        return dispatch=>{
            register(data).then(payload=>{

                dispatch({
                    type:types.REGISTER,
                    payload
                });
                let {code}=payload;
                if(code===0){
                    dispatch(push('/login'));
                }
            })
        }
    }
}