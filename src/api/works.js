import {post} from './index';

export function postWorks(data) {
    return post('/works', data);
}

export function postDraft(data) {
    return post('/draft', data);
}
