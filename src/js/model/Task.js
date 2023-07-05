import {dateHelper} from '../utils/date_helper';

class Task {
  constructor(name = '', initialHour = new Date(), finalHour = new Date(), status = 'Todo') {
    this.id = crypto.randomUUID();
    this.name = name;
    this.initialHour = initialHour;
    this.finalHour = finalHour;
    this.status = status;
  }

  getID() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDueInterval() {
    const initialHour = dateHelper.getFormatedHour(this.initialHour);
    const finalHour = dateHelper.getFormatedHour(this.finalHour);

    return `${initialHour} - ${finalHour}`;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }
}

export default Task;
