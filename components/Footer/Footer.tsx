import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.FooterContainer}>
            <p>© {new Date().getFullYear()} Охранное предприятие «Партнер». </p>
            <p>Все права защищены.</p>
        </footer>
    );
};

export default Footer;