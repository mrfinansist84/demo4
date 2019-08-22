import React from 'react';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';

import routes from './Routes/index'

const App = ({history}) => {
    return (
        <ConnectedRouter history={history}>
           {routes}
        </ConnectedRouter>
        
    );
}

export default App;
