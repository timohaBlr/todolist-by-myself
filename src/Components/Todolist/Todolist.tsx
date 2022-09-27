import React, {ChangeEvent, MouseEvent, KeyboardEvent} from 'react';
import {FilterValuesType, TaskType} from "./TodolistContainer";
import s from './Todolist.module.css'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {CheckBox} from "../CheckBox/CheckBox";

type TodoListPropsType = {
    tasks: Array<TaskType>
    buttonOnClickRemoveHandler: (id: string) => void
    buttonOnClickAddHandler: (event: MouseEvent<HTMLButtonElement>) => void
    checkBoxOnChangeHandler: (id: string, isDone: boolean) => void
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void
    input: string
    setInput: (input: string) => void
    onClickFilterHandler: (event: MouseEvent<HTMLButtonElement>) => void
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
            <Input value={input}
                   className={error ? s.error : ''}
                   onKeyPress={onKeyPressHandler}
                   onChange={inputOnChangeHandler}/>            {/*universal input*/}
            {/*<input value={input}
                   className={error ? s.error : ''}
                   onKeyPress={onKeyPressHandler}
                   onChange={inputOnChangeHandler}
            />*/}
            <Button title={'Add'} callBack={buttonOnClickAddHandler}/> {/*universal button*/}
            {/*<button onClick={buttonOnClickAddHandler}>Add</button>*/}
            {error && <div className={s.errorMessage}>{error}</div>}
            <ul>
                {tasks.map(m => <li key={m.id} className={m.isDone ? s.isDone : ''}>
                    <div className={s.buttonRemove}>
                        <Button title={'X'}
                                callBack={() => buttonOnClickRemoveHandler(m.id)}/>                        {/*universal button*/}
                        {/* <button onClick={(event) => buttonOnClickRemoveHandler(m.id)}>X</button>*/}
                    </div>
                    <div className={s.checkBox}>
                        <CheckBox onChange={(event) => checkBoxOnChangeHandler(m.id, event.currentTarget.checked)}
                                  checked={m.isDone}/>
                        {/*universal CheckBox*/}
                        {/* <input type={"checkbox"}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => checkBoxOnChangeHandler(m.id, event.currentTarget.checked)}
                               checked={m.isDone}/>*/}
                    </div>
                    {m.title}
                </li>)}
            </ul>
            <div>
                <div className={s.filter}>
                    <Button value={'all'} title={'All'}
                            className={`${s.default} ${filter === 'all' && s.active}`}
                            callBack={onClickFilterHandler}/>
                </div>
                <div className={s.filter}>
                    <Button value={'active'} title={'Active'}
                            className={filter === 'active' ? `${s.default} ${s.active}` : s.default}
                            callBack={onClickFilterHandler}/>
                </div>
                <div className={s.filter}>
                    <Button value={'completed'} title={'Completed'}
                            className={filter === 'completed' ? `${s.default} ${s.active}` : s.default}
                            callBack={onClickFilterHandler}/>
                </div>
                {/*universal buttons*/}
                {/*<button value={'all'} className={filter === 'all' ? s.active : ''}
                        onClick={onClickFilterHandler}>All
                </button>
                <button value={'active'} className={filter === 'active' ? s.active : ''}
                        onClick={onClickFilterHandler}>Active
                </button>
                <button value={'completed'} className={filter === 'completed' ? s.active : ''}
                        onClick={onClickFilterHandler}>Completed
                </button>*/}
            </div>
        </div>
    )
        ;
};

