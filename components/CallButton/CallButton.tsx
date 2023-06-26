'use client'

import styles from './CallButton.module.css';
import React, {useState} from 'react';
import CallModal from '../CallModal/CallModal';

const CallButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onCall = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsOpen(true)
    }

    return (
        <>
            <button
                className={styles.orderCallButton}
                onClick={onCall}
            >Заказать звонок
            </button>
            {isOpen && <CallModal isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </>
    );
};

export default CallButton;
