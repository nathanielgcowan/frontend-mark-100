import "./App.css"
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Dogs from './containers/Dogs';
import About from './components/About';
import FavoriteDog from './components/FavoriteDog';
import LeastFavorite from './components/LeastFavorite';

class App extends Component {
  render() {
    return(
        <Router >
          <div className="App">
            <Header />
          </div>
          <Routes>
            <Route path='/' element={<Dogs />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/least-favorite' element={<LeastFavorite />}/>
            <Route path='/favorite-dog' element={<FavoriteDog />}/>
          </Routes>
        </Router>
    )
  }
}

export default App;