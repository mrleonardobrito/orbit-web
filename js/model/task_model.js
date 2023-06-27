const Task = {
    name: '',
    initialHour: new Date(),
    finalHour: new Date(),
    status: 'Todo',

    constructor(name = '', initialHour = new Date(), finalHour = new Date(), status = "Todo") {
        this.name = name;
        this.initialHour = initialHour;
        this.finalHour = finalHour;
        this.status = status;
    },

    getName() {
        return this.name;
    },

    getDueInterval() {
        const initialHour = this.initialHour.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        const finalHour = this.finalHour.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        return `${initialHour} - ${finalHour}`;
    }
}

const taskModel = {
    tasks: [],

    addTask(task) {
        this.tasks.push(task);
        this.notifyObservers();
    },

    getTasks() {
        return this.tasks;
    },

    addObserver(observer) {
        this.observers.push(observer);
    },

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.tasks));
    },

    init() {
        this.observers = [];
    }
}

taskModel.init();