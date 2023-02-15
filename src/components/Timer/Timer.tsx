import React from 'react';
import { useState, useEffect } from "react";
import style from './Timer.module.scss';
import { format } from '../../helpers/format';
import { setStopTime, getTime } from '../../helpers/timer';


const Timer = () => {
    const timeStop: number = setStopTime(0, 0, 0);
    const [time, setTime] = useState(getTime(timeStop));

    let hours: number = Math.floor(time / 3600);
    let minutes: number = Math.floor((time - hours * 3600) / 60);
    let seconds: number = time - minutes * 60 - hours * 3600;

    useEffect(() => {
        const interval = setInterval(() => {
            let currentTime: number = time;
            if (currentTime >= 1) {
                currentTime = getTime(timeStop);
                setTime(currentTime);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className={style.timer}>
            <span>{format(hours)}</span>
            <span>:</span>
            <span>{format(minutes)}</span>
            <span>:</span>
            <span>{format(seconds)}</span>
        </div>
    );
}

export default Timer;
