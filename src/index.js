import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import { RouterContainer } from './containers';

ReactDOM.render(
    <Provider store={store}>
        <RouterContainer />
    </Provider>,
    document.getElementById('root')
);