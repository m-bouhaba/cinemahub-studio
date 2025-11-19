import React from 'react'
import { useNavigate } from 'react-router'


export default function Navbar() {
  const navigate=useNavigate();
  return (
    <div>
      <nav>
        <img id='logoNav' onClick={()=>navigate("/")} src="/images/CineVerseNav-removebg-preview.png" alt="logo" />
        <img id='contactIcone' onClick={()=>navigate("/contact")} src="/images/contact.svg" alt="contact" />
      </nav>
    </div>
  )
}
