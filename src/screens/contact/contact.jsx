import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./stylecontact.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        name,
        email,
        message,
      };

      const serviceId = "service_14j1wwl"; // Remplacez par votre ID de service
      const templateId = "template_tiy0eqr"; // Remplacez par votre ID de modèle
      const userId = "bbrn4cjKVRbGVOjrM"; // Remplacez par votre ID utilisateur

      // Envoyer le formulaire
      const response = await emailjs.send(serviceId, templateId, formData, userId);

      console.log(response);
      setResponse("E-mail envoyé avec succès!");
    } catch (error) {
      console.error(error);
      setResponse("Erreur lors de l'envoi de l'e-mail.");
    }
  };

  return (
    <div className="contact-macbook-pro">
      <div className="contact-div">
        <div className="contact-overlap">
          <div className="contact-rectangle" />
          <div className="contact-text-wrapper">Contact</div>
        </div>
        <div className="contact-overlap-group">
          <img className="contact-logoprosec" alt="Logoprosec" src="/img/logoprosec.png" />
        </div>
        <div className="contact-overlap-2">
          <div className="contact-text-wrapper-2">À propos</div>
          <div className="contact-text-wrapper-3">Nos métiers</div>
          <div className="contact-text-wrapper-4">Secteurs d’expertise</div>
          <div className="contact-group">
            <div className="contact-overlap-group-2">
              <div className="contact-rectangle-2" />
              <div className="contact-text-wrapper-5">Contact</div>
            </div>
          </div>
        </div>
        
        <div className="contact-overlap-3">
        <p className="contact-nom">
            <span className="contact-span">Nom</span>
            <span className="contact-text-wrapper-6">*</span>
          </p>
          <p className="contact-e-mail">
            <span className="contact-span">E-mail</span>
            <span className="contact-text-wrapper-6">*</span>
          </p>
          <p className="contact-confirmation-e-mail">
            <span className="contact-span">Confirmation E-mail</span>
            <span className="contact-text-wrapper-6">*</span>
          </p>   
          <p className="contact-num-ro-de-t-l-phone">
            <span className="contact-span">Numéro de téléphone</span>
            <span className="contact-text-wrapper-6">*</span>
          </p>
          <p className="contact-pr-nom">
            <span className="contact-span">Prénom</span>
            <span className="contact-text-wrapper-6">*</span>
          </p>
          <div className="contact-text-wrapper-7">Votre message</div>
          
          <form onSubmit={handleSubmit}>
            <input className="contact-rectangle-3" type="text"  value={name} onChange={(e) => setName(e.target.value)} required />
            <input className="contact-rectangle-4" type="text"  required />
            <input className="contact-rectangle-5" type="email"  value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className="contact-rectangle-6" type="email" required />
            <input className="contact-rectangle-7" type="tel"  required />
            <textarea className="contact-rectangle-8"  value={message} onChange={(e) => setMessage(e.target.value)} required />
            <div className="contact-div-wrapper">
            <div className="contact-text-wrapper-8" onClick={handleSubmit}>Envoyer</div>
          </div>
          </form>
          <p className="contact-besoin-d-aide-ou-d">Besoin d'aide ou d'informations ? Notre équipe est là pour vous ! <br /> Contactez-nous dès maintenant via le formulaire ci-dessus.</p>
          {response && <p>{response}</p>}
        </div>
        
        <div className="contact-overlap-4">
          <div className="contact-rectangle-9" />
          <div className="contact-rectangle-10" />
          <div className="contact-text-wrapper-9">Contact</div>
          <div className="contact-frame">
            <div className="contact-text-wrapper-10">À propos de nous</div>
            <div className="contact-text-wrapper-11">Nos prestations</div>
            <div className="contact-text-wrapper-11">Nos secteurs d’expertise</div>
            <div className="contact-text-wrapper-11">Candidature</div>
            <div className="contact-text-wrapper-11">Contact</div>
          </div>
          <div className="contact-text-wrapper-12">conctact@prosecurita.fr</div>
          <div className="contact-text-wrapper-13">Recrutement</div>
          <div className="contact-text-wrapper-14">candidature@prosecurita.fr</div>
          <p className="contact-p">8/10 Rue des Blés, Saint-Denis 93200</p>
          <p className="contact-text-wrapper-15">01 55 93 11 50</p>
          <img className="contact-noun-location" alt="Noun location" src="/img/noun-location-4832828-1.svg" />
          <img className="contact-vector" alt="Vector" src="/img/vector.svg" />
          <img className="contact-noun-phone" alt="Noun phone" src="/img/noun-phone-6856463-1.svg" />
          <img className="contact-noun-email" alt="Noun email" src="/img/noun-email-6793880-1.svg" />
          <img className="contact-element" alt="Element" src="/img/logo57.png" />
        </div>
      </div>
    </div>
  );
};
