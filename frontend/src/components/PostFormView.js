import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PostForm extends Component {
    constructor(props) {
        super(props);

        const {
            initTitle,
            initBody,
        } = props;

        this.state = {
            title: initTitle || '',
            body: initBody || '',
            author: '',
            category: '',
        }
    }

    handleInput = (data) => {
        this.setState(data)
    }

    handleTitleChange = (e) => {
        this.handleInput({
            title: e.target.value
        })
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

    handleSelectChange = (e) => {
        this.handleInput({
            category: e.target.value
        })
    }

    render() {

        const {onSubmit, categories} = this.props;

        return (
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input name="title" type="text" className="form-control" value={this.state.title}
                           onChange={this.handleTitleChange}/>
                </div>

                <div className="form-group">
                    <label>Body</label>
                    <textarea name="body" className="form-control" value={this.state.body}
                              onChange={this.handleBodyChange}/>
                </div>

                <div className="form-group">
                    <label>Author</label>
                    <input name="author" type="text" className="form-control" value={this.state.author}
                           onChange={this.handleAuthorChange}/>
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <select name="category" value={this.state.category} className="form-control" onChange={this.handleSelectChange}>
                        {categories.map((category) => (
                            <option key={category.name} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
}

export default PostForm;