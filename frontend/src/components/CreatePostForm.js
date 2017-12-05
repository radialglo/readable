import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import serializeForm from 'form-serialize';


import PostFormView from './PostFormView'

class CreatePostForm extends Component {

    render() {
        return (
            <div className="container">
                <h2> Create Post </h2>
                <PostFormView/>
            </div>
        )
    }

}

export default CreatePostForm;

