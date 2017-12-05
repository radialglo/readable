import React, { Component } from 'react';
import './App.css';
import { ROUTES } from './constants';
import Root from './components/Root';
import CreatePostForm from './components/CreatePostForm';
import { getCategories } from './utils/api';
import {
    Route,
    Switch
} from 'react-router-dom';

class App extends Component {
    state = {
        categories: []
    }
    componentDidMount() {
        getCategories().then((categories) =>
            this.setState({categories})
        )
    }

    render() {
        const { categories } = this.state;
        return (
          <div>
              <Route exact path={ROUTES.ROOT} render={() => (
                 <Root categories={categories}/>
              )}/>

              <Switch>
                  <Route exact path={ROUTES.CREATE_POST} render={() => (
                      <CreatePostForm/>
                  )}/>

                  <Route path={ROUTES.EDIT_POST} render={({match}) => (
                      <div>
                          Category: {match.params.category}
                          Post Id: {match.params.id}
                      </div>
                  )}/>

                  <Route path={ROUTES.CATEGORY} render={({match}) => (
                      <div>
                          Category: {match.params.category}
                      </div>
                  )}/>


                  <Route path={ROUTES.POST_DETAIL} render={({match}) => (
                      <div>
                          Category: {match.params.category}
                          Post Id: {match.params.id}
                      </div>
                  )}/>
              </Switch>

          </div>
        );
    }
}

export default App;
