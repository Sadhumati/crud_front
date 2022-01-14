import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import  { Router } from 'react-router';
import Main from './pages';
import Create from './pages/create';
import Edit from './pages/edit';
import history from './services/history';

function MyRoutes(){
    return(
        <BrowserRouter>
            <Router history={history}>
                <Route path="/" exact component={Main}/>
                <Route path="/create" component={Create}/>
                <Route path="/edit/:id" component={Edit}/>
            </Router>
        </BrowserRouter>
    );
}

export default MyRoutes;
