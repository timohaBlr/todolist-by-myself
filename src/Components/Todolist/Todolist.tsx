import React, {ChangeEvent, MouseEvent, KeyboardEvent} from 'react';
import {TaskType} from "./TodolistContainer";
import s from './Todolist.module.css'

type TodoListPropsType = {
    tasks: Array<TaskType>
    buttonOnClickRemoveHandler: () => void
    buttonOnClickAddHandler: () => void
    checkBoxOnChangeHandler: () => void
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void
    input: string
    setInput: (input: string) => void
    error: string | null
}
//презентационная компонента
export const Todolist: React.FC<TodoListPropsType> = ({
                                                          tasks, buttonOnClickAddHandler, buttonOnClickRemoveHandler,
                                                          checkBoxOnChangeHandler,inputOnChangeHandler,onKeyPressHandler, error, input, setInput, ...props
                                                      }) => {

    return (
        <div>
            <h3>What to learn</h3>
            <input value={input}
                   className={''}
                   onKeyPress={onKeyPressHandler}
                   onChange={inputOnChangeHandler}
            />
            <button onClick={buttonOnClickAddHandler}>Add</button>
            {error && <div className={s.errorMessage}>{error}</div>}
            <ul>
                {tasks.map(m => <li key={m.id}>
                    <div className={s.buttonRemove}>
                        <button onClick={buttonOnClickRemoveHandler}>X</button>
                    </div>
                    <div className={s.checkBox}>
                        <input type={"checkbox"}
                               onChange={checkBoxOnChangeHandler}
                               checked={m.isDone}/>
                    </div>
                    {m.title}
                </li>)}
            </ul>
        </div>
    )
        ;
};

