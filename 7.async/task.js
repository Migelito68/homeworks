class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("Ошибка! Параметр id не передан.");
        }

        if (this.alarmCollection.some(clock => clock.id === id)) {
            return console.error("Будильник с таким id уже существует!");
        }

        return this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id) {
        let start = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((clock) => clock.id !== id);
        let finish = this.alarmCollection.length;
        return (start > finish);
    }

    getCurrentFormattedTime() {
        let date = new Date(); 
        this.time = `${date.getHours()}:${date.getMinutes()}`;
        return this.time;
    }

    start() {
        const checkClock = (clock) => {
            if (this.getCurrentFormattedTime() === clock.time) {
                clock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((clock) => checkClock(clock));
            }, 1000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((clock) => console.log(`Будильник №${clock.id} заведен на ${clock.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}

//------------------------test--------------------------------

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("20:45", () => console.log("Пора вставать!"), 1);
phoneAlarm.addClock("20:46", () => {
    console.log("Давай, встаай уже!");
    phoneAlarm.removeClock(2);
    }, 2);
//phoneAlarm.addClock("20:04", () => console.log("Иди умываться!"));
phoneAlarm.addClock("20:47", () => {
    console.log("Вставай, а то проспишь!");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);
//phoneAlarm.addClock("20:03", () => console.log("Пора! Вставай, а то проспишь!"), 1);
phoneAlarm.printAlarms();
phoneAlarm.start();
