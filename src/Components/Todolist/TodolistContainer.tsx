import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {Todolist} from "./Todolist";
import {v1} from "uuid";


type TodolistContainerPropsType = {}
export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValuesType = "all" | "active" | "completed"

export const TodolistContainer: React.FC<TodolistContainerPropsType> = ({...props}) => {
    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])
    const [filter, setFilter] = useState<FilterValuesType>('all')
    const [input, setInput] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const checkBoxOnChangeHandler = (id: string, isDone: boolean) => {
        setTasks(tasks.map(m => m.id === id ? {...m, isDone: isDone} : m))
    }
    const buttonOnClickRemoveHandler = (id: string) => {
        let filteredTasks = tasks.filter(f => f.id !== id)
        setTasks(filteredTasks)
    }
    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value)

    }
    const buttonOnClickAddHandler = () => {
        addTask(input.trim())
        setInput(' ')
    }
    const onKeyPressInputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask(input.trim())
            setInput(' ')
        }
    }
    const addTask = (title: string) => {
        if (title.trim() === '') {
            setError('Field is required!');
            return;
        }
        setTasks([{id: v1(), title: title, isDone: false,}, ...tasks])
        setError(null)
    }
    const buttonOnClickFilterHandler = (filter: FilterValuesType) => {
        console.log(filter)
        setFilter(filter)
    }
    const filteredTasks = filter === "active" ? tasks.filter(f => !f.isDone) :
        filter === 'completed' ? tasks.filter(f => f.isDone) : tasks

    return (
        <div>
            <Todolist
                tasks={filteredTasks}
                title={'What to learn?'}
                buttonOnClickRemoveHandler={buttonOnClickRemoveHandler}
                buttonOnClickFilterHandler={buttonOnClickFilterHandler}
                inputOnChangeHandler={inputOnChangeHandler}
                buttonOnClickAddHandler={buttonOnClickAddHandler}
                onKeyPressInputHandler={onKeyPressInputHandler}
                checkBoxOnChangeHandler={checkBoxOnChangeHandler}
                error={error}
                input={input}
                filter={filter}/>
        </div>

    );
}