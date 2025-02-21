import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RecordPage from './pages/RecordPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/records" component={RecordPage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;