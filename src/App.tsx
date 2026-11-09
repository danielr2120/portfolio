import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { useState } from 'react'
import { AboutPage } from './pages/about-page'
import { ContactPage } from './pages/contact-page'
import { WorkPage } from './pages/work-page'
import { Header } from './layout/header'
import { translations } from './translation'
import { Footer } from './layout/footer'

function App() {


  return (
    <BrowserRouter>
      <div>
      
        <Header/>
        <Routes>
          <Route path='/' element={<WorkPage />} />
          <Route path='/AboutPage' element={<AboutPage />} />
          <Route path='/ContactPage' element={<ContactPage />} />
        </Routes>
        <Footer />

      </div>
    </BrowserRouter>


  )
}

export default App
