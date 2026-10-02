import Header from './components/layout/Header'
import Hero from './components/hero/Hero.jsx'
import blob from './assets/hero-blob.png'


function App() {
  return (
    <div className="app">
      
      <Header />
      <main className="app__main">
        <Hero />

        {/* Next section (how it works, why choose us, etc.) */}
      </main>
    </div>
  )
}

export default App