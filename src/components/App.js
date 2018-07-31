import React from 'react'
import './App.css'
import Home from './layout/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
    <Router>
        <Route path='/' component={Home}/>
    </Router>
);

export default App;