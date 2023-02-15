interface Timer {
    hours: number,
    minutes: number,
    seconds: number
}

const date: Date = new Date();

const timeEnd: Timer = {
    hours: 0,
    minutes: 0,
    seconds: 0
}

const timeNow: Timer = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
}

const secondsEnd: number = timeEnd.seconds + timeEnd.minutes * 60 + timeEnd.hours * 3600;
const secondsNow: number = timeNow.seconds + timeNow.minutes * 60 + timeNow.hours * 3600;

let secondsDifference: number = secondsEnd - secondsNow;
if (secondsDifference < 0) {
    secondsDifference += 24 * 3600;
}

export default secondsDifference;