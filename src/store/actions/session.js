import * as types from '../action-types'
import {register,login,validate,signout} from '../../api/session'
import {push} from 'react-router-redux'

export default {
    register(data){

        return dispatch=>{
            register(data).then(payload=>{

                dispatch({
                    type:types.REGISTER,
                    payload
                });
                let {code,error,success}=payload;
                if(code===0){
                    dispatch(push('/login'));
                    alert(success);
                }else {
                    alert(error);
                }
            })
        }
    },

    login(data){
        return dispatch=>{
            login(data).then(payload=>{
                dispatch({
                    type:types.LOGIN,
                    payload
                });
                let {code,error,success}=payload;
                //登录成功则跳到个人中心页
                console.log(code);
                if(code===0){
                    dispatch(push('/person'));
                    alert(success);
                }else {
                    alert(error);
                }
            })
        }
    },

    validate(){
        return dispatch=>{
            validate().then(payload=>{
                dispatch({
                    type:types.VALIDATE,
                    payload
                });
            });

        }
    },
    signout(){

      return dispatch=>{

          signout().then(payload=>{
              dispatch({
                  type:types.SIGNOUT,
                  payload
              })
          });
          let {code}=payload.code;
          if(code===1){
              dispatch(push('/home'))
          }

      }
    },


}