import React from "react";
import { Component } from "../../components/Component";
import "./style.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export const MacbookPro = () => {

  const handleAboutClick = () => {
    console.log("À propos clicked");
  };

  const handleJobsClick = () => {
    console.log("Nos métiers clicked");
  };

  const handleExpertiseClick = () => {
    console.log("Secteurs d’expertise clicked");
  };

  const handleApplicationClick = () => {
    console.log("Candidature clicked");
  };

  const handleContactClick = () => {
    console.log("Contact clicked");
  };

  const handlePrestaClick = () => {
    console.log("Découvrir nos prestations clicked");
  };

  return (
    <div className="macbook-pro">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Immobilier</div>
          <img className="noun-rent" alt="Noun rent" src="/img/noun-rent-5545673-1.svg" />
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <img
            className="portrait-pompier"
            alt="Portrait pompier"
            src="/img/portrait-pompier-debout-devant-camion-pompiers-1157-46877-9.png"
          />
          <HashLink to="/prestation#incendie" className="text-wrapper-2">Agent de sécurité incendie</HashLink>
          <HashLink to="/prestation#prévol" className="text-wrapper-3">Agent de sécurité prévol</HashLink>
          <HashLink to="/prestation#mobile" className="text-wrapper-4">Agent de sécurité mobile</HashLink>
          <div className="rectangle-6" />
          <HashLink to="/prestation#événementiel" className="text-wrapper-5">Agent de sécurité événementiel</HashLink>
          <img className="img-2" alt="Img" src="/img/db0897b7b8846826da41dfe200ff75a6-1.png" />
          <img className="img-3" alt="Img" src="/img/5fe51c4afb70266885e840000db96386-1.png" />
          <img className="agent-de-securite" alt="Agent de securite" src="/img/agent-de-securite-1.png" />
          <div className="rectangle-7" />
          <HashLink to="/prestation#filtrage" className="text-wrapper-6">Agent de sécurité filtrage</HashLink>
          
          <div className="rectangle-8" />
          <HashLink to="/prestation#filtrage" className="text-wrapper-6">Agent de sécurité filtrage</HashLink>
          
          <img className="securitecontrole" alt="Securitecontrole" src="/img/securitecontrole-1024x683-1.png" />
          <HashLink to="/prestation#cynophile" className="text-wrapper-7">Agent de sécurité cynophile</HashLink>
          <img className="img-4" alt="Img" src="/img/f3402f70a83abdbb14374b8794cfba31-1.png" />
        </div>
        <div className="logoprosec-wrapper">
          <img className="logoprosec" alt="Logoprosec" src="/img/logoprosec-2.png" />
        </div>
        <div className="overlap-2">
          <div className="navbar">
            <HashLink to="#about" className="text-wrapper-8" onClick={handleAboutClick}>À propos</HashLink>
            <Link to="/prestation" className="text-wrapper-9" onClick={handleJobsClick}>Nos métiers</Link>
            <Link to="/expertise" className="text-wrapper-10" onClick={handleExpertiseClick}>Secteurs d’expertise</Link>
            {/* <Link className="text-wrapper-11" onClick={handleApplicationClick}>Candidature</Link> */}
            <div className="group">
              <div className="overlap-group-2">
                <div className="rectangle-9" />
                <Link to="/contact" className="text-wrapper-12" onClick={handleContactClick}>Contact</Link>
              </div>
            </div>
          </div>
          <div className="overlap-3">
            <p className="s-curit-renforc-e">
              <span className="span">
                Sécurité renforcée à chaque instant. <br />
                Bienvenue chez
              </span>
              <span className="text-wrapper-13">&nbsp;</span>
              <span className="text-wrapper-14">Pro</span>
              <span className="text-wrapper-15">securita </span>
              <span className="text-wrapper-13">
                
              </span>
              <br />
              <span className="span">votre partenaire de confiance</span>
            </p>
            <div className="div-wrapper">
              <Link to="/prestation" className="text-wrapper-16" onClick={handlePrestaClick}>Découvrir nos prestations</Link>
            </div>
          </div>
        </div>
        <div id="about" className="text-wrapper-17">À propos de nous</div>
        <div className="text-wrapper-18">Nos prestations</div>
        <div className="text-wrapper-19">Nos secteurs d’expertise</div>
        <div className="overlap-4">
          <div className="text-wrapper-20">Sièges sociaux</div>
          <img className="noun-real-estate" alt="Noun real estate" src="/img/noun-real-estate-6848911-1.svg" />
        </div>
        <div className="text-wrapper-21">Nos clients</div>
        <img className="capture-dcran" alt="Capture dcran" src="/img/capture-d-cran-2024-05-13-153654-1.png" />
        <p className="p">
          Depuis notre fondation en 2011, Prosecurita s'est affirmée comme un pilier essentiel de la sécurité à Saint-Denis et ses environs. Spécialisée dans les prestations humaines de sécurité en milieu tertiaire et industriel, notre entreprise a su se démarquer par son engagement envers l'excellence et sa proximité avec ses clients. Implantés au cœur de Saint-Denis, nous avons fait de la satisfaction client notre priorité absolue. Notre équipe de direction s'implique directement dans le management des prestations, garantissant ainsi une qualité de service irréprochable et une réponse rapide aux besoins spécifiques de chaque client.
        </p>
        <div className="overlap-5">
          <img className="noun-logistics" alt="Noun logistics" src="/img/noun-logistics-6775314-1.svg" />
          <div className="text-wrapper-22">Transports et logistiques</div>
        </div>
        <div className="overlap-6">
          <Link to="/expertise" className="text-wrapper-23">Voir tous nos secteurs d’expertise</Link>
        </div>
        <Component
          className="component-1"
          creditAgricoleLogoClassName="component-3"
          creditAgricoleLogoClassNameOverride="component-3"
          imgClassName="component-instance"
          imgClassNameOverride="component-1-instance"
          levClassName="component-1-instance"
          levClassNameOverride="component-1-instance"
          logoGerimClassName="component-4"
          logoGerimClassNameOverride="component-4"
          logoRabotClassName="component-2"
          logoRabotClassNameOverride="component-2"
          logoStefClassName="component-1-instance"
          logoStefClassNameOverride="component-1-instance"
          logoTrapilClassName="component-instance"
          logoTrapilClassNameOverride="component-instance"
          lycEBascanClassName="design-component-instance-node"
          lycEBascanClassNameOverride="design-component-instance-node"
          property1="frame-2"
        />
        <div className="overlap-7">
          <div className="rectangle-10" />
          <div className="rectangle-11" />
          <img className="logoprosec-2" alt="Logoprosec" src="/img/logoprosec-2.png" />
          <div className="text-wrapper-24">Contact</div>
          <div className="frame-4">
            <div className="text-wrapper-25">À propos de nous</div>
            <div className="text-wrapper-26">Nos prestations</div>
            <div className="text-wrapper-26">Nos secteurs d’expertise</div>
            <div className="text-wrapper-26">Candidature</div>
            <div className="text-wrapper-26">Contact</div>
          </div>
          <div className="text-wrapper-27">conctact@prosecurita.fr</div>
          <div className="text-wrapper-28">Recrutement</div>
          <div className="text-wrapper-29">candidature@prosecurita.fr</div>
          <p className="text-wrapper-30">5 Rue des Blés, Saint-Denis 93200</p>
          <p className="text-wrapper-31">01 55 93 11 50</p>
          <img className="noun-location" alt="Noun location" src="/img/noun-location-4832828-1.svg" />
          <img className="vector" alt="Vector" src="/img/vector.svg" />
          <img className="noun-phone" alt="Noun phone" src="/img/noun-phone-6856463-1.svg" />
          <img className="noun-email" alt="Noun email" src="/img/noun-email-6793880-1.svg" />
        </div>
      </div>
    </div>
  );
};
