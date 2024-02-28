import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'


import Header from './components/Header'
import Footer from './components/Footer'
// Import home component
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import './index.scss'

function App() {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const quote_url = 'https://api.quotable.io/random'

    fetch(quote_url)
      .then(res => res.json())
      .then(data => {
        setQuote(data.content)
      })
  }, [])

  return (
    <div className='content'>
      <Header />
      <main>
        {quote && <p className="quote">"{quote}"</p>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About setQuote={setQuote} />} />
          <Route path="/portfolio" element={<Portfolio setQuote={setQuote} />} />

        </Routes>

      </main>
      <Footer className="footer"/>
      
    </div>
  )
}



// module.exports = App
export default App 
