import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
