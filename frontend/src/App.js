import React, { Component } from 'react';
import './App.css';
import { ROUTES } from './constants';
import Root from './containers/Root';
import CreatePostFormContainer from './containers/CreatePostFormContainer';
import {
    Route,
    Switch
} from 'react-router-dom';

class App extends Component {

    render() {
        return (
          <div>
              <Route exact path={ROUTES.ROOT} render={() => (
                 <Root />
              )}/>

              <Switch>
                  <Route exact path={ROUTES.CREATE_POST} render={() => (
                      <CreatePostFormContainer />
                  )}/>

                  <Route path={ROUTES.EDIT_POST} render={({match}) => (
                      <div>
                          Category: {match.params.category}
                          Post Id: {match.params.id}
                      </div>
                  )}/>

                  <Route exact path={ROUTES.CATEGORY} render={({match}) => (
                      <Root selectedCategory={match.params.category}/>
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
