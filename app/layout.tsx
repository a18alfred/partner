import './globals.css'
import {Montserrat} from '@next/font/google';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const montserrat = Montserrat({subsets: ['cyrillic', 'latin']})

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang='ru' className={montserrat.className}>
        <head/>
        <body>
        <Header/>
        <div className='content'>
            <div className='contentWrapper'>
                {children}
                <Footer/>
            </div>
        </div>
        </body>
        </html>
    )
}
