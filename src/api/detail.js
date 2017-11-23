import {post} from './index';

export function fetchDetailList(index){
    return post('/detail',{index})
}
