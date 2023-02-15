import React from 'react';
import style from './Banner.module.scss';
import Content1 from '../Content/Content1';
import Content2 from '../Content/Content2';
import ImagesGroup1 from '../ImagesGroup/ImagesGroup1';
import ImagesGroup2 from '../ImagesGroup/ImagesGroup2';


const Banner = (props: {
    data: {
        images1: Array<string>,
        images2: Array<string>
    }
}) => {
    return (
        <div className={style.banner}>
            <div className={style.container}>
                <div className={style.content1}><Content1 /></div>
                <div className={style.images1}><ImagesGroup1 images={props.data.images1} /></div>
                <div className={style.images2}><ImagesGroup2 images={props.data.images2} /></div>
                <div className={style.content2}><Content2 /></div>
            </div>
        </div>
    );
}

export default Banner;
