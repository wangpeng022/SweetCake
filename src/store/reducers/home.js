import * as types from '../action-types';
/**每个页面对应于一个reducer*/
let initState = {
  sliders: [],
  menu: { //存放着主页的内容
    loading: '',//加载状态 加载中
    hasMore: true,//后面是否有更多
    list: [],  //存放着每一项图片的数组
    offset: 0, //偏移量
    limit: 5   //每页的条数
  }
};
export default function (state = initState, action) {
  //每个action必须把携带的数据放在payload里，而且必须是一个对象。
  switch (action.type) {//判断动作的类型
    case types.SET_MENU:
      return {
        ...state,
        lesson: action.payload.id
      }
    case types.FETCH_SLIDERS://当轮播图数据取回来后
      return {
        ...state,
        sliders: action.payload.sliders
      }
    case types.FETCH_MENUS://如果要开始获取课程列表
      return {
        ...state,
        lessons: {
          ...state.lessons,
          loading: '加载中'
        }
      }
    //当获取课程列表结束的时候
    case types.FETCH_MENUS_FINISH:
      return {
        ...state,
        lessons: {
          ...state.lessons,
          loading: '',
          hasMore: action.payload.hasMore,
          //课程列表是不停的累加的
          list: [...state.lessons.list, ...action.payload.list],
          //偏移量当前偏移量加上返回的条数
          offset: state.lessons.offset + action.payload.list.length
        }
      }
    case types.FETCH_MENUS_REFRESH:
      return {
        ...state,
        lessons:{
          ...state.lessons,
          loading: '',//加载状态清空
          hasMore: action.payload.hasMore,
          list:action.payload.list,//列表
          offset:action.payload.list.length
        }
      }
    default:
      return state;
  }
}