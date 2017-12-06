import React, { Component} from 'react';
import PostItem from './PostItem';
import CommentItem from './CommentItem';
import 'bootstrap/dist/css/bootstrap.css';


class PostDetailView extends Component {
    componentDidMount() {
        const { fetchCommentsForPost, fetchPost, postId } = this.props;
        fetchPost(postId);
        fetchCommentsForPost(postId);
    }
    render() {
        const {
            post: {
                id,
                title,
                body,
                category,
                commentCount,
                author,
                voteScore,
                deleted,
                timestamp,
            },
            deletePost,
            downVoteOnPost,
            upVoteOnPost,
            comments,
        } = this.props;
        /* TODO Error message for deleted post */
        return (

            <div className="container" style={{paddingTop: "30px"}}>
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
                <ul class="list-inline">
                    {comments.map(({id, body, author, voteScore, deleted, timestamp}) => (
                        deleted ? null : <li key={id}>
                            <CommentItem
                                id={id}
                                author={author}
                                body={body}
                                voteScore={voteScore}
                                timestamp={timestamp}
                            />
                        </li>

                    ))}
                </ul>
            </div>
        )
    }
}

export default PostDetailView;