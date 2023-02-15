import React from 'react';
import { useState, useEffect } from "react";
import style from './Timer.module.scss';
import { format } from '../../helpers/format';


const Timer = (props: { time: number }) => {
    const [time, setTime] = useState(props.time);

    let hours: number = Math.floor(time / 3600);
    let minutes: number = Math.floor((time - hours * 3600) / 60);
    let seconds: number = time - minutes * 60 - hours * 3600;

    useEffect(() => {
        let currentTime: number = time;
        const interval = setInterval(() => {
            if (currentTime >= 1) {
                currentTime--;
                setTime(currentTime);
            } else {
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    })

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
