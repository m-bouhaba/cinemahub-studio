import React, { useState } from 'react';

export default function Contact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");


  const handleClick = () => {
    // Vérifier champs vides
    if (!nom || !email || !message) {
      setFeedback("Tous les champs sont obligatoires.");
    }
    // Vérifier email simple
    else if (!email.includes("@") || !email.includes(".")) {
      setFeedback("Email doit avoir un format valide.");
    }
    // Succès
    else {
      setFeedback("Message envoyé avec succès !");
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

          <p>{feedback}</p>
        </form>
      </div>
    </div>
  );
}
