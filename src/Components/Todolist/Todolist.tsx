import React, {ChangeEvent, MouseEvent} from 'react';
import {FilterValuesType, TaskType} from "./TodolistContainer";
import s from './Todolist.module.css'
import {Button} from "../Button/Button";
import {CheckBox} from "../CheckBox/CheckBox";
import {AddTask} from '../AddTask/AddTask';
import {EditableSpan} from "../EditableSpan/EditableSpan";


type TodoListPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, id: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    onClickFilterHandler: (event: MouseEvent<HTMLButtonElement>) => void
    filter: FilterValuesType
    addTask: (title: string, todolistId: string) => void
    changeTaskName: (id: string, title: string, todolistId: string) => void
    editToDoListTitle: (title: string, todolistId: string) => void
    removeToDoList: (id: string) => void

}
//презентационная компонента
export const Todolist: React.FC<TodoListPropsType> = ({
                                                          removeToDoList,
                                                          editToDoListTitle,
                                                          changeTaskName,
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
const removeToDoListHandler = () => {
    removeToDoList(id)
}
const addTaskHandler = (title: string) => {
     addTask(title, id)
}
    return (
        <div>
            <h3>
                <EditableSpan callBack={(title: string) => editToDoListTitle(title, id)}>
                    {title}
                </EditableSpan>
                <Button onClick={removeToDoListHandler}>X</Button>
            </h3>
            <AddTask
                onClick={addTaskHandler}
            >Add</AddTask>

            <ul>
                {tasks.map(task => {
                    const onChangeHandler = () => {
                        changeTaskStatus(task.id, task.isDone, id)

                    }
                    const removeTaskHandler = () => {
                        removeTask(id, task.id)
                    }
                    const editTaskHandler = (title: string) => {
                        changeTaskName(task.id, title, id)
                    }
                    return (
                        <li key={task.id} className={task.isDone ? s.isDone : ''}>
                            <div className={s.buttonRemove}>
                                <Button id={id}
                                        onClick={removeTaskHandler}>
                                    x
                                </Button>
                            </div>
                            <div className={s.checkBox}>
                                <CheckBox
                                    onChange={onChangeHandler}
                                    checked={task.isDone}/>
                            </div>
                            <EditableSpan callBack={editTaskHandler}>
                                {task.title}
                            </EditableSpan>
                        </li>)
                })}
            </ul>
            <div>
                <div className={s.filter}>
                    <Button id={id} value={'all'}
                            className={`${s.default} ${filter === 'all' && s.active}`}
                            onClick={onClickFilterHandler}>All</Button>
                </div>
                <div className={s.filter}>
                    <Button id={id} value={'active'}
                            className={filter === 'active' ? `${s.default} ${s.active}` : s.default}
                            onClick={onClickFilterHandler}>Active</Button>
                </div>
                <div className={s.filter}>
                    <Button id={id} value={'completed'}
                            className={filter === 'completed' ? `${s.default} ${s.active}` : s.default}
                            onClick={onClickFilterHandler}>Completed</Button>
                </div>

            </div>
        </div>
    )
        ;
};

