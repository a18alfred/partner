import React from 'react';
import Image from 'next/image';
import banner from '../../public/assets/images/serveces_banner.webp';
import styles from './Banner.module.css';

const Banner = () => {
    return (
        <Image
            src={banner}
            alt='banner'
            className={styles.bannerImage}
            priority
        />
    );
};

export default Banner;
