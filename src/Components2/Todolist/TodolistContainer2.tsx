import React, {ChangeEvent, MouseEvent, useState, KeyboardEvent} from "react";
import {v1} from "uuid";
import Todolist2 from "./Todolist2";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
type TodoListContainerPropsType = {}
export type FilterValueType = 'all' | 'active' | 'completed'
export const TodolistContainer2: React.FC<TodoListContainerPropsType> = ({...props}) => {
    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
    ]);
    const [filter, setFilter] = useState<FilterValueType>('all')
    const [input, setInput] = useState<string>(' ')
    const [error, setError] = useState<string | null>(null)

    const checkBoxHandler = (id: string, isDone: boolean) => {
        setTasks(tasks.map(m => m.id === id ? {...m, isDone: isDone} : m))

    }
    const inputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }
    const buttonAddHandler = () => {
        addTask(input.trim())
        setInput(' ')
    }
    const inputOnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask(input.trim())
            setInput(' ')
        }
    }
    const addTask = (title: string) => {
        if (title.trim() === '') {
            setError('Field is required!');
            return;
        }
        setTasks([{id: v1(), title: input, isDone: false}, ...tasks])
        setError(null)
    }
    const buttonOnClickRemoveHandler = (id: string) => {
        setTasks(tasks.filter(f => f.id !== id))
    }
    const buttonOnClickFilterHandler = (e: MouseEvent<HTMLButtonElement>) => {
        setFilter(e.currentTarget.textContent!.toLowerCase() as FilterValueType)
    }
    const filteredTasks = filter === 'active' ? tasks.filter(f => !f.isDone)
        : filter === 'completed'
            ? tasks.filter(f => f.isDone) : tasks;
    return (
        <div>
            <Todolist2
                tasks={filteredTasks}
                buttonOnClickRemoveHandler={buttonOnClickRemoveHandler}
                buttonOnClickFilterHandler={buttonOnClickFilterHandler}
                input={input}
                inputOnChangeHandler={inputOnChangeHandler}
                buttonAddHandler={buttonAddHandler}
                inputOnKeyPressHandler={inputOnKeyPressHandler}
                error={error}
                checkBoxHandler={checkBoxHandler}
                filter={filter}
            />
        </div>
    )
}