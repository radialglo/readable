import * as API  from '../utils/api';
export const RECEIVE_POSTS = 'LOAD_ALL_POSTS';
export const RECEIVE_CATEGORIES = 'LOAD_CATEGORIES';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';


export function createPost() {
    return {
        type: CREATE_POST
    }
}


export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}


export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export const fetchPosts = () =>  dispatch => (
    API.getPosts().then(posts =>
        dispatch(receivePosts(posts))
    )
);

export const fetchCategories = () =>  dispatch => (
    API.getCategories().then(categories =>
        dispatch(receiveCategories(categories))
    )
);

export const deletePost = (id) => dispatch => {
    API.deletePost(id)

    // let's make an optimistic update
    dispatch({
        type: DELETE_POST,
        id
    })
}