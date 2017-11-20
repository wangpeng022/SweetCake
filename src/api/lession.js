import {get} from './index';
export function fetchLesson(){
    return get('/lesson');
}
