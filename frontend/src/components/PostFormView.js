import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const PostForm = (
    onSubmit,
    categories,
    title='',
    body='',
    author='',
    selectedCategory=''
) => (
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label>Title</label>
            <input name="title" type="text"  className="form-control" value={title}/>
        </div>
        <div className="form-group">
            <label>Body</label>
            <textarea name="body"  className="form-control" value={body}/>
        </div>
        <div className="form-group">
            <label>Author</label>
            <input name="author" type="text"  className="form-control" value={author}/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
    </form>
)

export default PostForm;