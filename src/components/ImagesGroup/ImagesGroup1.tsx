import style from './ImagesGroup1.module.scss';
import Image from './Image'


const ImagesGroup1 = (props: { images: Array<string> }) => {
    return (
        <div className={style.group}>
            <Image src={props.images[0]} alt='image1' />
            <Image src={props.images[1]} alt='image2' />
            <Image src={props.images[2]} alt='image3' />
            <Image src={props.images[3]} alt='image4' />
            <Image src={props.images[4]} alt='image5' />
        </div>
    )
}

export default ImagesGroup1;