import React from "react";
import "./styleperst.css";
import { HashLink } from "react-router-hash-link";

export const Prestation = () => {
    
  return (
    <div className="prest-macbook-pro">
      <div className="prest-div">
        <div className="prest-overlap">
          <img className="prest-logoprosec" alt="Logoprosec" src="/img/logoprosec.png" />
        </div>
        <div className="prest-overlap-group">
          <div className="prest-rectangle" />
          <HashLink to="/" className="prest-text-wrapper">À propos</HashLink >
          <HashLink to="/prestation" className="prest-text-wrapper-2">Nos métiers</HashLink >
          <HashLink to="/expertise" className="prest-text-wrapper-3">Secteurs d’expértise</HashLink >
          {/* <div className="prest-text-wrapper-4">Candidature</div> */}
          <HashLink to="/contact" className="prest-group">
            <div className="prest-overlap-group-2">
              <div className="prest-rectangle-2" />
              <div className="prest-text-wrapper-5">Contact</div>
            </div>
          </HashLink>
          <img className="prest-adobestock" alt="Adobestock" src="/img/prestations.png" />
          <div className="prest-rectangle-3" />
          <div className="prest-text-wrapper-6">Nos prestations</div>
        </div>
        <div id="incendie" className="prest-text-wrapper-7">Agent de sécurité incendie</div>
        <p className="prest-titulaire-du-SSIAP">
          Titulaire du SSIAP, notre personnel assure la prévention et la sécurité incendie dans les <br />
          établissements recevant du public (ERP) ainsi que dans les immeubles de grande hauteur <br />
          (IGH). Leurs missions englobent : <br />
          La prévention des incendies
          <br /> La sensibilisation du personnel aux mesures de sécurité incendie <br /> L’entretien de base des
          équipements de sécurité incendie <br /> L’alerte et l’accueil des secours <br /> L’évacuation du public <br />{" "}
          L’intervention précoce en cas d’incendie <br /> L’assistance aux personnes en cas de danger
        </p>
        <img
          className="prest-portrait-pompier"
          alt="Portrait pompier"
          src="/img/portrait-pompier-debout-devant-camion-pompiers-1157-46877-9.png"
        />
        <div id="prévol" className="prest-text-wrapper-8">Agent de sécurité prévol</div>
        <div className="prest-overlap-2">
          <p className="prest-l-agent-de-s-curit">
            L’agent de sécurité prévol joue un rôle crucial dans la surveillance des établissements commerciaux, en
            particulier dans ceux où la vente est l’activité principale, afin de prévenir les vols et les actes de
            malveillance. Son travail se déroule à l’intérieur de l’établissement et des magasins. <br />
            Les missions de l’agent de sécurité prévol comprennent : <br />
            Identifier les individus suspects de vol pour lutter contre la démarque inconnue. <br />
            Rechercher tout signe pouvant indiquer des comportements frauduleux chez les personnes présentes dans la
            zone de vente. <br />
            Alerter les autres agents de sécurité lorsqu&amp;#39;il repère des individus suspects. <br />
            Confirmer à ses collègues tout acte délictueux présumé. <br />
            Rédiger un rapport détaillé sur ses observations conformément aux procédures établies.
          </p>
          <div id="mobile" className="prest-text-wrapper-9">Agent de sécurité mobile</div>
        </div>
        <img className="prest-img" alt="Img" src="/img/db0897b7b8846826da41dfe200ff75a6-1.png" />
        <p  className="prest-p">
          L’agent de sécurité mobile est chargé de réaliser des rondes de surveillance, à pied ou en véhicule, en
          fonction des caractéristiques du site à surveiller. Son rôle principal est de rester vigilant face aux risques
          potentiels en matière de sécurité, tels que les incendies, les intrusions ou les actes de malveillance à
          l’encontre des personnes ou des biens. Il intervient souvent dans les stades, les parkings, les usines et les
          entrepôts. <br />
          Pour faciliter sa mission, l’agent de sécurité mobile peut être équipé d’un contrôleur de rondes, permettant
          de fournir des informations précises sur l’heure, la durée et les lieux visités lors de chaque ronde. <br />
          Prosecurita propose également une gamme complète de prestations de sécurité adaptées aux besoins spécifiques
          de ses clients.
        </p>
        <img className="prest-img-2" alt="Img" src="/img/5fe51c4afb70266885e840000db96386-1.png" />
        <div id="filtrage" className="prest-text-wrapper-10">Agent de sécurité filtrage</div>
        <p className="prest-l-agent-de-s-curit-2">
          L’agent de sécurité filtrage a pour responsabilité principale d’empêcher l’introduction d’objets illicites à
          l’intérieur d’une zone strictement définie, excluant les zones de sûreté aéroportuaire. Il est chargé
          d’analyser les informations fournies par les appareils de contrôle, notamment en interprétant les alarmes
          émises par ces dispositifs. <br />
          En cas de doute, il procède à des vérifications supplémentaires conformément aux procédures établies, tout en
          respectant les droits fondamentaux des individus. Ses missions consistent notamment à : <br /> <ul>
            <li>Interpréter les informations fournies par les appareils de contrôle.</li>
            <li>Effectuer le contrôle de concordance entre l'objet et son porteur.</li>
            <li>Réaliser ou coordonner la levée de doute selon les directives en vigueur et dans le respect
          des droits individuels. </li>
          <li>Alerter les autorités compétentes lorsque l'intervention dépasse ses attributions.</li>            
            </ul>
        </p>
        <div id="cynophile" className="prest-text-wrapper-11">Agent de sécurité cynophile</div>
        <p className="prest-chez-prosecurita-nos">
          Chez Prosecurita, nos agents de sécurité cynophile forment des binômes <br />
          homme-animal parfaitement entraînés, constituant ainsi une équipe efficace. Le chien,
          véritable auxiliaire du conducteur, joue un rôle préventif et dissuasif, mettant en œuvre ses qualités
          naturelles et acquises pour assister son partenaire dans l’exercice de sa mission <br />
          Leur champ d’action comprend la réalisation de rondes de surveillance, le contrôle et la surveillance de
          divers sites tels que les parkings, les entrepôts et les zones spécifiquement désignées. Ils interviennent
          également sur demande du personnel autorisé ou en réponse à des alarmes pour effectuer des levées de doute et
          prévenir les autorités compétentes ou les personnes désignées en cas de trouble.
        </p>
        <div id="événementiel" className="prest-agent-de-s-curit-v">Agent de sécurité événementiel</div>
        <p className="prest-chez-prosecurita">
          Chez Prosecurita, notre sécurité événementielle d’excellence s’adapte à toutes vos manifestations, qu’elles
          soient culturelles, sportives ou musicales. Nous proposons des solutions flexibles, modulables et sur mesure,
          avec des normes élevées en matière de recrutement et de supervision de nos équipes. <br />
          Nos agents polyvalents sont à même d’assurer diverses missions telles que le filtrage, la surveillance,
          l’orientation des flux aux abords du site, ainsi que la sécurisation des accès et des espaces VIP. Nous avons
          la capacité de mobiliser rapidement les agents et le personnel de management nécessaires à votre événement,
          avec la présence d’un coordinateur dédié.
        </p>
        <img className="prest-agent-de-securite" alt="Agent de securite" src="/img/agent-de-securite-1.png" />
        <img className="prest-securitecontrole" alt="Securitecontrole" src="/img/securitecontrole-1024x683-1.png" />
        <img className="prest-agent-de-securite-chien" alt="Securitecontrole" src="/img/chien.png" />
        <div className="prest-overlap-3">
          <div className="prest-rectangle-4" />
          <div className="prest-rectangle-5" />
          <div className="prest-text-wrapper-12">Contact</div>
          <div className="prest-frame">
            <div className="prest-text-wrapper-13">À propos de nous</div>
            <div className="prest-text-wrapper-14">Nos prestations</div>
            <div className="prest-text-wrapper-14">Nos secteurs d’expertise</div>
            <div className="prest-text-wrapper-14">Candidature</div>
            <div className="prest-text-wrapper-14">Contact</div>
          </div>
          <div className="prest-text-wrapper-15">conctact@prosecurita.fr</div>
          <div className="prest-text-wrapper-16">Rrecrutement</div>
          <div className="prest-text-wrapper-17">candidature@prosecurita.fr</div>
          <p className="prest-text-wrapper-18">8/10 Rue des Blés, Saint-Denis 93200</p>
          <p className="prest-text-wrapper-19">01 55 93 11 50</p>
          <img className="prest-noun-location" alt="Noun location" src="/img/localisations.svg" />
          <img className="prest-vector" alt="Vector" src="/img/vector.svg" />
          <img className="prest-noun-phone" alt="Noun phone" src="/img/noun-phone-6856463-1.svg" />
          <img className="prest-noun-email" alt="Noun email" src="/img/noun-email-6793880-1.svg" />
          <img className="prest-element" alt="Element" src="/img/prose.png" />
        </div>
      </div>
    </div>
  );
};

