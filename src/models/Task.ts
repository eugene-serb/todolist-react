import ITask from './ITask';

class Task implements ITask {
    readonly id: number;
    title: string;
    completed: boolean;
    important: boolean;
    deleted: boolean;

    constructor(title: string) {
        this.id = Date.now();
        this.title = title;
        this.completed = false;
        this.important = false;
        this.deleted = false;
    }
}

export default Task;

