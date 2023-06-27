window.onload = function() {
    taskController.init();

    taskController.addTask('Estudar JavaScript', new Date(2020, 10, 10, 10, 0, 0), new Date(2020, 10, 10, 12, 0, 0), 'Todo');
    taskController.addTask('Estudar JavaScript', new Date(2020, 10, 10, 10, 0, 0), new Date(2020, 10, 10, 12, 0, 0), 'Doing');
    taskController.addTask('Estudar JavaScript', new Date(2020, 10, 10, 10, 0, 0), new Date(2020, 10, 10, 12, 0, 0), 'Done');
}