import * as types from '../action-types'

let initState = {
    comment_count: 0,//评论
    url: "",
    create_time: "",//创建时间
    author: "",//用户昵称
    user_img: "",//用户头像
    works: [],//个人作品
    follows: [],//关注的人
    fans: [],//粉丝
    message: [],//信息
    id: '',//用户ID
    collects: [],//收藏,
    phone: '',//电话
    password: '',//密码
};

export default function (state = initState, action) {
    switch (action.type) {
        case types.POST_WORKS:
            return {
                ...state,
                success, error, code
            };
        case types.GET_WORKS:
            return {
                ...state,
                success, error, code
            };
        case types.FETCH_USER_COLLECT:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}