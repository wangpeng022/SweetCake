import * as types from '../action-types'

let initState = {
    id: null,
    message: null,
    dataCourse: {},
    dataCakeLIst: [],
    dataComment: {},
    dataTopic: {},
};

export default function (state = initState, action) {
    switch (action.type) {
        case types.FETCH_DETAIL_LIST:
            //console.log(action.payload);
            let {id, dataCourse, dataCakeLIst, dataComment, dataTopic} = action.payload;
            return {
                id: id,
                dataCourse: {...state.dataCourse, ...dataCourse},
                dataCakeLIst: [...state.dataCakeLIst, ...dataCakeLIst],
                dataComment: {...state.dataComment, ...dataComment},
                dataTopic: {...state.dataTopic, ...dataTopic}
            };
        case types.DELETE_COMMENT:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
