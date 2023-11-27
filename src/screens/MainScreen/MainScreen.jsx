import React from 'react';
import Toolbar from "../../views/Toolbar/Toolbar";
import WorldView from "../../views/WorldView/WorldView";
import ChatView from "../../views/ChatView/ChatView";
import './MainScreen.css'

export const MainScreen = () => {
    return (
        <div className="main-screen">
            <WorldView/>
            <ChatView/>
            <Toolbar/>
        </div>
    );
};

export default MainScreen;