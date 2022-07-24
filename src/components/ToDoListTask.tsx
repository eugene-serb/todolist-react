import { type } from 'os';
import React from 'react';
import { Task } from './task';

type TTaskStyles = {
    isNotCompleted: object,
    isCompleted: object,
    isNotImportant: object,
    isImportant: object,
    deleteButton: object,
};

interface IToDoListTask {
    task: Task,
    markComplete: Function,
    markImportant: Function,
    deleteTask: Function,
};

function ToDoListTask({task, markComplete, markImportant, deleteTask}: IToDoListTask) {
    let [styles, setStyles] = React.useState({} as TTaskStyles);

    function updateColours(media: any): void {
        if (media.matches) {
            setStyles({
                isNotCompleted: {
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/check_box_outline_blank_white_24dp.svg'})`,
                },
                isCompleted: {
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/check_box_white_24dp.svg'})`,
                },
                isNotImportant: {
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/star_border_white_24dp.svg'})`,
                },
                isImportant: {
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/star_white_24dp.svg'})`,
                },
                deleteButton: {
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/delete_white_24dp.svg'})`,
                },
            } as TTaskStyles);
        } else {
            setStyles({
                isNotCompleted: {
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/check_box_outline_blank_black_24dp.svg'})`,
                },
                isCompleted: {
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/check_box_black_24dp.svg'})`,
                },
                isNotImportant: {
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/star_border_black_24dp.svg'})`,
                },
                isImportant: {
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/star_black_24dp.svg'})`,
                },
                deleteButton: {
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/delete_black_24dp.svg'})`,
                },
            } as TTaskStyles);
        };
    };

    React.useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        updateColours(media);

        media.addEventListener('change', () => {
            updateColours(media);
        });
    }, []);

    return (
        <li className={[
            'taskItem',
            task.completed ? 'taskItem_completed' : '',
            task.important ? 'taskItem_important' : '',
            task.deleted ? 'taskItem_deletion' : '',
        ].join(' ')}>
            <div className='taskItem__buttonsContainer'>
                <button
                    style={task.completed ? styles.isCompleted : styles.isNotCompleted}
                    className={[
                        'taskItem__button',
                        task.completed ? 'taskItem__isCompleted' : 'taskItem__isNotCompleted'
                    ].join(' ')}
                    onClick={() => markComplete(task.id as number)}
                ></button>
                <button
                    style={task.important ? styles.isImportant : styles.isNotImportant}
                    className={[
                        'taskItem__button',
                        task.important ? 'taskItem__isImportant' : 'taskItem__isNotImportant'
                    ].join(' ')}
                    onClick={() => markImportant(task.id as number)}
                ></button>
                <button
                    style={styles.deleteButton}
                    className={[
                        'taskItem__button',
                        'taskItem__deleteButton'
                    ].join(' ')}
                    onClick={() => deleteTask(task.id as number)}
                ></button>
            </div>
            <span className="taskItem__description">{task.title as string}</span>
        </li>
    );
};

export default ToDoListTask;
