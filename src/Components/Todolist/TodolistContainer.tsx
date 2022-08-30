import React, {ChangeEvent, KeyboardEvent, MouseEvent, useState} from 'react';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type TodolistContainerPropsType = {}
type FilterValuesType = 'all' | 'active' | 'completed'

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
    const [error, setError] = useState<string | null>(null)
    const [filter, setFilter] = useState<FilterValuesType>('all')

    const buttonOnClickRemoveHandler = (id: string) => {
        setTasks(tasks.filter(f => f.id !==id))
    }
    const buttonOnClickAddHandler = () => {
        addTask(input.trim())
        setInput('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask(input.trim())
            setInput('')
        }
    }
    const addTask = (title: string) => {
        if (title.trim() === '') {
            setError('Field is required!');
            return;
        }
        setTasks([{id: v1(), title: title, isDone: false}, ...tasks])
        setError(null)
    }
    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        setInput(event.currentTarget.value as string)
    }
    const checkBoxOnChangeHandler = (id: string, isDone: boolean) => {
       setTasks(tasks.map(m => m.id === id ? {...m, isDone: isDone} : m))
           }
   const onClickFilterHandler = () => {

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
                    onKeyPressHandler={onKeyPressHandler}
                    error={error}
                    onClickFilterHandler={onClickFilterHandler}/>
            </div>
        </div>
    );
};

