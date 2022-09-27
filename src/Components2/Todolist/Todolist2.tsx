import React, {MouseEvent, KeyboardEvent, ChangeEvent} from 'react';
import {TasksType} from "./TodolistContainer2";
import s from './Todolist.module.css';
import {FilterValuesType} from "../../Components/Todolist/TodolistContainer";
import {CheckBox2} from "../CheckBox/CheckBox2";
import {Button2} from "../Button/Button2";

type Todolist2PropsType = {
    tasks: Array<TasksType>
    buttonOnClickRemoveHandler: (id: string) => void
    buttonOnClickFilterHandler: (event: MouseEvent<HTMLButtonElement>) => void
    input: string
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    buttonAddHandler: () => void
    inputOnKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void
    error: string | null
    checkBoxHandler: (id: string, isDone: boolean) => void
    filter: FilterValuesType
}
export const Todolist2: React.FC<Todolist2PropsType> = ({
                                                            tasks,
                                                            buttonOnClickRemoveHandler,
                                                            buttonOnClickFilterHandler,
                                                            input,
                                                            inputOnChangeHandler,
                                                            buttonAddHandler,
                                                            inputOnKeyPressHandler,
                                                            error,
                                                            checkBoxHandler,
                                                            filter,
                                                            ...props
                                                        }) => {
    return (
        <div>
            <h3> What to learn</h3>
            <input className={error ? s.error : ' '} value={input} onChange={inputOnChangeHandler}
                   onKeyPress={inputOnKeyPressHandler}/>
            <Button2 title={'Add'} callBack={buttonAddHandler}/>
            <div className={s.errorMessage}> {' ' && error}</div>
            <ul>
                {tasks.map(m => <li key={m.id} className={m.isDone ? s.isDone : ' '}>
                    <button onClick={() => buttonOnClickRemoveHandler(m.id)}
                            className={s.buttonRemove}>X
                    </button>
                    <div className={s.checkBox}>
                        <CheckBox2 onChange={(e) => checkBoxHandler(m.id,
                            e.currentTarget.checked)} checked={m.isDone}/>
                    </div>
                    {m.title}
                </li>)}
            </ul>
            <div className={s.filter}><Button2 title={'All'} callBack={buttonOnClickFilterHandler}
                                               className={`${s.default} ${filter === 'all' && s.active}`}/>
            </div>
            <div className={s.filter}><Button2 title={'Active'} callBack={buttonOnClickFilterHandler}
                                               className={`${s.default} ${filter === 'active' && s.active}`}/>
            </div>
            <div className={s.filter}><Button2 title={'Completed'} callBack={buttonOnClickFilterHandler}
                                               className={`${s.default} ${filter === 'completed' && s.active}`}/>
            </div>
        </div>
    );
};

export default Todolist2;