'use client'

import styles from './Contacts.module.css'
import CallButton from '../CallButton/CallButton';
import Image from 'next/image';
import svgBg from '../../public/assets/images/svgs/contacts_bg.svg';
import {motion} from 'framer-motion';
import {slideFromBottom} from '../../constants/animations';

const Contacts = () => {
    return (
        <div id='contacts' className={styles.contactsContainer}>
            <div className={styles.contactsWrapper}>
                <div className={styles.contactsInfo}>
                    <div className={styles.contactsInfoWrapper}>
                        <motion.div
                            initial='offscreen'
                            whileInView='onscreen'
                            viewport={{once: true, amount: 0.8}}
                            className={styles.contactsTextWrapper}
                        >
                            <h4 className={styles.contactsTitle}> Наши контакты: </h4>
                            <motion.p
                                variants={slideFromBottom}
                                className={styles.contactsPhone}
                            >
                                Тел.: <a href='tel:8-3412-51-15-17'>(3412) 51-15-17</a>
                            </motion.p>
                            <motion.p
                                variants={slideFromBottom}
                                className={styles.contactsAddress}
                            >
                                e-mail: <a href='mailto:partner-ohrana@mail.ru'>partner-ohrana@mail.ru</a>
                            </motion.p>
                            <motion.p
                                variants={slideFromBottom}
                                className={`${styles.contactsAddress} ${styles.contactsExtraMarginBottom}`}
                            >
                                426008, г. Ижевск, ул. Максима Горького, 59а
                            </motion.p>
                        </motion.div>
                        <CallButton/>
                    </div>
                </div>
                <div className={styles.contactsMapWrapper}/>
            </div>
            <Image
                src={svgBg}
                alt='background svg'
                className={styles.contactsSvg}
                priority
            />
        </div>
    );
};

export default Contacts;
