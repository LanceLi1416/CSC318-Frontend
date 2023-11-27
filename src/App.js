import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import Register from './components/Register';

import {MainMenuScreen} from './screens/MainMenuScreen/MainMenuScreen';
import {MainScreen} from "./screens/MainScreen/MainScreen";
import {PageNotFound} from "./screens/PageNotFound/PageNotFound";

import './styleguide.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/login"/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

                <Route path="/mainmenu" element={<MainMenuScreen/>}/>
                <Route path="/lobby" element={<MainScreen/>}/>

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </Router>
    );
}

export default App;
