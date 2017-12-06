import { connect } from 'react-redux';
import Root from '../components/Root';
import { POST_SORT } from '../constants';
import {
    fetchPosts,
    fetchCategories,
    deletePost,
    upVoteOnPost,
    downVoteOnPost,
    updatePostSort,
} from '../actions';

function getSortPostsComparator(postSort) {
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

function mapStateToProps({categories, posts, postSort}, ownProps) {
    let postArray =  posts.allIds.map((id) => posts.byIds[id]);
    const { selectedCategory } = ownProps;

    postArray.sort(getSortPostsComparator(postSort))
    return {
        categories,
        posts: selectedCategory ? postArray.filter((post) => post.category === selectedCategory) : postArray,
        postSort
    }

}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchCategories: () => dispatch(fetchCategories()),
        deletePost: (id) => dispatch(deletePost(id)),
        upVoteOnPost: (id) => dispatch(upVoteOnPost(id)),
        downVoteOnPost: (id) => dispatch(downVoteOnPost(id)),
        updatePostSort: (sortType) => dispatch(updatePostSort(sortType))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Root)