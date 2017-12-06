export const ROUTES = {
    ROOT: '/',
    CATEGORY: '/:category',
    POST_DETAIL: '/:category/:post_id',
    CREATE_POST: '/create',
    EDIT_POST: '/edit/:post_id',
};

export const VOTE_TYPE = {
    UP_VOTE: 'upVote',
    DOWN_VOTE: 'downVote',
}

export const POST_SORT = {
    NEWEST_FIRST: 'NEWEST_FIRST',
    OLDEST_FIRST: 'OLDEST_FIRST',
    HIGHEST_VOTE_SCORE_FIRST: 'HIGHEST_VOTE_SCORE_FIRST',
    LOWEST_VOTE_SCORE_FIRST: 'LOWEST_VOTE_SCORE_FIRST',
}

export const POST_SORT_DISPLAY_TEXT = {
    [POST_SORT.HIGHEST_VOTE_SCORE_FIRST]: 'Highest Vote Score First',
    [POST_SORT.LOWEST_VOTE_SCORE_FIRST]: 'Lowest Vote Score First',
    [POST_SORT.NEWEST_FIRST]: 'Newest First',
    [POST_SORT.OLDEST_FIRST]: 'Oldest First',
}

export const FORM_TYPE = {
    EDIT: 'EDIT',
    CREATE: 'CREATE',
}
