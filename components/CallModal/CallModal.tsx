'use client'

import styles from './CallModal.module.css'
import './PhoneInput.css'
import {Dispatch, FormEvent, useEffect, useRef, useState} from 'react';
import Cross from '../../public/assets/images/svgs/cross.svg';
import Image from 'next/image';
import PhoneInput, {isPossiblePhoneNumber} from 'react-phone-number-input'

interface CallModalProps {
    isOpen: boolean,
    setIsOpen: Dispatch<boolean>
}

interface ContactInfo {
    name: {
        value: string,
        error: boolean
    },
    phone: {
        value: string,
        error: boolean
    }
}

const initState: ContactInfo = {
    name: {
        value: '',
        error: false
    },
    phone: {
        value: '',
        error: false
    }
}


const CallModal = ({isOpen, setIsOpen}: CallModalProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState<ContactInfo>(initState);
    const [isSent, setIsSent] = useState(false);

    const onClose = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && wrapperRef.current.contains(event.target as HTMLDivElement)) {
                setIsOpen(false);
            }
        }

        if (isOpen && wrapperRef.current) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef, isOpen]);

    const validateForm = (): boolean => {
        let isNameValid = false;
        let isPhoneValid = false

        if (formData.name.value.length >= 2) isNameValid = true
        if (isPossiblePhoneNumber(formData.phone.value)) isPhoneValid = true

        setFormData(prev => ({
            name: {...prev.name, error: !isNameValid},
            phone: {...prev.phone, error: !isPhoneValid}
        }))

        return isNameValid && isPhoneValid
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validateForm()) {
            let data = {
                name: formData.name.value,
                phone: formData.phone.value
            }
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                console.log('Response received')
                if (res.status === 200) {
                    console.log('Response succeeded!')
                }
            })
            setIsSent(true)
        }
    }

    const onPhoneChange = (value: string) => {
        setFormData(prev => ({...prev, phone: {value: value, error: false}}))
    }

    return (
        <>
            <div className={styles.callModalContainer} ref={wrapperRef}/>
            <div className={styles.callModalWrapper}>
                <Image
                    src={Cross}
                    alt='cross'
                    className={styles.callModalCross}
                    onClick={onClose}
                    priority
                />
                <form
                    onSubmit={onSubmit}
                    className={`${styles.callModalForm} ${formData.name.error && styles.callModalInputError}`}
                >
                    <h4>
                        Оставьте ваши
                    </h4>
                    <h4>
                        контактные данные
                    </h4>
                    <div className={styles.callModalText}>
                        <p>
                            и наш специалист свяжется
                        </p>
                        <p>
                            с вами в течении 60 минут
                        </p>
                    </div>
                    <input
                        type='text'
                        id={'name'}
                        value={formData.name.value}
                        onChange={e => setFormData(prev => ({...prev, name: {value: e.target.value, error: false}}))}
                        maxLength={50}
                        placeholder={'Введите ваше имя'}
                    />
                    <PhoneInput
                        className={formData.phone.error ? styles.callModalInputError : styles.callModalInputValid}
                        displayInitialValueAsLocalNumber
                        defaultCountry='RU'
                        placeholder='Введите ваш номер телефона'
                        value={formData.phone.value}
                        onChange={onPhoneChange}
                    />
                    {
                        isSent
                            ? <p className={styles.callModalSentText}>
                                Спасибо за обращение!
                            </p>
                            : <button
                                className={styles.callModalButton}
                                type={'submit'}
                            >
                                Отправить данные
                            </button>
                    }
                    <p className={styles.callModalSmallText}>
                        *Ваши данные никогда не будут переданы третьим лицам
                    </p>
                </form>
                <div className={styles.callModalImageWrapper}/>
            </div>
        </>
    );
};

export default CallModal;
