import { connect } from 'react-redux';
import PostDetailView from '../components/PostDetailView';

import {
    fetchPost,
    fetchCommentsForPost,
    deleteComment,
    upVoteOnComment,
    downVoteOnComment,
    deletePost,
    upVoteOnPost,
    downVoteOnPost,
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
        deleteComment: (id) => dispatch(deleteComment(id)),
        upVoteOnComment: (id) => dispatch(upVoteOnComment(id)),
        downVoteOnComment: (id) => dispatch(downVoteOnComment(id)),
        deletePost: (id) => dispatch(deletePost(id)),
        upVoteOnPost: (id) => dispatch(upVoteOnPost(id)),
        downVoteOnPost: (id) => dispatch(downVoteOnPost(id)),

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailView);