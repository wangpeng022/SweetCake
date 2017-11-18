import * as types from '../action-types';

/**每个页面对应于一个reducer*/
let initState = {
    //存放着主页的内容
    loading: '',//加载状态 加载中
    hasMore: true,//后面是否有更多
    sliders: [],
    list: [],  //存放着每一项图片的数组
    offset: 0, //偏移量
    limit: 5   //每页的条数

};
export default function (state = initState, action) {
    //每个action必须把携带的数据放在payload里，而且必须是一个对象。
    switch (action.type) {//判断动作的类型
        case types.SET_MENU:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}