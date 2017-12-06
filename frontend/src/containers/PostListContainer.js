import { connect } from 'react-redux';
import PostListView from '../components/PostListView';
import { getSortPostsComparator } from "../utils/sort";
import {
    fetchPosts,
    fetchCategories,
    deletePost,
    upVoteOnPost,
    downVoteOnPost,
    updatePostSort,
} from '../actions';


function mapStateToProps({categories, posts, postSort}, ownProps) {
    let postArray =  posts.allIds.map((id) => posts.byIds[id]);
    const { selectedCategory } = ownProps;

    postArray.sort(getSortPostsComparator(postSort))
    return {
        categories,
        posts: selectedCategory ? postArray.filter((post) => post.category === selectedCategory) : postArray,
        postSort
    }

}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchCategories: () => dispatch(fetchCategories()),
        deletePost: (id) => dispatch(deletePost(id)),
        upVoteOnPost: (id) => dispatch(upVoteOnPost(id)),
        downVoteOnPost: (id) => dispatch(downVoteOnPost(id)),
        updatePostSort: (sortType) => dispatch(updatePostSort(sortType))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostListView)