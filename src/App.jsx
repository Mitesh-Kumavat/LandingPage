import styles from './style'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testiomonial, Hero } from "./components";
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';


function App() {

  return (
    <div className='a-full bg-primary overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} bg-primary `}>
        <div className={`${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary `}>
        <div className={`${styles.boxWidth} `}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testiomonial />
          <Clients />
          <CTA />
          <Footer />
          <WhatsAppButton />
          <CallButton />
        </div>
      </div>
    </div>
  )
}

export default App
