import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import reducer from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const logger = createLogger({
    // ...options
});


const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(logger),
        applyMiddleware(thunk)
    ),
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
