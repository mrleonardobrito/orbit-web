const taskView = {
    displayTasks(tasks) {
        const [todoColumn, doingColumn, doneColumn] = document.querySelectorAll('.column-items');

        tasks.forEach(task => {
            const markup = `
                <div class="task">
                    <div class="task-color"></div>
                    <div class="task-info">
                        <p class="font-subtitle task-name">${task.getName()}</p>
                        <p class="font-base task-hour">${task.getDueInterval()}</p>
                    </div>
                </div>
            `

            if (task.status == 'Done') {
                doneColumn.insertAdjacentHTML('beforeend', markup);
            } else if (task.data.status == 'Doing') {
                doingColumn.insertAdjacentHTML('beforeend', markup);
            } else {
                todoColumn.insertAdjacentElement('beforeend', markup);
            }
        });
    },
}