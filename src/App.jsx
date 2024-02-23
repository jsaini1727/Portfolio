import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'


import Header from './components/Header'
// Import home component
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const quote_url ='https://api.quotable.io/random'

    const mode = localStorage.getItem('mode')

    if (mode) setIsDarkMode(mode === true ? true : false)

    fetch(quote_url)
    .then(res => res.json())
    .then(data => {
      setQuote(data.content)
    })
  }, [isDarkMode])

  return (
    <div className={`main-content ${isDarkMode ? 'dark' : ''}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <main>
      {quote && <p className="quote">"{quote}"</p>}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

       </Routes>

      </main>
    </div>
  )
}



// module.exports = App
export default App 
