import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setFeedback("Veuillez entrer votre adresse email.");
      setIsValid(false);
    }
    else if (!emailRegex.test(email)) {
      setFeedback("Veuillez entrer un email valide.");
      setIsValid(false);
    }
    else {
      setFeedback("Abonnement réussi !");
      setIsValid(true);
      setEmail(""); // optionnel : vider le champ
    }
  };

  return (
    <div className='footer'>
      <footer>
        <div className='footerElement'>
          <img src="/images/logoFooter.png" alt="logo" />
          <p>
            Votre destination cinéma.<br />
            Explorez les meilleurs films, genres et nouveautés.
          </p>

          {/* Formulaire actif */}
          <div className='formFooter'>
            <input 
              type="text" 
              placeholder='Votre Adresse mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="button" onClick={handleSubscribe}>
              S'abonner
            </button>
          </div>

          {feedback && (
            <p style={{ 
              color: isValid ? "limegreen" : "red", 
              marginTop: "10px" 
            }}>
              {feedback}
            </p>
          )}
        </div>

        <div className='copyright'>
          <p>© 2025 CineVerse. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
