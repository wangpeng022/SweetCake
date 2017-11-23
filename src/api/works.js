import {post} from './index';
export function postWorks(data) {
    return post('/works',data);
}