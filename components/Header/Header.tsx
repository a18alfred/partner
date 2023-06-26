'use client'

import styles from './Header.module.css'
import {animateScroll as scroll} from 'react-scroll';
import {usePathname, useRouter} from 'next/navigation';
import NavLinks from '../NavLinks/NavLinks';
import Image from 'next/image';
import svg1 from '../../public/assets/images/svgs/s1.svg'
import svg2 from '../../public/assets/images/svgs/s2.svg'
import svg3 from '../../public/assets/images/svgs/s3.svg'
import Sidebar from '../Sidebar/Sidebar';
import {useState} from 'react';
import {Squash} from 'hamburger-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const router = useRouter();

    const onClick = () => {
        if (pathname === '/')
            scroll.scrollTo(0, {
                smooth: true,
                duration: 1,
            });
        router.push('/')
    }

    return (
        <nav className={styles.nav} id='top'>
            <div className={styles.navContainer}>
                <div className={styles.navWrapper}>
                    <Image
                        src={svg1}
                        alt='background svg'
                        className={styles.navSvgLeft}
                        priority
                    />
                    <Image
                        src={svg2}
                        alt='background svg'
                        className={styles.navSvgCenter}
                        priority
                    />
                    <Image
                        src={svg3}
                        alt='background svg'
                        className={styles.navSvgRight}
                        priority
                    />
                    <h4
                        className={styles.navTitle}
                        onClick={onClick}
                    >Охранное предприятие «Партнер»</h4>
                    <div className={styles.navSidebar}>
                        <Squash
                            toggled={isOpen}
                            toggle={setIsOpen}
                            color='#ECC100'
                            size={28}
                        />
                    </div>
                    <NavLinks/>
                </div>
            </div>
            <div className={styles.navSidebar}>
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </nav>
    );
};

export default Header;
