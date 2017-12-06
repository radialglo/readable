import React, {Component} from 'react';
import  PlusIcon from 'react-icons/lib/fa/plus-circle';
import { Link } from 'react-router-dom'
import { ROUTES, POST_SORT, POST_SORT_DISPLAY_TEXT } from '../constants';
import PostItem from './PostItem';

class Root extends Component {
    componentDidMount() {
        const { fetchCategories, fetchPosts} = this.props;
        fetchCategories();
        fetchPosts();
    }

    onUpdateSort = (e) => {
        const sortType = e.target.value;
        const {
            updatePostSort,
        } = this.props;
        updatePostSort(sortType);

    }

    render () {
        const {
            categories,
            posts,
            deletePost,
            postSort,
            downVoteOnPost,
            upVoteOnPost,
        } = this.props;

        return (
            <div>
                <div className="col-md-8">
                    <div className="row">
                        <h4 className="col-md-12">
                            <span> Sort by: </span>
                            <select name="postSort" value={postSort}  onChange={this.onUpdateSort}>
                                {Object.keys(POST_SORT).map((sort) => (
                                    <option key={sort} value={sort}>{POST_SORT_DISPLAY_TEXT[sort]}</option>
                                ))}
                            </select>
                        </h4>
                    </div>

                    <ol>
                        {posts.map(({id, title, category, commentCount, author, voteScore, deleted, timestamp}) => (
                            deleted ? null : <li key={id}>
                                <PostItem
                                    id={id}
                                    title={title}
                                    category={category}
                                    commentCount={commentCount}
                                    author={author}
                                    voteScore={voteScore}
                                    timestamp={timestamp}
                                    deletePost={deletePost}
                                    upVoteOnPost={upVoteOnPost}
                                    downVoteOnPost={downVoteOnPost}
                                    isDetailed={false}
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
                        <li key="all">
                            <Link to={ROUTES.ROOT}>All Categories</Link>
                        </li>
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