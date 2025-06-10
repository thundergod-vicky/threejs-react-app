import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import View from './pages/View';
import IslandExp from './pages/IslandExp';
import Island1 from './components/Islands/Island1';
import Island2 from './components/Islands/Island2';
import Island3 from './components/Islands/Island3';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/roomview" element={<View />} />
                <Route path="/IslandExp" element={<IslandExp />} />
                <Route path="/island1" element={<Island1 />} />
                <Route path="/island2" element={<Island2 />} />
                <Route path="/island3" element={<Island3 />} />
            </Routes>
        </Router>
    );
};

export default App;
