import {post,get} from './index';

export function postWorks(data) {
    return post('/works', data);
}

export function postDraft(data) {
    return post('/draft', data);
}

export function getUser(index) {
    return get(`/works?id=${index}`);
}