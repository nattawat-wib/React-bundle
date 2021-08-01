import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//? PAGE AND COMPONENTS 
import Home from './pages/Home'
import ArticleAll from './pages/articles/Article-all'
import ArticleAdd from './pages/articles/Article-add'

import MainNavbar from './components/Navbar'

//? CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <MainNavbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about" >
                        About
                    </Route>
                    <Route path="/article" >
                        <ArticleAll/>
                    </Route>
                    <Route path="/contact" >
                        Contact
                    </Route>
                </Switch>

            </BrowserRouter>
        </>
    );
}

export default App;
