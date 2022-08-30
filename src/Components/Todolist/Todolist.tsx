import React, {ChangeEvent, MouseEvent} from 'react';
import {TaskType} from "./TodolistContainer";
import s from './Todolist.module.css'

type TodoListPropsType = {
    tasks: Array<TaskType>
    buttonOnClickRemoveHandler: () => void
    buttonOnClickAddHandler: (event: MouseEvent<HTMLButtonElement>) => void
    checkBoxOnChangeHandler: () => void
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: () => void
    input: string
    setInput: (input: string) => void

}
//презентационная компонента
export const Todolist: React.FC<TodoListPropsType> = ({
                                                          tasks, buttonOnClickAddHandler, buttonOnClickRemoveHandler,
                                                          checkBoxOnChangeHandler,inputOnChangeHandler,onKeyPressHandler, input, setInput, ...props
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

