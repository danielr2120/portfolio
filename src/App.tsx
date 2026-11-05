import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { useState } from 'react'
import { AboutPage } from './pages/about-page'
import { ContactPage } from './pages/contact-page'
import { WorkPage } from './pages/work-page'
import { Header } from './layout/header'
import { translations } from './translation'

function App() {
  const [language, setLanguage] = useState<'es' | 'en'>('es')
  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }
  const text = translations[language]
  return (
    <BrowserRouter>
      <div>
      
        <Header language={language} toggleLanguage={toggleLanguage} text={text}/>
        <Routes>
          <Route path='/' element={<WorkPage />} />
          <Route path='/AboutPage' element={<AboutPage />} />
          <Route path='/ContactPage' element={<ContactPage />} />
        </Routes>
      
      </div>
    </BrowserRouter>


  )
}

export default App
