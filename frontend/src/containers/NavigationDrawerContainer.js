import { connect } from 'react-redux';
import NavigationDrawer from '../components/NavigationDrawer';

function mapStateToProps({categories, posts, postSort}, ownProps) {

    return {
        categories,
    }

}


export default connect(mapStateToProps)(NavigationDrawer);