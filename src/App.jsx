import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/footer/Footer'
import LoginPage from './components/features/auth/component/LoginPage'
import Contact from './pages/Contact'
import ScrollToTop from './components/features/ScrollToTop'
import WorkInProgress from './components/WorkInProgress'
import Career from './pages/Career'
import Jobs from './pages/Jobs'

export default function App() {
  const [state, setState] = useState();
  useEffect(()=>{
      async function fetchData(){
          const response = await fetch("https://thirddoor-backend.onrender.com/data");
          const data = await response.json();

          const headers = data.rows[0];
          const jobs = data.rows.slice(1);

          // convert each row array object with key:value pairs
          const formattedJobs = jobs.map(row => 
              Object.fromEntries(row.map((value, i) => [headers[i], value]))
          );

          setState(formattedJobs);
      }
      fetchData();
  }, [])
  return (
    <BrowserRouter basename='/thirdDoor'>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="login" element={<LoginPage />} />
        <Route path="careers" element={<Career />} />
        <Route path="jobs" element={<Jobs state={state}/>} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="*" element={<WorkInProgress />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
