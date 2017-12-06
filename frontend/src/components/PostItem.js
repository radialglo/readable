import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import DateFormat from 'dateformat';
import UpIcon from 'react-icons/lib/fa/caret-up';
import DownIcon from 'react-icons/lib/fa/caret-down';
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
        const {id, title, category, commentCount, author, voteScore, timestamp} = this.props;
        return (
            <div className="row">
                <div className="col-md-1">
                    <table className="text-center">
                        <tbody>
                        <tr style={{cursor: "pointer"}}>
                            <td>
                                <UpIcon size={30} color={"#aaa"} onClick={this.onUpVote}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>
                                    {voteScore}
                                </span>
                            </td>
                        </tr>
                        <tr style={{cursor: "pointer"}}>
                            <td>
                                <DownIcon size={30} color={"#aaa"} onClick={this.onDownVote}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-md-11">
                    <div className="row">
                        <div className="col-md-10">
                            <h4><Link to={`/${category}/${id}`}>{title}</Link>  <small>{DateFormat(timestamp)}</small></h4>
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
                </div>
            </div>
        )
    }
}

export default PostItem;
