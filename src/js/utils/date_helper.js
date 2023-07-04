export const dateHelper = {
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