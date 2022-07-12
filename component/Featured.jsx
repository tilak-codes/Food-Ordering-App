import React, { useEffect, useState } from 'react'
import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
const Featured = () => {
    const images = [
        "/image/pic3.png",
        "/image/pic5.png",
        "/image/featured2.png"
    ];
    return (
        <div className={styles.container}>
            <Carousel showThumbs={false} showStatus={false}>
                {images.map((image, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <Image src={image} alt="" layout='fill' objectFit='contain' />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Featured