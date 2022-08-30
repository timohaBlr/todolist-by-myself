import React, {ChangeEvent, MouseEvent, KeyboardEvent} from 'react';
import {FilterValuesType, TaskType} from "./TodolistContainer";
import s from './Todolist.module.css'

type TodoListPropsType = {
    tasks: Array<TaskType>
    buttonOnClickRemoveHandler: (id: string) => void
    buttonOnClickAddHandler: () => void
    checkBoxOnChangeHandler: (id: string, isDone: boolean) => void
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void
    input: string
    setInput: (input: string) => void
    onClickFilterHandler: (filter: MouseEvent<HTMLButtonElement>) => void
    error: string | null
    filter: FilterValuesType
}
//презентационная компонента
export const Todolist: React.FC<TodoListPropsType> = ({
                                                          tasks, buttonOnClickAddHandler, buttonOnClickRemoveHandler,
                                                          checkBoxOnChangeHandler, inputOnChangeHandler,
                                                          onKeyPressHandler, error, input, setInput,
                                                          onClickFilterHandler, filter, ...props
                                                      }) => {
    return (
        <div>
            <h3>What to learn</h3>
            <input value={input}
                   className={error ? s.error : ''}
                   onKeyPress={onKeyPressHandler}
                   onChange={inputOnChangeHandler}
            />
            <button onClick={buttonOnClickAddHandler}>Add</button>
            {error && <div className={s.errorMessage}>{error}</div>}
            <ul>
                {tasks.map(m => <li key={m.id} className={m.isDone ? s.isDone: ''}>
                    <div className={s.buttonRemove}>
                        <button onClick={(event) => buttonOnClickRemoveHandler(m.id)}>X</button>
                    </div>
                    <div className={s.checkBox}>
                        <input type={"checkbox"}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => checkBoxOnChangeHandler(m.id, event.currentTarget.checked)}
                               checked={m.isDone}/>
                    </div>
                    {m.title}
                </li>)}
            </ul>
            <div>
                <button name={'all'} className={filter === 'all' ? s.active : ''} onClick={onClickFilterHandler}>All</button>
                <button name={'active'} className={filter === 'active' ? s.active : ''} onClick={onClickFilterHandler}>Active</button>
                <button name={'completed'} className={filter === 'completed' ? s.active : ''} onClick={onClickFilterHandler}>Completed
                </button>
            </div>
        </div>
    )
        ;
};

