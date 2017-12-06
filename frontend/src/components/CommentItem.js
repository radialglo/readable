import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import DateFormat from 'dateformat';
import VotingView from './VotingView';
import EditIcon from 'react-icons/lib/fa/pencil';
import DeleteIcon from 'react-icons/lib/fa/trash';

class CommentItem extends Component {
    onDeleteComment = () => {
        const {id, deleteComment} = this.props;
        deleteComment(id);
    }

    onUpVote = () => {
        const {id, upVoteOnComment} = this.props;
        upVoteOnComment(id);
    }

    onDownVote = () => {
        const {id, downVoteOnComment} = this.props;
        downVoteOnComment(id);
    }

    render() {
        const {id, body, category, commentCount, author, voteScore, timestamp} = this.props;
        return (
            <div className="row">
                <div className="col-md-1">
                    <VotingView onUpVote={this.onUpVote} onDownVote={this.onDownVote} voteScore={voteScore} />
                </div>

                <div className="col-md-11">
                    <div className="row">
                        <div className="col-md-3">
                            <h6>{author} <small>{DateFormat(timestamp)}</small></h6>

                            <p>
                                {body}
                            </p>
                        </div>
                        <div className="col-md-1">
                            {/* TODO: Change to Edit Post*/}
                            <Link to={`/edit/${id}`}>
                                <EditIcon size={20} color={"#aaa"}/>
                            </Link>
                        </div>
                        <div className="col-md-1" style={{cursor: "pointer"}}>
                            <DeleteIcon size={20} color={"#aaa"} onClick={this.onDeleteComment}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentItem;