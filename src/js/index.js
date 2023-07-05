import { dateController } from "./controller/date_controller";
import { taskController } from "./controller/task_controller";

const state = {};

window.onload = () => {
  taskController.init();
  dateController.init();
};
