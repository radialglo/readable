import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import serializeForm from 'form-serialize';
import {
    withRouter
} from 'react-router-dom';
import { ROUTES, FORM_TYPE } from '../constants';


import PostFormView from './PostFormView'

class EditPostForm extends Component {

    componentDidMount () {

    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {
            title,
            body,
        } = serializeForm(e.target, {hash: true});

        const {
            postId,
            editPost,
        } = this.props;

        editPost(postId, title, body);

        // TODO: this should go back to original page either Root or Category View
        this.props.history.push(ROUTES.ROOT);
    }

    render() {
        const {
          post
        } = this.props;

        return (
            <div className="container">
                <h2> Edit Post </h2>
                <PostFormView
                    initTitle = {post.title}
                    initBody = {post.body}
                    onSubmit={this.handleSubmit}
                    formType={FORM_TYPE.EDIT}
                />
            </div>
        )
    }

}

export default withRouter(EditPostForm);