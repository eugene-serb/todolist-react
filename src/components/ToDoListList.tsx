import React from 'react';
import ToDoListTask from './ToDoListTask';
import Task from '../models/Task';

interface IToDoListList {
    tasks: Task[],
    markComplete: Function,
    markImportant: Function,
    deleteTask: Function,
};

function ToDoListList({tasks, markComplete, markImportant, deleteTask}: IToDoListList) {
    return (
        <div className="todoList-list">
            <h3>Tasks:</h3>
            <ul className="todoList-wrapper">
                {
                    tasks.map(task => {
                        return (
                            <ToDoListTask
                                key={task.id as number}
                                task={task as Task}
                                markComplete={markComplete as Function}
                                markImportant={markImportant as Function}
                                deleteTask={deleteTask as Function}
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default ToDoListList;

