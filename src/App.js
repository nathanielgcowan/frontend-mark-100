import "./App.css"
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Dogs from './containers/Dogs';
import About from './components/About';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return(
        <Router >
          <div className="App">
            <Header />
          </div>
          <Routes>
            <Route path='/' component={Dogs}/>
            <Route path='/about' component={About}/>
            <Route path='/favorite-dog' component={Profile}/>
            <Route path='/least-favorite-dog' component={Profile}/>
          </Routes>
        </Router>
    )
  }
}

export default App;