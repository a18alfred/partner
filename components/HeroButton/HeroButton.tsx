'use client'

import styles from './HeroButton.module.css';
import {Link as LinkScroll} from 'react-scroll/modules';

const HeroButton = () => {
    return (
        <LinkScroll
            to={'about'}
            smooth={true}
            duration={1}
            offset={-65}
            spy={true}
            className={styles.heroButton}
        >
            Узнать больше
        </LinkScroll>
    );
};

export default HeroButton;
