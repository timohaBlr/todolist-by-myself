import React, {MouseEvent, useState} from 'react';
import {Todolist} from "./Todolist";
import {v1} from "uuid";
import {CreateTodoList} from "./CreateTodoList/CreateTodoList";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type TodoListTasksType = {
    [key: string]: Array<TaskType>
}
type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type FilterValuesType = 'all' | 'active' | 'completed'
type TodolistContainerPropsType = {}


export const TodolistContainer: React.FC<TodolistContainerPropsType> = ({...restProps}) => {
    const todolistID1 = v1();
    const todolistID2 = v1();

    const [todoLists, setTodoLists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<TodoListTasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Redux", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Games", isDone: true},
            {id: v1(), title: "Courses", isDone: false},
        ],
    });

    const removeTask = (todolistId: string, id: string) => {
        let usedTasks = tasks[todolistId]
        if (usedTasks) {
            tasks[todolistId] = usedTasks.filter(f => f.id !== id)
        }
        setTasks({...tasks})
    }
    const addTask = (title: string, todolistId: string) => {
        const task = {id: v1(), title: title, isDone: false};
        tasks[todolistId] = [task, ...tasks[todolistId]];
        console.log(task)
        setTasks({...tasks})
    }
    const changeTaskStatus = (id: string, isDone: boolean, todolistId: string) => {

        let task = tasks[todolistId].find(f => f.id === id)

        /**
         * почему isDone приходит противоположный.
         * можно ли задать стиль с используя отношение между родительским и всеми инпутами внутри
         */
        if (task) {
            task.isDone = !isDone
        }
        setTasks({...tasks})
    }
    const onClickFilterHandler = (event: MouseEvent<HTMLButtonElement>) => {
        const filter = event.currentTarget.value as FilterValuesType
        const id = event.currentTarget.id
        const todolist = todoLists.find(todolist => todolist.id === id)
        if (todolist) {
            todolist.filter = filter
        }
        setTodoLists([...todoLists])
    }
    const createToDoList = (title: string) => {
        const toDoListID = v1();
        const newToDoList: TodolistsType = {id: toDoListID, title: title, filter: 'all'};
        setTodoLists([newToDoList, ...todoLists])
        tasks[toDoListID] = [];
        setTasks({...tasks})
    }
    const changeTaskName = (id: string, title: string, todolistId: string) => {
        let task = tasks[todolistId].find(f => f.id === id)
        if (task) {
            task.title = title
        }
        setTasks({...tasks})
    }
    const editToDoListTitle = (title: string, todolistId: string) => {
        const todolist = todoLists.find(todolist => todolist.id === todolistId)
        if (todolist) {
            todolist.title = title
            setTodoLists([ ...todoLists])
        }
    }
    const removeToDoList = (id: string) => {
        setTodoLists(todoLists.filter(todolist => todolist.id!==id))
    }

    return (
        <div>
            <CreateTodoList
                callBack={createToDoList}/>
            {todoLists.map(todolist => {
                    const usedTasks = tasks[todolist.id]

                    const filteredTasks = todolist.filter === 'active' ? usedTasks.filter(f => !f.isDone)
                        : todolist.filter === 'completed' ? usedTasks.filter(f => f.isDone) : usedTasks
                    return (
                        <Todolist
                            key={todolist.id}
                            id={todolist.id}
                            title={todolist.title}
                            addTask={addTask}
                            tasks={filteredTasks}
                            removeTask={removeTask}
                            changeTaskStatus={changeTaskStatus}
                            onClickFilterHandler={onClickFilterHandler}
                            filter={todolist.filter}
                            changeTaskName={changeTaskName}
                            editToDoListTitle={editToDoListTitle}
                            removeToDoList={removeToDoList}
                        />)
                }
            )
            }
        </div>
    );
};

