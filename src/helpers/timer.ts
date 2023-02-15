export const setStopTime = (hours: number, minutes: number, seconds: number): number => {
    return seconds + minutes * 60 + hours * 3600;
}

export const getTime = (timeStop: number): number => {
    const date: Date = new Date();
    const timeNow: number = date.getSeconds() + date.getMinutes() * 60 + date.getHours() * 3600;
    let time: number = timeStop - timeNow;

    return (time > 0) ? time : time += 24 * 3600
}
