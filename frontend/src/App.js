import React, { Component } from 'react';
import './App.css';
import { ROUTES } from './constants';
import PostListContainer from './containers/PostListContainer';
import CreatePostFormContainer from './containers/CreatePostFormContainer';
import PostDetailContainer from './containers/PostDetailContainer';
import {
    Route,
    Switch
} from 'react-router-dom';

class App extends Component {

    render() {
        return (
          <div>
              <Route exact path={ROUTES.ROOT} render={() => (
                 <PostListContainer  />
              )}/>

              <Switch>
                  <Route exact path={ROUTES.CREATE_POST} render={() => (
                      <CreatePostFormContainer />
                  )}/>

                  <Route path={ROUTES.EDIT_POST} render={({match}) => (
                      <div>
                          Category: {match.params.category}
                          Post Id: {match.params.post_id}
                      </div>
                  )}/>

                  <Route exact path={ROUTES.CATEGORY} render={({match}) => (
                      <PostListContainer  selectedCategory={match.params.category}/>
                  )}/>


                  <Route path={ROUTES.POST_DETAIL} render={({match}) => (
                      <PostDetailContainer category={match.params.category} postId={match.params.post_id} />
                  )}/>
              </Switch>

          </div>
        );
    }
}

export default App;
