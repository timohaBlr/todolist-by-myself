import React, { MouseEvent} from 'react';
import {FilterValuesType, TaskType} from "./TodolistContainer";
import s from './Todolist.module.css'
import {Button} from "../Button/Button";
import {CheckBox} from "../CheckBox/CheckBox";
import AddItemForm from "../AddItemForm/AddItemForm";

type TodoListPropsType = {
    tasks: Array<TaskType>
    buttonOnClickRemoveHandler: (id: string) => void
    checkBoxOnChangeHandler: (id: string, isDone: boolean) => void
    onClickFilterHandler: (event: MouseEvent<HTMLButtonElement>) => void
    error: string | null
    filter: FilterValuesType
    addTask: (title: string) => void
    /* input: string
     setInput: (input: string) => void
     buttonOnClickAddHandler: (event: MouseEvent<HTMLButtonElement>) => void
     inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
     onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void*/
}
//презентационная компонента
export const Todolist: React.FC<TodoListPropsType> = ({
                                                          addTask,
                                                          tasks, buttonOnClickRemoveHandler,
                                                          checkBoxOnChangeHandler,
                                                          error,
                                                          onClickFilterHandler, filter, ...restProps
                                                      }) => {

    return (
        <div>
            <h3>What to learn</h3>
            <AddItemForm className={error ? s.error : ''}
                         addTask={addTask}
            >Add</AddItemForm>
            {/*<Input className={error ? s.error : ''}
                   value={input}
                   onKeyPress={onKeyPressHandler}
                   onChange={inputOnChangeHandler}/>

            <Button onClick={buttonOnClickAddHandler}>Add</Button>*/}
            {error && <div className={s.errorMessage}>{error}</div>}
            <ul>
                {tasks.map(m => <li key={m.id} className={m.isDone ? s.isDone : ''}>
                    <div className={s.buttonRemove}>
                        <Button
                            onClick={() => buttonOnClickRemoveHandler(m.id)}>
                            x
                        </Button>
                    </div>
                    <div className={s.checkBox}>
                        <CheckBox onChange={(event) => checkBoxOnChangeHandler(m.id, event.currentTarget.checked)}
                                  checked={m.isDone}/>

                    </div>
                    {m.title}
                </li>)}
            </ul>
            <div>
                <div className={s.filter}>
                    <Button value={'all'}
                            className={`${s.default} ${filter === 'all' && s.active}`}
                            onClick={onClickFilterHandler}>All</Button>
                </div>
                <div className={s.filter}>
                    <Button value={'active'}
                            className={filter === 'active' ? `${s.default} ${s.active}` : s.default}
                            onClick={onClickFilterHandler}>Active</Button>
                </div>
                <div className={s.filter}>
                    <Button value={'completed'}
                            className={filter === 'completed' ? `${s.default} ${s.active}` : s.default}
                            onClick={onClickFilterHandler}>Completed</Button>
                </div>

            </div>
        </div>
    )
        ;
};

