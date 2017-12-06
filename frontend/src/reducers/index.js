import { combineReducers } from 'redux'
import {
    RECEIVE_POSTS,
    RECEIVE_CATEGORIES,
    DELETE_POST,
} from '../actions';

function comments(state = { byIds: {}, allIds: []}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function posts(state = { byIds: {}, allIds: []}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            const { posts } = action;
            let postMap = {};
            let postIds = [];
            posts.forEach((post) => {
               postMap[post.id] = post
                postIds.push(post.id);
            });

            return {
                byIds: postMap,
                allIds: postIds
            };
        case DELETE_POST:
            const {id} = action;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        deleted: true,
                    }
                },
            }
        default:
            return state
    }
}

function categories(state = [], action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            const { categories } = action;
            return categories
        default:
            return state
    }
}

export default combineReducers({
    comments,
    posts,
    categories,
})