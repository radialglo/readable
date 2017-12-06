import React, {Component} from 'react';
import  PlusIcon from 'react-icons/lib/fa/plus-circle';
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants';
import PostItem from './PostItem';

class Root extends Component {
    componentDidMount() {
        const { fetchCategories, fetchPosts} = this.props;
        fetchCategories();
        fetchPosts();
    }
    render () {
        const { categories, posts, deletePost} = this.props;

        return (
            <div>
                <div className="col-md-8">
                    <ol>
                        {posts.map(({id, title, category, commentCount, author, voteScore, deleted}) => (
                            deleted ? null : <li key={id}>
                                <PostItem
                                    id={id}
                                    title={title}
                                    commentCount={commentCount}
                                    author={author}
                                    voteScore={voteScore}
                                    deletePost={deletePost}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="col-md-4">
                    <Link to={ROUTES.CREATE_POST}>
                        <PlusIcon size={50} color={"#00c853"}/>
                    </Link>

                    <ul>
                        {categories.map((category) => (
                            <li key={category.name}>
                                <Link to={category.path}>{category.name}</Link>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}



export default Root;