import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../views/Dashboard';


const Routing = () => {
    return (
        <Router basename="/">
            <Routes>     
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default Routing;