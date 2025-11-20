import React, { useEffect, useState } from "react";

export default function Popup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = () => {
    if (email.trim() === "") {
      setError("Veuillez entrer votre adresse email.");
      return;
    }

    setShow(false);
  };

  const closePopup = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
  <div className="popup-container">
    <button className="popup-close" onClick={closePopup}>X</button>
    <h2 className="popup-title">Newsletter</h2>
    <p className="popup-subtitle">Abonnez-vous pour recevoir nos actualités cinéma !</p>
    <input
      type="text"
      className="popup-input"
      placeholder="Votre adresse mail"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        setError("");
      }}
    />
    {error && <p className="popup-error">{error}</p>}
    <button className="popup-btn" onClick={handleSubscribe}>
      S’abonner
    </button>
  </div>
</div>

  );
}