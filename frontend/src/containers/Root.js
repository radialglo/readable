import { connect } from 'react-redux';
import Root from '../components/Root';
import { fetchPosts, fetchCategories, deletePost } from '../actions';

function mapStateToProps({categories, posts}) {
    return {
        categories,
        posts: posts.allIds.map((id) => posts.byIds[id]),
    }

}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchCategories: () => dispatch(fetchCategories()),
        deletePost: (id) => dispatch(deletePost(id)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Root)