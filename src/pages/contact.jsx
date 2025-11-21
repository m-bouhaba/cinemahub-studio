import React, { useState } from 'react';

export default function Contact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isValid, setIsValid] = useState(false);


  const handleClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Vérifier champs vides
    if (!nom || !email || !message) {
      setFeedback("Tous les champs sont obligatoires.");
      setIsValid(false); 
    }
    // Vérifier email simple
    else if (!emailRegex.test(email)) {
      setFeedback("Email doit avoir un format valide.");
      setIsValid(false); 
    }
    // Succès
    else {
      setFeedback("Message envoyé avec succès !");
      setIsValid(true); 
    }
  };

  return (
    <div className='contact'>
      <h1>Contact</h1>

      <div>
        <form>
          <h2>Parlons cinéma ensemble.</h2>

          <label>
            <span>Nom</span>
            <input 
              type="text"
              onChange={(e) => setNom(e.target.value)}
            />
          </label>

          <label>
            <span>Email</span>
            <input 
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>

          <button type="button" onClick={handleClick}>
            S'abonner
          </button>

          {feedback && (
            <p 
              className="popup-error" 
              style={{ color: isValid ? "limegreen" : "red" }}
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
