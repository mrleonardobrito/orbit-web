import Task from "./Task";

export const taskModel = {
  tasks: [],

  addTask(task) {
    this.tasks.push(task);
    this.tasks.sort((a, b) => a.initialHour - b.initialHour);
    this.notifyObservers();
  },

  getTasks() {
    return this.tasks;
  },

/*   editTask(taskID, newTask) {
    const taskIndex = this.tasks.findIndex((task) => task.getID() === taskID);
    this.tasks[taskIndex] = newTask;
    this.tasks.sort((a, b) => a.initialHour - b.initialHour);
    this.notifyObservers();
  },

  deleteTask(taskID) {
    const taskIndex = this.tasks.findIndex((task) => task.getID() === taskID);
    this.tasks.splice(taskIndex, 1);
    this.notifyObservers();
  },
 */
  addObserver(observer) {
    this.observers.push(observer);
  },

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.tasks));
  },

  init() {
    this.observers = [];
  },
};

export default taskModel;
