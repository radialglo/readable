import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import DateFormat from 'dateformat';
import VotingView from './VotingView';
import EditIcon from 'react-icons/lib/fa/pencil';
import DeleteIcon from 'react-icons/lib/fa/trash';
import serializeForm from 'form-serialize';
import {ROUTES} from "../constants";

class CommentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            body: this.props.initBody,
        };
    }

    toggleEdit = () => {
        this.setState((prevState, props) => {
            return {isEditing: !prevState.isEditing}
        })

    }

    onBodyChange = (e) => {
        this.setState({
            body: e.target.value
        })
    }

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

    onEditComment = (e) => {

        e.preventDefault();

        const { id } = this.props;

        this.toggleEdit();
        this.props.editComment(id, this.state.body);


    }

    render() {
        const {id, body, category, commentCount, author, voteScore, timestamp} = this.props;
        const {isEditing} = this.state;
        return (
            <div className="row">
                <div className="col-md-1">
                    <VotingView onUpVote={this.onUpVote} onDownVote={this.onDownVote} voteScore={voteScore} />
                </div>

                <div className="col-md-11">
                    <div className="row">
                        <div className="col-md-3">
                            <h6>{author} <small>{DateFormat(timestamp)}</small></h6>

                            {isEditing ? (
                                <form onSubmit={this.onEditComment}>
                                    <div className="form-group">
                                        <textarea name="body" className="form-control" value={this.state.body} onChange={this.onBodyChange}/>
                                    </div>

                                    <button style={{margin: "5px"}} type="submit" className="btn btn-default btn-xs">Save</button>
                                    <button type="button" className="btn btn-link" onClick={this.toggleEdit}>Cancel</button>
                                </form>
                            ): (
                                <p>
                                    {body}
                                </p>
                            )}
                        </div>
                        {isEditing ? null: (
                            <div>
                                <div className="col-md-1" style={{cursor: "pointer"}}>
                                    <EditIcon size={20} color={"#aaa"} onClick={this.toggleEdit}/>
                                </div>
                                <div className="col-md-1" style={{cursor: "pointer"}}>
                                    <DeleteIcon size={20} color={"#aaa"} onClick={this.onDeleteComment}/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentItem;