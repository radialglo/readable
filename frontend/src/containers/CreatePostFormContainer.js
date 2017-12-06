import { connect } from 'react-redux';
import CreatePostForm from '../components/CreatePostForm';
import { createPost } from "../actions";

function mapStateToProps({categories}) {
    return {
        categories
    }

}

function mapDispatchToProps(dispatch) {
    return {
        createPost: (title, body, author, category) => dispatch(createPost(title, body, author, category)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm)