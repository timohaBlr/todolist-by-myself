import React, {ChangeEvent, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from "./TodolistContainer";
import {MouseEvent} from "react";
import s from './Todolist.module.css';

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    buttonOnClickRemoveHandler: (id: string) => void
    buttonOnClickFilterHandler: (filter: FilterValuesType) => void
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    buttonOnClickAddHandler: (event: MouseEvent<HTMLButtonElement>) => void
    onKeyPressInputHandler: (event: KeyboardEvent<HTMLInputElement>) => void
    checkBoxOnChangeHandler: (id: string, isDone: boolean) => void
    error: string | null
    input: string
    filter: FilterValuesType

}
export const Todolist: React.FC<TodolistPropsType> = ({filter,input,error,checkBoxOnChangeHandler,onKeyPressInputHandler,buttonOnClickAddHandler,inputOnChangeHandler,buttonOnClickFilterHandler,title, tasks,buttonOnClickRemoveHandler,...props}) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input className={error ? s.error : ''} onChange={inputOnChangeHandler}
                       onKeyPress={onKeyPressInputHandler}
                       value={input}/>
                <button onClick={buttonOnClickAddHandler}>+</button>
                <div className={s.errorMessage}>{error ?? ''}</div>
            </div>
            <ul>
                {tasks.map(m =>
                    <li className={m.isDone? s.isDone: ''} key={m.id}>
                        <input type="checkbox"
                               onChange={(event) =>
                                   checkBoxOnChangeHandler(m.id, event.currentTarget.checked)}
                               checked={m.isDone}/>
                        <span>
                            {m.title}
                        </span>
                        <button onClick={() => buttonOnClickRemoveHandler(m.id)}>
                            ✖️
                        </button>
                    </li>)}
            </ul>
            <div>
                <button className={filter==="all"? s.active: ''}
                        onClick={() => buttonOnClickFilterHandler('all')}>All</button>
                <button className={filter==="active"? s.active: ''}
                        onClick={() => buttonOnClickFilterHandler('active')}>Active</button>
                <button className={filter==="completed"? s.active: ''}
                        onClick={() => buttonOnClickFilterHandler('completed')}>Completed</button>
            </div>
        </div>
    );
};

