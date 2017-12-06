import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import DateFormat from 'dateformat';
import VotingView from './VotingView';
import EditIcon from 'react-icons/lib/fa/pencil';
import DeleteIcon from 'react-icons/lib/fa/trash';

class CommentItem extends Component {
    onDeleteComment = () => {
        const {id, deletePost} = this.props;
        deletePost(id);
    }

    onUpVote = () => {
        const {id, upVoteOnPost} = this.props;
        upVoteOnPost(id);
    }

    onDownVote = () => {
        const {id, downVoteOnPost} = this.props;
        downVoteOnPost(id);
    }

    render() {
        const {id, body, category, commentCount, author, voteScore, timestamp} = this.props;
        return (
            <div className="row">
                <div className="col-md-1">
                    <VotingView onUpVote={this.onUpVote} onDownVote={this.onDownVote} voteScore={voteScore} />
                </div>

                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-10">
                            <h6>{author} <small>{DateFormat(timestamp)}</small></h6>

                            <p>
                                {body}
                            </p>
                        </div>
                        <div className="col-md-1">
                            <Link to={`/edit/${id}`}>
                                <EditIcon size={20} color={"#aaa"}/>
                            </Link>
                        </div>
                        <div className="col-md-1" style={{cursor: "pointer"}}>
                            <DeleteIcon size={20} color={"#aaa"} onClick={this.onDeletePost}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentItem;