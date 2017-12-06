import { connect } from 'react-redux';
import EditPostForm from '../components/EditPostForm';
import { editPost } from "../actions";

function mapStateToProps({posts}, ownProps) {
    const { postId } = ownProps;
    return {
        post: posts.byIds[postId] || {},
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editPost: (id, title, body ) => dispatch(editPost(id, title, body)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm)