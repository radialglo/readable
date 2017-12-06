import { connect } from 'react-redux';
import PostDetailView from '../components/PostDetailView';

import {
    fetchPost,
    fetchCommentsForPost,
    deletePost,
    upVoteOnPost,
    downVoteOnPost,
    updatePostSort,
} from '../actions';


function mapStateToProps({ posts, comments }, ownProps) {
    const { postId } = ownProps;

    let commentsArray =  comments.allIds.map((id) => comments.byIds[id]);


    return {
        post: posts.byIds[postId] || {},
        comments: commentsArray.filter(comment => comment.parentId === postId)
    }

}

function mapDispatchToProps(dispatch) {
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        fetchCommentsForPost: (postId) => dispatch(fetchCommentsForPost(postId)),
        deletePost: (id) => dispatch(deletePost(id)),
        upVoteOnPost: (id) => dispatch(upVoteOnPost(id)),
        downVoteOnPost: (id) => dispatch(downVoteOnPost(id)),
        updatePostSort: (sortType) => dispatch(updatePostSort(sortType))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailView);