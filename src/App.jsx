import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/footer/Footer'
import LoginPage from './components/features/auth/component/LoginPage'
import Contact from './pages/Contact'
import ScrollToTop from './components/features/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter basename='/thirdDoor'>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="about-third-door" element={<About />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
