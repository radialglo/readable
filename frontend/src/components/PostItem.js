import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import DateFormat from 'dateformat';
import VotingView from './VotingView';
import EditIcon from 'react-icons/lib/fa/pencil';
import DeleteIcon from 'react-icons/lib/fa/trash';

class PostItem extends Component {
    onDeletePost = () => {
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
        const {id, title, body, category, commentCount, author, voteScore, timestamp , isDetailed} = this.props;
        return (
            <div className="row">
                <div className="col-md-1">
                    <VotingView onUpVote={this.onUpVote} onDownVote={this.onDownVote} voteScore={voteScore} />
                </div>

                <div className="col-md-11">
                    <div className="row">
                        <div className="col-md-10">
                            {isDetailed
                                ? (
                                    <h3>{title} <small>{DateFormat(timestamp)}</small></h3>
                                ) :  (
                                    <h4><Link to={`/${category}/${id}`}>{title}</Link>  <small>{DateFormat(timestamp)}</small></h4>
                                )}

                        </div>
                        <div className="col-md-1">
                            <Link to={`/edit/${id}`}>
                                <EditIcon size={30} color={"#aaa"}/>
                            </Link>
                        </div>
                        <div className="col-md-1" style={{cursor: "pointer"}}>
                            <DeleteIcon size={30} color={"#aaa"} onClick={this.onDeletePost}/>
                        </div>
                    </div>

                    <ul>
                        <li>Author: {author}</li>
                        <li>Number of Comments: {commentCount} </li>
                    </ul>
                    {isDetailed ? (
                        <p>
                            {body}
                        </p>
                    ): null}
                </div>
            </div>
        )
    }
}

export default PostItem;
