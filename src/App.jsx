import React from 'react'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import WhereToBuy from './Components/WhereToBuy/WhereToBuy'
import AppBanner from './Components/AppBanner/AppBanner'
import Footer from './Components/Footer/Footer'
import AOS from 'aos'
import "aos/dist/aos.css" 

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic",
    })
  }, []);
  
  return (
    <div>
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  )
}

export default App
