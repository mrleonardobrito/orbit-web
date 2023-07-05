import {taskModel} from '../model/task_model';
import {taskView} from '../view/task_view';
import Task from '../model/Task';

export const taskController = {
  init() {
    taskModel.init();
    taskModel.addObserver(this);  
    
    taskView.setupWindowListener();
    taskView.setupAddTaskListener(this.addTask);
    taskView.setupEditTaskListener(this.editTask, this.deleteTask);
    taskView.setupMoveTaskListener(this.moveTask);
  },

  addTask(name, initialHour, finalHour, status) {
    taskModel.addTask(new Task(name, initialHour, finalHour, status));
  },

  editTask(taskID, name, initialHour, finalHour, status) {   
    taskModel.editTask(taskID, new Task(name, initialHour, finalHour, status));
  },

  deleteTask(taskID) {
    taskModel.deleteTask(taskID);
  },

  moveTask(taskID, status) {
    console.log(taskID, status);
    taskModel.moveTask(taskID, status);
  },

  update(tasks) {
    taskView.renderTasks(tasks);
  },
};
