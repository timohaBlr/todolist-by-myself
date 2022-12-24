import React from 'react';
import './App.css';
import {TodolistContainer} from "./Components/Todolist/TodolistContainer";
import AddItemForm from "./Components/AddItemForm/AddItemForm";


function App() {
    return (
        <div className="App">
            <AddItemForm>New</AddItemForm>
            <TodolistContainer/>
        </div>
    );
}

export default App;
