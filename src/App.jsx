import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Popup from './components/popup';
import Details from './pages/details';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
    
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/movie/:title" element={<Details />} />
            </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
