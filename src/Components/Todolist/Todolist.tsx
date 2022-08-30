import React, {ChangeEvent, MouseEvent, KeyboardEvent} from 'react';
import {TaskType} from "./TodolistContainer";
import s from './Todolist.module.css'

type TodoListPropsType = {
    tasks: Array<TaskType>
    buttonOnClickRemoveHandler: () => void
    buttonOnClickAddHandler: () => void
    checkBoxOnChangeHandler: (id: string, isDone: boolean) => void
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void
    input: string
    setInput: (input: string) => void
    onClickFilterHandler: () => void
    error: string | null
}
//презентационная компонента
export const Todolist: React.FC<TodoListPropsType> = ({
                                                          tasks, buttonOnClickAddHandler, buttonOnClickRemoveHandler,
                                                          checkBoxOnChangeHandler,inputOnChangeHandler,
                                                          onKeyPressHandler, error, input, setInput,
                                                          onClickFilterHandler,...props
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
                               onChange={() => checkBoxOnChangeHandler(m.id, m.isDone)} //костыль
                               checked={m.isDone}/>
                    </div>
                    {m.title}
                </li>)}
            </ul>
            <div>
                <button name={'all'} className={'filterButtonStyle'} onClick={onClickFilterHandler}>All</button>
                <button name={'active'} className={'filterButtonStyle'} onClick={onClickFilterHandler}>Active</button>
                <button name={'completed'} className={'filterButtonStyle'} onClick={onClickFilterHandler}>Completed</button>
            </div>
        </div>
    )
        ;
};

