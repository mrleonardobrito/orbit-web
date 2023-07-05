import { elements } from "./base";
import { dateHelper } from "../utils/date_helper";

export const taskView = {
    renderTasks(tasks) {
      const [todo, doing, done] = elements.columns

      todo.items.innerHTML = '';
      doing.items.innerHTML = '';
      done.items.innerHTML = '';
      
      tasks.forEach(task => {
        const taskElement = this.createTaskElement(task);
        taskElement.setAttribute('draggable', 'true');  
        const column = this.getColumn(task);

        column.appendChild(taskElement);
      });
    },

    createTaskElement(task) {   
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');

      const markup = `
          <div class="task-color"></div>
          <span class="task-id" id="taskID" hidden>${task.getID()}</span>
          <div class="task-info">
            <p class="font-subtitle task-name">${task.getName()}</p>
            <p class="font-base task-hour">${task.getDueInterval()}</p>
          </div>
      `;
      taskElement.insertAdjacentHTML('beforeend', markup);

      taskElement.addEventListener('dblclick', (event) => {
        elements.modals.editTask.style.display = 'flex';
        taskElement.dispatchEvent(new CustomEvent('editTask', { detail: task, bubbles: true }));
      }); 

      return taskElement;      
    },

    getColumn(task) {
      const [todo, doing, done] = elements.columns

      if (task.getStatus() == 'Done') {
        return done.items;
      } else if (task.getStatus() == 'Doing') {
        return doing.items;
      } else {
        return todo.items;
      }
    },

    setupWindowListener() {
      const addTaskModal = elements.modals.addTask;
      const editTaskModal = elements.modals.editTask;

      window.addEventListener('click', (event) => { 
        if (event.target == addTaskModal) {
          addTaskModal.style.display = 'none';
        }
        if (event.target == editTaskModal) {
          editTaskModal.style.display = 'none';
        }
      });

      document.addEventListener('dragstart', (event) => {
        event.target.closest('.task').classList.add('dragging');
      });
    },

    setupAddTaskListener(handler) {
      let handledColumn = undefined;
      const addTask = elements.forms.addTask;
  
      elements.columns.forEach(column => {
        column.items.addEventListener('dblclick', () => {
          elements.modals.addTask.style.display = 'flex';
          handledColumn = column;
        });
      });
      
      addTask.addEventListener('submit', (event) => {
        event.preventDefault();
        elements.modals.addTask.style.display = 'none';
          
        const taskName = addTask.querySelector('#taskNameInput').value;
        const initialHour = addTask.querySelector('#initialHourInput').value;
        const finalHour = addTask.querySelector('#finalHourInput').value;
        const status = handledColumn.header.textContent;

        const taskDTO = {
          taskName: taskName ? taskName : 'Tarefa sem nome',
          initialHour: dateHelper.getHourFromStr(initialHour ? initialHour : '00:00') ,
          finalHour: dateHelper.getHourFromStr(finalHour ? finalHour : '00:00'),
          status: status
        };

        handler(taskDTO.taskName, taskDTO.initialHour, taskDTO.finalHour, taskDTO.status);
        
        this.clearForm(addTask);
      });
    },

    clearForm(form) {
      form.querySelector('#taskNameInput').value = '';
      form.querySelector('#initialHourInput').value = '00:00';
      form.querySelector('#finalHourInput').value = '00:00';  
    },

   setupEditTaskListener(editTask, deleteTask) {
      const editTaskModal = elements.modals.editTask;
      const editTaskForm = elements.forms.editTask;
      let handledTask = undefined;

      document.addEventListener('editTask', (event) => {
        handledTask = event.detail
        console.log(event.detail);
      }); 
      
      editTaskForm.onsubmit = (event) => {
        event.preventDefault();
      };

      editTaskForm["editTaskButton"].addEventListener('click', (event) => {
        event.preventDefault();
        editTaskModal.style.display = 'none';

        const taskName = editTaskModal.querySelector('#taskNameInput').value;
        const initialHour = editTaskModal.querySelector('#initialHourInput').value;
        const finalHour = editTaskModal.querySelector('#finalHourInput').value;
        const status = handledTask.getStatus();

        const taskDTO = {
          taskID: handledTask.getID(),
          taskName: taskName ? taskName : 'Tarefa sem nome',
          initialHour: dateHelper.getHourFromStr(initialHour),
          finalHour: dateHelper.getHourFromStr(finalHour),
          status: status ? status : 'Todo'
        };

        editTask(taskDTO.taskID, taskDTO.taskName, taskDTO.initialHour, taskDTO.finalHour, taskDTO.status);
      });

      editTaskForm["deleteTaskButton"].addEventListener('click', (event) => {
        event.preventDefault();
        editTaskModal.style.display = 'none';

        deleteTask(handledTask.getID());
      });
    },

    getNewPosition(column, clientY) {
      const tasks = column.querySelectorAll('.task:not(.dragging)');
      let result;

      for (let referTask of tasks) {
        const box = referTask.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;

        if (clientY >= boxCenterY) {
          result = referTask;
        }
      }

      return result;
    },

    setupMoveTaskListener(moveTask) {
      const columns = elements.columns;

      columns.forEach(column => {
        column.items.addEventListener('dragover', (event) => {
          event.preventDefault();

          const dragging = document.querySelector('.dragging');
          const applyAfter = this.getNewPosition(column.items, event.clientY);

          if (applyAfter) {
            applyAfter.insertAdjacentElement('afterend', dragging);
          } else {
            column.items.prepend(dragging);
          }
        });

        column.items.addEventListener('dragend', (event) => {
          event.preventDefault();
          const dragging = document.querySelector('.dragging');
          const status = column.header.textContent;

          moveTask(dragging.querySelector('.task-id').textContent, status);
          dragging.classList.remove('dragging');
        });
      });
    }
};
  