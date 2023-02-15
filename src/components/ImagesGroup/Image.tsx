import style from './Image.module.scss';


const Image = (props: { src: string, alt: string }) => {
    return (
        <div className={style.container}>
            <img className={style.image} src={props.src} alt={props.alt} />
        </div>
    )
}

export default Image;