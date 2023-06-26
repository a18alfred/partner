'use client'

import React from 'react';
import styles from './Licenses.module.css';
import 'photoswipe/dist/photoswipe.css'
import {Gallery, Item} from 'react-photoswipe-gallery'
import Image from 'next/image';
import svgLeft from '../../public/assets/images/svgs/licenses_bg1.svg';
import svgRight from '../../public/assets/images/svgs/licenses_bg2.svg';

const Licenses = () => {

    return (
        <div id='licenses' className={styles.licensesContainer}>
            <div className={styles.licensesWrapper}>
                <h2 className={styles.licensesTitle}>Лицензии</h2>
                <Gallery>
                    <div className={styles.licensesGallery}>
                        <Item
                            original='/assets/images/licenses/license1_1.webp'
                            thumbnail='/assets/images/licenses/license1_1_thumb.webp'
                            width='899'
                            height='1280'
                        >
                            {({ref, open}) => (
                                <Image
                                    // @ts-ignore
                                    ref={ref}
                                    onClick={open}
                                    src='/assets/images/licenses/license1_1_thumb.webp'
                                    alt='license thumbnail'
                                    width={271}
                                    height={385}
                                    className={styles.licensesImage}
                                    priority
                                />
                            )}
                        </Item>
                        <Item
                            original='/assets/images/licenses/license1_2.webp'
                            thumbnail='/assets/images/licenses/license1_2_thumb.webp'
                            width='899'
                            height='1280'
                        >
                            {({ref, open}) => (
                                <Image
                                    // @ts-ignore
                                    ref={ref}
                                    onClick={open}
                                    src='/assets/images/licenses/license1_2_thumb.webp'
                                    alt='license thumbnail'
                                    width={271}
                                    height={385}
                                    className={styles.licensesImage}
                                    priority
                                />
                            )}
                        </Item>
                        <Item
                            original='/assets/images/licenses/license2_1.webp'
                            thumbnail='/assets/images/licenses/license2_1_thumb.webp'
                            width='899'
                            height='1280'
                        >
                            {({ref, open}) => (
                                <Image
                                    // @ts-ignore
                                    ref={ref}
                                    onClick={open}
                                    src='/assets/images/licenses/license2_1_thumb.webp'
                                    alt='license thumbnail'
                                    width={271}
                                    height={385}
                                    className={styles.licensesImage}
                                    priority
                                />
                            )}
                        </Item>
                        <Item
                            original='/assets/images/licenses/license2_2.webp'
                            thumbnail='/assets/images/licenses/license2_2_thumb.webp'
                            width='899'
                            height='1280'
                        >
                            {({ref, open}) => (
                                <Image
                                    // @ts-ignore
                                    ref={ref}
                                    onClick={open}
                                    src='/assets/images/licenses/license2_2_thumb.webp'
                                    alt='license thumbnail'
                                    width={271}
                                    height={385}
                                    className={styles.licensesImage}
                                    priority
                                />
                            )}
                        </Item>
                    </div>
                </Gallery>
            </div>
            <Image
                src={svgLeft}
                alt='background svg 1'
                className={styles.licensesSvgLeft}
                priority
            />
            <Image
                src={svgRight}
                alt='background svg 2'
                className={styles.licensesSvgRight}
                priority
            />
        </div>
    );
};

export default Licenses;
