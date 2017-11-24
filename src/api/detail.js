import {post} from './index';

export function fetchDetailList(index){
    return post('/detail',{index})
}
export function fetchUserCollect(id){
    return post('/collect',{id})
}