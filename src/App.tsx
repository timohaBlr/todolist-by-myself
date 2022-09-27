import React from 'react';
import './App.css';
import {TodolistContainer} from "./Components/Todolist/TodolistContainer";
import {TodolistContainer2} from "./Components2/Todolist/TodolistContainer2";



function App() {
        return (
        <div className="App">
            <TodolistContainer/>
            <TodolistContainer2/>
        </div>
    );
}

export default App;
