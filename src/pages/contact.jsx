import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div>
        <form action="">
          <h2>Parlons cinéma ensemble.</h2>
          <label>
            <span>Nom</span>
            <input type="text" name="" id="" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="" id=""/>
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" id=""></textarea>
          </label>
          <button>S'abonner</button>
          <p></p>
        </form>
      </div>
    </div>
  )
}
