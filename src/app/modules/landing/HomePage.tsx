import Benefit from './components/Benefit'
import Experience from './components/Experience'
import {Footer} from './components/Footer'
import {Header} from './components/Header'
import {Home} from './components/Home'
import HowItWorks from './components/HowItWorks'
import Mobile from './components/Mobile'
import Partners from './components/Partners'
import StoreSection from './components/StoreSection'
import WhatPeopleSay from './components/WhatPeopleSay'
import './HomePage.css'
export function HomePage() {
  return (
    <div>
      <Header />
      <Home />
      <HowItWorks />
      <StoreSection />
      <Experience />
      <Benefit />
      <WhatPeopleSay />
      <Mobile />
      <Partners />
      <Footer />
    </div>
  )
}
