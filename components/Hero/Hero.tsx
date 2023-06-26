'use client'

import styles from './Hero.module.css'
import LogoElement from '../LogoElement/LogoElement';
import HeroButton from '../HeroButton/HeroButton';
import {motion} from 'framer-motion';
import {slideFromLeft, slideFromRight} from '../../constants/animations';


const Hero = () => {
    return (
        <motion.div
            className={styles.heroWrapper}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once: true, amount: 0.8}}
        >
            <div className={styles.heroImage}/>
            <div className={styles.heroContent}>
                <LogoElement/>
                <motion.h1 variants={slideFromLeft} className={styles.heroTitle}>«Партнер»</motion.h1>
                <motion.p variants={slideFromRight} className={styles.heroText}>охранное предприятие</motion.p>
                <HeroButton/>
            </div>
        </motion.div>
    );
};

export default Hero;
