import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import serializeForm from 'form-serialize';
import {
    withRouter
} from 'react-router-dom';
import { FORM_TYPE } from '../constants';


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

        this.props.createPost(title, body, author, category);
        this.props.history.goBack();

    }

    render() {
        return (
            <div className="container">
                <h2> Create Post </h2>
                <PostFormView categories={this.props.categories} onSubmit={this.handleSubmit} formType={FORM_TYPE.CREATE}/>
            </div>
        )
    }

}

export default withRouter(CreatePostForm);

