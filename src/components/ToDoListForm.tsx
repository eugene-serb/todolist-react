import React from 'react';

interface IToDoListForm {
    addTask: Function,
    deleteAllTasks: Function,
};

function ToDoListForm({ addTask, deleteAllTasks }: IToDoListForm) {
    let [value, setValue] = React.useState('' as string);

    function submitTask(): void {
        if (value.trim()) {
            addTask(value as string);
            setValue('' as string);
        };
    };

    return (
        <fieldset className='todoList-form'>
            <input
                type='text'
                placeholder='Description'
                className='todoList-form__description-task'
                onChange={event => setValue(event.target.value as string)}
                value={value} />
            <button
                className='todoList-form__addTaskButton'
                onClick={() => submitTask()}>Add task</button>
            <button
                className='todoList-form__deleteAllTaskButton'
                onClick={() => deleteAllTasks()}>Delete all</button>
        </fieldset>
    );
};

export default ToDoListForm;

