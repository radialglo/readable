import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FORM_TYPE, ROUTES} from '../constants';
import serializeForm from "form-serialize";

class CommentForm extends Component {
    constructor(props) {
        super(props);

        const {
            initBody,
        } = props;

        this.state = {
            body: '',
            author: '',
        }
    }

    handleInput = (data) => {
        this.setState(data)
    }


    handleBodyChange = (e) => {
        this.handleInput({
            body: e.target.value
        })
    }

    handleAuthorChange = (e) => {
        this.handleInput({
            author: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {
          body,
          author
        } = this.state;

        this.props.createCommentForPost(body, author);

        this.setState({
            body: '',
            author: '',
        });
    }


    render() {

        const {onSubmit} = this.props;

        return (
            <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <textarea name="body" className="form-control" value={this.state.body}
                              onChange={this.handleBodyChange} placeholder="Add a comment" />
                </div>


                <div className="form-group">
                    <input name="author" type="text" className="form-control" value={this.state.author}
                           onChange={this.handleAuthorChange} placeholder="Comment Author"/>
                </div>

                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
}

export default CommentForm;