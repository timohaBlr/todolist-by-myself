import React, {ChangeEvent, MouseEvent} from 'react';
import {FilterValuesType, TaskType} from "./TodolistContainer";
import s from './Todolist.module.css'
import {Button} from "../Button/Button";
import {CheckBox} from "../CheckBox/CheckBox";
import AddItemForm from "../AddItemForm/AddItemForm";

type TodoListPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    onClickFilterHandler: (event: MouseEvent<HTMLButtonElement>) => void
    filter: FilterValuesType
    addTask: (title: string, todolistId: string) => void
}
//презентационная компонента
export const Todolist: React.FC<TodoListPropsType> = ({
                                                          id,
                                                          addTask,
                                                          tasks,
                                                          removeTask,
                                                          title,
                                                          changeTaskStatus,
                                                          onClickFilterHandler,
                                                          filter,
                                                          ...restProps
                                                      }) => {

    return (
        <div>
            <h3>{title}</h3>
            <AddItemForm
                addTask={(e) => addTask(e, id)}
            >Add</AddItemForm>
            {/* {error && <div className={s.errorMessage}>{error}</div>}*/}
            <ul>
                {tasks.map(m => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        changeTaskStatus(m.id, e.currentTarget.checked, id)

                    }
                    const removeTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        removeTask(m.id, id)
                                           }

                    return (
                        <li key={m.id} className={m.isDone ? s.isDone : ''}>
                            <div className={s.buttonRemove}>
                                <Button
                                    onClick={() => removeTask(m.id, id)}>
                                    x
                                </Button>
                            </div>
                            <div className={s.checkBox}>
                                <CheckBox

                                    onChange={onChangeHandler}
                                    checked={m.isDone}/>

                            </div>
                            {m.title}
                        </li>)
                })}
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

