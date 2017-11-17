import {post, get} from './index';


//注册
export function signUp(data) {
    return post('/signup', data);
}

//登录
export function login(data) {
    return post('/login', data);
}

export function validate() {
    return get('/validate');
}