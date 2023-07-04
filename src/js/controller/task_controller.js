import {taskModel} from '../model/task_model';
import {taskView} from '../view/task_view';
import Task from '../model/Task';

export const taskController = {
  init() {
    taskModel.init();
    taskModel.addObserver(this);    
  },

  addTask(name, initialHour, finalHour, status) {
    taskModel.addTask(new Task(name, initialHour, finalHour, status));
  },

  update(tasks) {
    taskView.renderTasks(tasks);
  },
};
