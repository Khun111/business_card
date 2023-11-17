import Info from './components/Info';
import Interests from './components/Interests';
import Footer from './components/Footer';
import About from './components/About';
import './styles.css';

export default function App() {
    return (
        <div className='card_con'>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}