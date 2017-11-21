import * as types from '../action-types'

let initState={
    user:null,
    success:null,
    error:null
};

export default function (state=initState,action) {
    switch (action.type){
        case types.REGISTER:
            let {success,error}=action.payload;

            return {
                ...state,
                success,error
            };
        default:
            return state;
    }
}