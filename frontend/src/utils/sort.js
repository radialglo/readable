import { POST_SORT } from '../constants';

export function getSortPostsComparator(postSort) {
    switch (postSort) {
        case POST_SORT.LOWEST_VOTE_SCORE_FIRST:
            return function (a, b) {
                return a.voteScore - b.voteScore;
            };
        case POST_SORT.HIGHEST_VOTE_SCORE_FIRST:
            return function (a, b) {
                return b.voteScore - a.voteScore;
            }
        case POST_SORT.NEWEST_FIRST:
            return function(a, b) {
                return b.timestamp - a.timestamp;
            }
        case POST_SORT.OLDEST_FIRST:
        // explicit fall-through
        default:
            return function(a, b) {
                return a.timestamp - b.timestamp;
            }
    }
}