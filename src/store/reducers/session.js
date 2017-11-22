import * as types from '../action-types'

let initState={
    user:null,
    success:null,
    error:null,
    code:null
};

export default function (state=initState,action) {
    switch (action.type){
        case types.REGISTER:
            var {success,error}=action.payload;

            return {
                ...state,
                success,error
            };
        case types.LOGIN:
            var {success,error,user}=action.payload;
            return {
                ...state,
                success,
                error,
                user
            };
        case types.VALIDATE:
            let {code,user}=action.payload;
            if(code===0){
                return {...state,user,code}
            }else {
                return {...state,code:1};
            }
        case types.SIGNOUT:
            return {...state,...action.payload};
        default:
            return state;
    }
}