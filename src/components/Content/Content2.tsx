import style from './Content2.module.scss';
import Timer from '../Timer/Timer';


const Content2 = (props: {time: number}) => {
    return (
        <div className={style.content}>
            <span className={style.text}>До конца акции</span>
            <Timer time={props.time}/>
            <p className={style.explanation}>Скидка не суммируется с другими промокодами и спецпредложениями.</p>
        </div>
    )
}

export default Content2;