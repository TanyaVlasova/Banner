import style from './Content1.module.scss';


const Content1 = () => {
    return (
        <div className={style.content}>
            <span className={style.date}>13 — 19 февраля</span>
            <h1 className={style.title}>V-Day SALE</h1>
            <span className={style.text}>С любовью к интерьеру!</span>
            <a className={style.link} href='http://localhost:3000' target='_blank' rel="noreferrer">Купить</a>
        </div>
    )
}

export default Content1;