import { combineReducers } from 'redux';
import {
    RECEIVE_POSTS,
    RECEIVE_CATEGORIES,
    RECEIVE_COMMENTS,
    DELETE_COMMENT,
    DELETE_POST,
    UPDATE_COMMENT,
    UPDATE_POST,
    UPDATE_POST_SORT,
} from '../actions';
import {
    POST_SORT
} from '../constants';

function comments(state = { byIds: {}, allIds: []}, action) {
    switch (action.type) {
        case RECEIVE_COMMENTS:
            const { comments } = action;
            let commentMap = {};
            let commentIds = [];
            comments.forEach((comment) => {
                commentMap[comment.id] = comment;
                commentIds.push(comment.id);
            });

            return {
                byIds: commentMap,
                allIds: commentIds
            };
        case DELETE_COMMENT:
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

        case UPDATE_COMMENT:
            const { comment } = action;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [comment.id]: {
                        ...state.byIds[comment.id],
                        ...comment
                    }
                }
            }
        case DELETE_POST:
            const postId = action.id;
            const updatedComments = state.allIds.map((id) => state.byIds[id]).filter(
                (comment) => comment.parentId === postId
            ).map(
                (comment) => ({
                    ...comment,
                    parentDeleted: true,
                })
            )

            let updatedCommentMap = {};
            updatedComments.forEach((comment) => {
                updatedCommentMap[comment.id] = comment;
            });

            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    ...updatedCommentMap,
                }
            }

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
                postMap[post.id] = post;
                postIds.push(post.id);
            });

            return {
                byIds: {
                    ...state.byIds,
                    ...postMap
                },
                allIds: [...new Set(postIds.concat(...state.allIds))]
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
        case UPDATE_POST:
            const { post } = action;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [post.id]: {
                        ...state.byIds[post.id],
                        ...post
                    }
                }
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

function postSort(state = POST_SORT.OLDEST_FIRST, action) {
    switch (action.type) {
        case UPDATE_POST_SORT:
            const { sort } = action;
            return sort;
        default:
            return state
    }

}

export default combineReducers({
    comments,
    posts,
    categories,
    postSort,
})