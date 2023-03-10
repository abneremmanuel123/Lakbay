import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
 
function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact />
            </Routes>
            <Footer />
        </Router>
        </>
    );
}

export default App;