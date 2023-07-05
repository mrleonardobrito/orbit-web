import { elements } from "./base"

export const headerView = {
    renderDate(date) {
        elements.header.date.textContent = date;
    },

    renderHour(hour) {
        elements.header.hour.textContent = hour;
    }
}