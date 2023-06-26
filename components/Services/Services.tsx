'use client'

import React from 'react';
import styles from './Services.module.css'
import {services} from '../../constants/services';
import svgLeft from '../../public/assets/images/svgs/service_bg_1.svg';
import svgRight from '../../public/assets/images/svgs/service_bg_2.svg';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {slideFromBottom} from '../../constants/animations';

const Services = () => {
    return (
        <div id='services' className={styles.servicesContainer}>
            <h2 className={styles.servicesTitle}>Наши услуги</h2>
            <div className={styles.servicesWrapper}>
                {
                    services.map((service, index) =>
                        <motion.div
                            key={index}
                            className={styles.servicesService}
                            initial='offscreen'
                            whileInView='onscreen'
                            variants={slideFromBottom}
                            viewport={{once: true, amount: 0.2}}
                        >
                            <div className={styles.servicesIconWrapper}>
                                <Image
                                    src={service.icon}
                                    alt='service icon'
                                    className={styles.servicesIcon}
                                    priority
                                />
                            </div>
                            <div className={styles.servicesServiceTitleWrapper}>
                                <h4 className={styles.servicesServiceTitle}>{service.title}</h4>
                            </div>
                            <p
                                className={styles.servicesServiceDesc}>{service.description}</p>
                        </motion.div>)
                }
            </div>
            <Image
                src={svgLeft}
                alt='background svg 1'
                className={styles.servicesSvgLeft}
                priority
            />
            <Image
                src={svgRight}
                alt='background svg 2'
                className={styles.servicesSvgRight}
                priority
            />
        </div>
    );
};

export default Services;
