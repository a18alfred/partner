'use client'

import styles from './Sidebar.module.css'
import React, {Dispatch, RefObject, useEffect, useRef} from 'react';
import {linksMenu} from '../../constants/links';
import {Link as LinkScroll} from 'react-scroll/modules';

interface SidebarProps {
    isOpen: boolean,
    setIsOpen: Dispatch<boolean>
}

const Sidebar = ({isOpen, setIsOpen}: SidebarProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && wrapperRef.current.contains(event.target as HTMLDivElement)) {
                setIsOpen(false);
            }
        }

        function handleScroll() {
            setIsOpen(false);
        }

        if (isOpen && wrapperRef.current) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleScroll);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleScroll);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [wrapperRef, isOpen]);

    return (
        <>
            {isOpen && <div className={`${styles.sidebarOverlay}`} ref={wrapperRef}/>}
            <div className={`${styles.sidebar} ${isOpen && styles.sidebarOpen}`}>
                <div className={styles.sidebarWrapper}>
                    {
                        linksMenu.map((link, index) =>
                            <LinkScroll
                                key={index}
                                to={link.to}
                                smooth={true}
                                offset={-64}
                                duration={1}
                                spy={true}
                                activeClass={styles.sidebarLinkActive}
                                className={styles.sidebarLink}>
                                {link.name}
                            </LinkScroll>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Sidebar;
