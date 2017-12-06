import React, { Component} from 'react';
import PostItem from './PostItem';
import CommentItem from './CommentItem';
import 'bootstrap/dist/css/bootstrap.css';
import {downVoteOnComment} from "../actions";


class PostDetailView extends Component {
    componentDidMount() {
        const { fetchCommentsForPost, fetchPost, postId } = this.props;
        fetchPost(postId);
        fetchCommentsForPost(postId);
    }
    render() {
        const {
            post,
            deletePost,
            downVoteOnPost,
            upVoteOnPost,
            upVoteOnComment,
            downVoteOnComment,
            deleteComment,
            comments,
        } = this.props;

        const  {
            id,
            title,
            body,
            category,
            commentCount,
            author,
            voteScore,
            deleted,
            timestamp,
        } = post;

        /* TODO Error message for deleted post */
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                { post.id && !post.deleted ?
                    <div>

                        <div className="row">
                            {deleted ? null :
                                <PostItem
                                    id={id}
                                    title={title}
                                    category={category}
                                    commentCount={commentCount}
                                    author={author}
                                    voteScore={voteScore}
                                    timestamp={timestamp}
                                    deletePost={deletePost}
                                    upVoteOnPost={upVoteOnPost}
                                    downVoteOnPost={downVoteOnPost}
                                    body={body}
                                    isDetailed={true}
                                />}
                        </div>
                        <ul className="list-unstyled">
                            {comments.map(({id, body, author, voteScore, deleted, timestamp}) => (
                                deleted ? null : <li key={id}>
                                    <CommentItem
                                        id={id}
                                        author={author}
                                        body={body}
                                        voteScore={voteScore}
                                        timestamp={timestamp}
                                        downVoteOnComment={downVoteOnComment}
                                        upVoteOnComment={upVoteOnComment}
                                        deleteComment={deleteComment}
                                    />
                                </li>

                            ))}
                        </ul>

                </div> : (
                    <p>Oh dear! The post was not found.</p>
                )}
            </div>
        )
    }
}

export default PostDetailView;