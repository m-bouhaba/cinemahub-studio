import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <footer>
        <div className='footerElement'>
          <img src="/images/logoFooter.png" alt="logo" />
          <p>Votre destination cinéma.<br/>Explorez les meilleurs films, genres et nouveautés.</p>
          <div className='formFooter'>
            <input type="text" placeholder='Votre Adresse mail' />
            <button>S'abonner</button>
          </div>
        </div>
        <div className='copyright'>
          <p>© 2025 CineVerse. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
