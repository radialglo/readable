import * as API  from '../utils/api';
import { VOTE_TYPE } from "../constants";

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_CATEGORIES = 'LOAD_CATEGORIES';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_POST_SORT = 'UPDATE_POST_SORT';


export const createPost = (title, body, author, category) => dispatch => {
    API.publishPost(title, body, author, category).then(post =>
        dispatch({
            type: CREATE_POST,
            post
        })
    );
}

export const editPost = (id, title, body) => dispatch => {
    API.editPost(id, title, body).then(post =>
        dispatch(updatePost(post))
    );
}


export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export function updatePost(post) {
    return {
        type: UPDATE_POST,
        post
    }
}

export function updatePostSort(sort) {
    return {
        type: UPDATE_POST_SORT,
        sort
    }
}


export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export function receiveComments(comments) {
    return {
        type:  RECEIVE_COMMENTS,
        comments,

    }
}

export function updateComment(comment) {
    return {
        type: UPDATE_COMMENT,
        comment,
    }
}

export const fetchPosts = () =>  dispatch => (
    API.getPosts().then(posts =>
        dispatch(receivePosts(posts))
    )
);

export const fetchPost = (postId) => dispatch => (
    API.getPost(postId).then(post =>
        dispatch(receivePosts([post]))
    )
)

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

export const voteOnPost = (id, voteType) => dispatch => {
    API.voteOnPost(id, voteType).then(post => {
        dispatch(updatePost(post))
    })
}

export const upVoteOnPost = (id) => voteOnPost(id, VOTE_TYPE.UP_VOTE)
export const downVoteOnPost = (id) => voteOnPost(id, VOTE_TYPE.DOWN_VOTE)

export const createCommentForPost = (postId, body, author) => dispatch => {
    API.createCommentForPost(postId, body, author).then(
        comment => dispatch({
            type: CREATE_COMMENT,
            comment,
        })
    )
}

export const fetchCommentsForPost = (postId) => dispatch => {
    API.getCommentsForPost(postId).then(comments =>
        dispatch(receiveComments(comments))
    )
}

export const deleteComment = (id, parentId) => dispatch => {
    API.deleteComment(id).then(
        dispatch({
            type: DELETE_COMMENT,
            id,
            parentId,
        })
    )
}

export const voteOnComment = (id, voteType) => dispatch => {
    API.voteOnComment(id, voteType).then(comment => {
        dispatch(updateComment(comment))
    })
}

export const upVoteOnComment = (id) => voteOnComment(id, VOTE_TYPE.UP_VOTE)
export const downVoteOnComment = (id) => voteOnComment(id, VOTE_TYPE.DOWN_VOTE)