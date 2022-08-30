import React, {ChangeEvent, MouseEvent, useState} from 'react';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type TodolistContainerPropsType = {}

export const TodolistContainer: React.FC<TodolistContainerPropsType> = ({...props}) => {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
    ]);
    const [input, setInput] = useState<string>('');
    const buttonOnClickRemoveHandler = () => {

    }
    const buttonOnClickAddHandler = (event: MouseEvent<HTMLButtonElement>) => {
        addTask(input)
        setInput('')
    }
    const onKeyPressHandler = () => {

    }
    const addTask = (title: string) => {
        setTasks([{id: v1(), title: title, isDone: false}, ...tasks])
    }
    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value as string)
    }
    const checkBoxOnChangeHandler = () => {

    }


    return (
        <div>
            <div>
                <Todolist
                    tasks={tasks}
                    input={input}
                    setInput={setInput}
                    buttonOnClickAddHandler={buttonOnClickAddHandler}
                    buttonOnClickRemoveHandler={buttonOnClickRemoveHandler}
                    checkBoxOnChangeHandler={checkBoxOnChangeHandler}
                    inputOnChangeHandler={inputOnChangeHandler}
                    onKeyPressHandler={onKeyPressHandler}/>
            </div>
        </div>
    );
};

