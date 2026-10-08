import Header from './components/layout/Header'
import Hero from './components/hero/Hero.jsx'
import blob from './assets/hero-blob.png'
import Pill from './components/common/Pill'
import HowItWork from './components/sections/HowItWork.jsx'
import WhyChooseUs from './components/sections/WhyChooseUs'
import PopularDeals from './components/sections/PopularDeals'
import DownloadApp from './components/sections/DownloadApp'


function App() {
  return (
    <div className="app">
      
      <Header />
      <main className="app__main">
        <Hero />
        <HowItWork />
        {/* bran strip goes here  */}
        

        {/* Next section (how it works, why choose us, etc.) */}
        <WhyChooseUs />
        <PopularDeals />
        <DownloadApp />
      </main>
    </div>
  )
}

export default App