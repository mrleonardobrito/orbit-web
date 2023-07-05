export const dateHelper = {
    initTimer() {
        this.observers = [];
        setInterval(() => {
            this.notifyObservers(new Date());
        }, 1000);
    },

    getFormatedDate(date) {
        const formatedDate = date.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: '2-digit' })
        return formatedDate.split(" de ").join(" ");
    },

    addObserver(observer) {
        this.observers.push(observer);
    },

    notifyObservers(date) {
        this.observers.forEach(observer => observer.update(date));
    },

    getFormatedHour(date) {
        const formateddate = new Date(date);
        return formateddate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    },

    getHourFromStr(hourStr) {
        const [hours, minutes] = hourStr.split(':');

        const date = new Date().setHours(hours, minutes);
        return date;
    }

}