import uuidv1 from 'uuid/v1';
const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)

export const publishPost = (title, body, author, category) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: uuidv1(),
            timestamp: Date.now(),
            title,
            body,
            author,
            category,
        })
    }).then(res => res.json())

export const editPost = (id, title, body) =>
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id,
            title,
            body,
        })
    })

export const getPosts = () =>
    fetch(`${api}/posts`, {headers})
        .then(res => res.json())

export const getPost = (id) =>
    fetch(`${api}/posts/${id}`, {headers})
        .then(res => res.json())


export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`, {
      method: 'DELETE', headers
    }).then(res => res.json())

export const voteOnPost = (id, voteType) =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            option: voteType
        })
    }).then(res => res.json())

export const createCommentForPost = (postId, body, author) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: uuidv1(),
            timestamp: Date.now(),
            parentId: postId,
            body,
            author,
        })
    }).then(res => res.json())


export const editComment = (id, body) =>
    fetch(`${api}/comments/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id,
            body,
        })
    }).then(res => res.json())

export const getCommentsForPost = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())

export const deleteComment = (id) =>
    fetch(`${api}/comments/${id}`, {
        method: 'DELETE', headers
    }).then(res => res.json())

export const voteOnComment = (id, voteType) =>
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            option: voteType
        })
    }).then(res => res.json())

