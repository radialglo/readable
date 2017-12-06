import { connect } from 'react-redux';
import CreatePostForm from '../components/CreatePostForm';


function mapStateToProps({categories}) {
    return {
        categories
    }

}

function mapDispatchToProps() {
    return {

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm)