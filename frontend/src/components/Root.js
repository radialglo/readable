import React, {Component} from 'react';
import  PlusIcon from 'react-icons/lib/fa/plus-circle';
import UpIcon from 'react-icons/lib/fa/caret-up';
import DownIcon from 'react-icons/lib/fa/caret-down';
import EditIcon from 'react-icons/lib/fa/pencil';
import DeleteIcon from 'react-icons/lib/fa/trash';
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants';

class Root extends Component {
    componentDidMount() {
        const { fetchCategories, fetchPosts} = this.props;
        fetchCategories();
        fetchPosts();
    }
    render () {
        const { categories, posts} = this.props;

        return (
            <div>
                <div className="col-md-8">
                    <ol>
                        {posts.map(({id, title, category, commentCount, author, voteScore}) => (
                            <li key={id}>
                                <div className="row">
                                    <div className="col-md-1">
                                        <table className="text-center">
                                            <tbody>
                                                <tr style={{cursor: "pointer"}}>
                                                    <td>
                                                        <UpIcon size={30} color={"#aaa"}/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span>
                                                            {voteScore}
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr style={{cursor: "pointer"}}>
                                                    <td>
                                                        <DownIcon size={30} color={"#aaa"}/>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="col-md-11">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h4><Link to={`/${category}/${id}`}>{title}</Link></h4>
                                            </div>
                                            <div className="col-md-1">
                                                <Link to={`/edit/${id}`}>
                                                    <EditIcon size={30} color={"#aaa"}/>
                                                </Link>
                                            </div>
                                            <div className="col-md-1">
                                                <DeleteIcon size={30} color={"#aaa"}/>
                                            </div>
                                        </div>

                                        <ul>
                                            <li>Author: {author}</li>
                                            <li>Number of Comments: {commentCount} </li>
                                        </ul>
                                    </div>
                                </div>
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