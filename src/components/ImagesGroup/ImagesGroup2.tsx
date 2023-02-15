import style from './ImagesGroup2.module.scss';
import Image from './Image'


const ImagesGroup2 = (props: { images: Array<string> }) => {
    return (
        <div className={style.group}>
            <Image src={props.images[0]} alt='image6' />
            <Image src={props.images[1]} alt='image7' />
            <Image src={props.images[2]} alt='image8' />
            <Image src={props.images[3]} alt='image9' />
            <Image src={props.images[4]} alt='image10' />
        </div>
    )
}

export default ImagesGroup2;