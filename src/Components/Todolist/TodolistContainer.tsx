import React, {MouseEvent, useState} from 'react';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type TodoListTasksType = {
    [key: string]: Array<TaskType>
}
type TodolistContainerPropsType = {}
export type FilterValuesType = 'all' | 'active' | 'completed'

export const TodolistContainer: React.FC<TodolistContainerPropsType> = ({...restProps}) => {
    const todolistID1 = v1();
    const todolistID2 = v1();

    const [todoLists, setTodoLists] = useState([
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


    const [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (id: string, todolistId: string) => {
        let usedTasks = tasks[todolistId]
        if (usedTasks) {
            tasks[todolistId] = usedTasks.filter(f => f.id !== id)
        }
        setTasks({...tasks})
    }

    const addTask = (title: string, todolistId: string) => {
        const task = {id: v1(), title: title, isDone: false};
        tasks[todolistId] = [task, ...tasks[todolistId]];
        setTasks({...tasks})
    }

    const changeTaskStatus = (id: string, isDone: boolean, todolistId: string) => {

        let task = tasks[todolistId].find(f => f.id === id)

        /**
         * почему isDone приходит противоположный.
         * можно ли задать стиль с используя отношение между родительским и всеми инпутами внутри
          */
        if (task) {
                       task.isDone = isDone
        }
        setTasks({...tasks})
    }
    const onClickFilterHandler = (event: MouseEvent<HTMLButtonElement>) => {

        // setFilter(event.currentTarget.textContent!.toLowerCase() as FilterValuesType)
    }

    return (
        <div>{todoLists.map(todolist => {
                const usedTasks = tasks[todolist.id]

                const filteredTasks = filter === 'active' ? usedTasks.filter(f => !f.isDone)
                    : filter === 'completed' ? usedTasks.filter(f => f.isDone) : usedTasks
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
                        filter={filter}
                    />)
            }
        )
        }
        </div>
    );
};

