const taskController = {
    init() {
        taskModel.addObserver(taskView);
    },

    addTask(name, initialHour, finalHour, status) {
        taskModel.addTask(new Task(name, initialHour, finalHour, status));
    }
}