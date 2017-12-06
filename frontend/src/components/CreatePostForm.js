import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import serializeForm from 'form-serialize';
import {
    withRouter
} from 'react-router-dom';
import { publishPost } from '../utils/api';
import { ROUTES } from '../constants';


import PostFormView from './PostFormView'

class CreatePostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const {
            title,
            body,
            author,
            category
        } = serializeForm(e.target, {hash: true});

        publishPost(title, body, author, category).then(() => {
            // TODO: this should go back to original page either Root or Category View
            this.props.history.push(ROUTES.ROOT);
        });
    }

    render() {
        return (
            <div className="container">
                <h2> Create Post </h2>
                <PostFormView categories={this.props.categories} onSubmit={this.handleSubmit}/>
            </div>
        )
    }

}

export default withRouter(CreatePostForm);

