import Header from './components/layout/Header'
import Hero from './components/hero/Hero.jsx'
import blob from './assets/hero-blob.png'
import Pill from './components/common/Pill'
import HowItWork from './components/sections/HowItWork.jsx'
import WhyChooseUs from './components/sections/WhyChooseUs'


function App() {
  return (
    <div className="app">
      
      <Header />
      <main className="app__main">
        <Hero />
        <HowItWork />
        {/* bran strip goes here  */}
        <WhyChooseUs />

        {/* Next section (how it works, why choose us, etc.) */}
      </main>
    </div>
  )
}

export default App