import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import UpIcon from 'react-icons/lib/fa/caret-up';
import DownIcon from 'react-icons/lib/fa/caret-down';
import EditIcon from 'react-icons/lib/fa/pencil';
import DeleteIcon from 'react-icons/lib/fa/trash';

class PostItem extends Component {
    onDeletePost = () => {
        const {id, deletePost} = this.props;
        deletePost(id);
    }

    render() {
        const {id, title, category, commentCount, author, voteScore} = this.props;
        return (
            <div className="row">
                <div className="col-md-1">
                    <table className="text-center">
                        <tbody>
                        <tr style={{cursor: "pointer"}}>
                            <td>
                                <UpIcon size={30} color={"#aaa"}/>
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
                                <DownIcon size={30} color={"#aaa"}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-md-11">
                    <div className="row">
                        <div className="col-md-10">
                            <h4><Link to={`/${category}/${id}`}>{title}</Link></h4>
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
