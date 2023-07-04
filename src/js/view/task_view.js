import { elements } from "./base";

export const taskView = {
    renderTasks(tasks) {
      elements.todo.items.innerHTML = '';
      elements.doing.items.innerHTML = '';
      elements.done.items.innerHTML = '';

      tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const markup = `
            <div class="task-color"></div>
            <span class="task-id" hidden>${task.getID()}</span>
            <div class="task-info">
              <p class="font-subtitle task-name">${task.getName()}</p>
              <p class="font-base task-hour">${task.getDueInterval()}</p>
            </div>
        `;
        taskElement.insertAdjacentHTML('beforeend', markup);
  
        if (task.getStatus() == 'Done') {
          elements.done.items.insertAdjacentElement('beforeend', taskElement);
        } else if (task.getStatus() == 'Doing') {
          elements.doing.items.insertAdjacentElement('beforeend', taskElement);
        } else {
          elements.todo.items.insertAdjacentElement('beforeend', taskElement);
        }
      });
    },

    /* setupWindowListener() {
      const addTaskModal = document.getElementById('add-task-modal');
      const editTaskModal = document.getElementById('edit-task-modal');

      window.addEventListener('click', (event) => { 
        if (event.target == addTaskModal) {
          addTaskModal.style.display = 'none';
        }
        if (event.target == editTaskModal) {
          editTaskModal.style.display = 'none';
        }
      });
    }, */

    /* setupAddTaskListener(handler) {
      const columns = document.querySelectorAll('.column');
      const addTaskModal = document.getElementById('add-task-modal');
      let handledColumn = undefined;
  
      columns.forEach(column => {
        column.querySelector('.column-items').addEventListener('dblclick', () => {
          addTaskModal.style.display = 'flex';
          handledColumn = column;
        });
      });
      
      addTaskModal.addEventListener('addTask', (event) => {
        const taskName = addTaskModal.querySelector('#taskNameInput').value;
        const initialHour = addTaskModal.querySelector('#initialHourInput').value;
        const finalHour = addTaskModal.querySelector('#finalHourInput').value;
        const status = handledColumn.querySelector('.column-title').textContent;

        const taskDTO = {
          taskName: taskName ? taskName : 'Tarefa sem nome',
          initialHour: dateHelper.getHourFromStr(initialHour),
          finalHour: dateHelper.getHourFromStr(finalHour),
          status: status
        };

        handler(taskDTO.taskName, taskDTO.initialHour, taskDTO.finalHour, taskDTO.status);
      });
    }, */

    /* setupEditTaskListener(handler) {
      const editTaskModal = document.getElementById('edit-task-modal');
      const editTaskButton = document.getElementById('editTaskButton');

      editTaskButton.onclick = (event) => {
        event.preventDefault();
        editTaskModal.style.display = 'none';

        const taskName = editTaskModal.querySelector('#taskNameInput').value;
        const initialHour = editTaskModal.querySelector('#initialHourInput').value;
        const finalHour = editTaskModal.querySelector('#finalHourInput').value;
        const status = handledTask.querySelector('.column-title').textContent;

        const taskDTO = {
          taskID: handledTask.querySelector('.task-id').textContent,
          taskName: taskName ? taskName : 'Tarefa sem nome',
          initialHour: dateHelper.getHourFromStr(initialHour),
          finalHour: dateHelper.getHourFromStr(finalHour),
          status: status
        };

        handler(taskDTO.taskID, taskDTO.taskName, taskDTO.initialHour, taskDTO.finalHour, taskDTO.status);
      }
    }, */

    /* setupDeleteTaskListener(handler) {
      const deleteTaskButton = document.getElementById('deleteTaskButton');
      let handledTask = undefined;
    
      deleteTaskButton.addEventListener('click', (event) => {
        event.preventDefault();
        const taskID = handledTask.querySelector('.task-id').textContent;

        handler(taskID);
      });        
    } */
};
  