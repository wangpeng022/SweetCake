import {post} from './index';

export function fetchDetailList(index) {
    return post('/detail', {index})
}

export function fetchUserCollect(data) {
    return post('/collect', data)
}

export function delComment(data) {
    return post('/delcomment', data)
}