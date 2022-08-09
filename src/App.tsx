import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";


function App() {
    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "React222", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]
    return (
        <div className="App">
            <Todolist shapka={"What to learn 1"} tasks={tasks1}/>
            <Todolist shapka={"What to learn 2"} tasks={tasks2}/>
        </div>
    );
}

export default App;
