import React from 'react';
import ToDoListForm from './ToDoListForm';
import ToDoListList from './ToDoListList';
import { Task } from './task';

function ToDoList() {
    let [tasks, setTasks] = React.useState([] as Task[]);

    function addTask(title: string): void {
        const result: Task[] = filterTasks(tasks.concat(new Task(title))) as Task[];
        setTasks(result as Task[]);
        setLocalStorage(result as Task[]);
    };

    function deleteAllTasks(): void {
        setTasks([] as Task[]);
        setLocalStorage([] as Task[]);
    };

    function deleteTask(id: number): void {
        const result: Task[] = filterTasks(tasks.filter(task => task.id !== id)) as Task[];
        setTasks(result as Task[]);
        setLocalStorage(result as Task[]);
    };

    function markComplete(id: number): void {
        const result: Task[] = filterTasks(tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            };
            return task as Task;
        })) as Task[];
        setTasks(result as Task[]);
        setLocalStorage(result as Task[]);
    };

    function markImportant(id: number): void {
        const result: Task[] = filterTasks(tasks.map(task => {
            if (task.id === id) {
                task.important = !task.important;
            };
            return task as Task;
        })) as Task[];
        setTasks(result as Task[]);
        setLocalStorage(result as Task[]);
    };

    function filterTasks(tasks: Task[]): Task[] {
        if (tasks.length > 0) {
            const activeImportantTasks = tasks.length && tasks.filter(item => item.completed === false && item.important === true);
            const activeTasks = tasks.length && tasks.filter(item => item.completed === false && item.important === false);
            const completedImportantTasks = tasks.length && tasks.filter(item => item.completed === true && item.important === true);
            const completedTasks = tasks.length && tasks.filter(item => item.completed === true && item.important === false);
            return [...(activeImportantTasks as Task[]), ...(activeTasks as Task[]), ...(completedImportantTasks as Task[]), ...(completedTasks as Task[])];
        };
        return [] as Task[];
    };

    function getLocalStorage(): Task[] {
        return localStorage.tasksreact
            ? JSON.parse(localStorage.getItem('tasksreact') || '{}') as Task[]
            : [] as Task[];
    };

    function setLocalStorage(tasks: Task[]): void {
        localStorage.setItem('tasksreact', JSON.stringify(tasks));
    };

    React.useEffect(() => {
        setTasks(getLocalStorage());
    }, []);

    return (
        <div className='todoList'>
            <ToDoListForm
                addTask={addTask as Function}
                deleteAllTasks={deleteAllTasks as Function}
            />
            <ToDoListList
                tasks={tasks as Task[]}
                markComplete={markComplete as Function}
                markImportant={markImportant as Function}
                deleteTask={deleteTask as Function}
            />
        </div>
    );
};

export default ToDoList;
