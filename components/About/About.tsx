'use client'

import React, {useState} from 'react';
import Image from 'next/image'
import styles from './About.module.css'
import GuardImg from '../../public/assets/images/about_guard.webp'
import VacImg from '../../public/assets/images/about_vacancy.webp'
import svg1 from '../../public/assets/images/svgs/about_svg1.svg';
import svg2 from '../../public/assets/images/svgs/about_svg2.svg';
import CallButton from '../CallButton/CallButton';
import {motion} from 'framer-motion';
import {slideFromRight} from '../../constants/animations';

const About = () => {
    const [isAbout, setIsAbout] = useState<boolean>(true);

    const onAbout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!isAbout) setIsAbout(true)
    }

    const onVacancy = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (isAbout) setIsAbout(false)
    }

    return (
        <motion.div
            id={'about'}
            className={styles.aboutContainer}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once: true, amount: 0.1}}
        >
            <Image
                src={svg1}
                alt='background svg 1'
                className={styles.aboutSvgLeft}
                priority
            />
            <Image
                src={svg2}
                alt='background svg 2'
                className={styles.aboutSvgRight}
                priority
            />
            <div className={styles.aboutWrapper}>
                <div className={styles.aboutInfoWrapper}>
                    <div className={styles.aboutButtonWrapper}>
                        <button
                            className={`${styles.aboutButton} ${isAbout && styles.aboutButtonActive}`}
                            onClick={onAbout}
                        >
                            О компании
                        </button>
                        <span className={styles.aboutSeparator}>|</span>
                        <button
                            className={`${styles.aboutButton} ${!isAbout && styles.aboutButtonActive}`}
                            onClick={onVacancy}
                        >
                            Вакансии
                        </button>
                    </div>

                    {isAbout
                        ? <p className={styles.aboutText}>
                            Охранное предприятие «Партнер» работает на рынке охранных услуг с 2014 года.
                            Предоставляем весь комплекс охранных услуг, имеем необходимые лицензии на осуществление
                            охранной деятельности, монтаж и обслуживание систем пожарной безопасности. Обладаем
                            богатым опытом по охране объектов любой сложности, в том числе банков, торговых центров,
                            предприятий промышленности и транспорта, муниципальных социальных объектов и др.
                            <br/>
                            <br/>
                            Компетенции наших специалистов позволяют подбирать оптимальные решения для обеспечения
                            безопасности по индивидуальным требованиям заказчика.
                        </p>
                        : <div>
                            <p className={`${styles.aboutText} ${styles.aboutExtraMarginBottom}`}>
                                Примем на работу охранников 4 и 6 разряда, ответственных мужчин и женщин без вредных
                                привычек
                            </p>
                            <CallButton/>
                        </div>
                    }
                </div>
                <motion.div
                    className={styles.aboutImageWrapper}
                    variants={slideFromRight}
                >
                    {
                        isAbout
                            ? <Image
                                src={GuardImg}
                                alt='background svg'
                                className={styles.aboutImage}
                                priority
                            />
                            : <Image
                                src={VacImg}
                                alt='background svg'
                                className={styles.aboutImage}
                                priority
                            />
                    }
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
