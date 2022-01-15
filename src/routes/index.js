import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import store, { history } from 'store';
import { theme } from 'constant';

import Routes from './SessionRoutes';

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <ChakraProvider theme={theme}>
                <Routes />
            </ChakraProvider>
        </Router>
    </Provider>
);

export default App;
