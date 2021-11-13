import React from 'react';
import './App.css';
import NavBar from './components/header/NavBar.js';
import Home from '../src/components/home/home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/home/Create';
import BlogDetails from './components/home/Blogdetails';
import NotFound from './components/home/NotFound';

function App() {


  return (
    <Router>
      <div className="App" >
        <NavBar />
        <div className="content">
          <Switch>

            <Route exact path='/' component={Home}/>

            <Route path='/Create'>
              <Create />
            </Route>

            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>

            <Route path='*'>
              <NotFound />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
