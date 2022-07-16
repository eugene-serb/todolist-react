import React from 'react';
import { Task } from './task';

interface IToDoListTask {
    task: Task,
    markComplete: Function,
    markImportant: Function,
    deleteTask: Function,
};

function ToDoListTask({task, markComplete, markImportant, deleteTask}: IToDoListTask) {
    return (
        <li className={[
            'taskItem',
            task.completed ? 'taskItem_completed' : '',
            task.important ? 'taskItem_important' : '',
            task.deleted ? 'taskItem_deletion' : '',
        ].join(' ')}>
            <div className='taskItem__buttonsContainer'>
                <button
                    className={[
                        'taskItem__button',
                        task.completed ? 'taskItem__isCompleted' : 'taskItem__isNotCompleted'
                    ].join(' ')}
                    onClick={() => markComplete(task.id as number)}
                >#</button>
                <button
                    className={[
                        'taskItem__button',
                        task.important ? 'taskItem__isImportant' : 'taskItem__isNotImportant'
                    ].join(' ')}
                    onClick={() => markImportant(task.id as number)}
                >#</button>
                <button
                    className={['taskItem__button', 'taskItem__deleteButton'].join(' ')}
                    onClick={() => deleteTask(task.id as number)}
                >#</button>
            </div>
            <span className="taskItem__description">{task.title as string}</span>
        </li>
    );
};

export default ToDoListTask;
