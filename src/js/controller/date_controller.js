import { dateHelper } from "../utils/date_helper";
import { headerView } from "../view/header_view";

export const dateController = {
    init() {
        dateHelper.initTimer();
        dateHelper.addObserver(this);

        headerView.renderDate(dateHelper.getFormatedDate(new Date()));
    },

    update(date) {
        const formatedHour = dateHelper.getFormatedHour(date);
        headerView.renderHour(formatedHour);
    }
}