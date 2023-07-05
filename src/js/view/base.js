export const elements = { 
    columns: [
        { header: document.getElementById('todo-title'), items: document.getElementById('todo-items') },
        { header: document.getElementById('doing-title'), items: document.getElementById('doing-items') },
        { header: document.getElementById('done-title'), items: document.getElementById('done-items') },    
    ],
    forms: {
        addTask: document.forms['addTaskForm'],
        editTask: document.forms['editTaskForm'],
    }, 
    modals: {
        addTask: document.getElementById('add-task-modal'),
        editTask: document.getElementById('edit-task-modal'),
    },
    header: {
        date: document.getElementById('date'),
        hour: document.getElementById('hour'),
    }
};