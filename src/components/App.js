import React from 'react'
import './App.css'
import Home from './layout/Home'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => (
    <Router>
        <Home />
    </Router>
);

export default App;