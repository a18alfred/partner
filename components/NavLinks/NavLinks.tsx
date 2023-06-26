'use client'
import styles from './NavLink.module.css'
import {Link as LinkScroll} from 'react-scroll';
import {links} from '../../constants/links';

const NavLinks = () => {
    return (
        <div className={styles.navLinks}>
            {
                links.map((link, index) =>
                    <LinkScroll
                        key={index}
                        to={link.to}
                        smooth={true}
                        offset={-65}
                        duration={1}
                        spy={true}
                        activeClass={styles.navLinkActive}
                        className={styles.navLink}>
                        {link.name}
                    </LinkScroll>
                )
            }
        </div>
    );
};

export default NavLinks;
