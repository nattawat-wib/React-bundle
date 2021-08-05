import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//? PAGE AND COMPONENTS 
import Home from './pages/Home'
import ArticleAll from './pages/articles/Article-all'
import ArticleAdd from './pages/articles/Article-add'
import ArticleDetail from './pages/articles/Article-detail'
import ArticleEdit from './pages/articles/Article-edit'

import MainNavbar from './components/Navbar'
import MainFooter from './components/Footer'

//? CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <BrowserRouter >
                <MainNavbar />
                <Switch>
                    <div style={{ minHeight: 'calc(100vh - 140px)' }}>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" />
                        <Route path="/article" component={ArticleAll}/>
                        <Route path="/article-add" component={ArticleAdd} />
                        <Route path="/article-detail/:title" component={ArticleDetail} />
                        <Route path="/article-edit/:title" component={ArticleEdit} />
                        <Route path="/contact" />
                    </div>
                </Switch>
                <MainFooter />
            </BrowserRouter>
        </>
    );
}

export default App;
