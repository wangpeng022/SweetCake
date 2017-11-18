import {get} from './index';
//向后台请求主页的数据
export function fetchHlist(){
  return get('/hlist');
}
