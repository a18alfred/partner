import Hero from '../components/Hero/Hero';
import styles from './page.module.css'
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Banner from '../components/Banner/Banner';
import Licenses from '../components/Licenses/Licenses';
import Contacts from '../components/Contacts/Contacts';

export default function Home() {
    return (
        <main className={styles.mainWrapper}>
            <Hero/>
            <About/>
            <Services/>
            <Banner/>
            <Licenses/>
            <Contacts/>
        </main>
    )
}
