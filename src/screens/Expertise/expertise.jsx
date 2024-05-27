import React from "react";
import "./styleexp.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Expertise = () => {
  return (
    <div>
      <div className="custom-macbook-pro">
        <div className="custom-div">
          <div className="custom-overlap">
            <img className="custom-img" alt="Img" src="/img/secteurexp.png" />
            <div className="custom-rectangle" />
            <HashLink to="/" className="custom-text-wrapper">À propos</HashLink>
            <HashLink to="/prestation" className="custom-text-wrapper-2">Nos métiers</HashLink>
            <HashLink to="/expertise" className="custom-text-wrapper-3">Secteurs d’expértise</HashLink>
            {/* <Link className="custom-text-wrapper-4">Candidature</Link> */}
            <HashLink to="/contact" className="custom-group">
              <div className="custom-overlap-group">
                <div className="custom-rectangle-2" />
                <div className="custom-text-wrapper-5">Contact</div>
              </div>
            </HashLink>
            <div className="custom-rectangle-3" />
            <div className="custom-text-wrapper-6">Nos secteurs d’expertise</div>
          </div>
          <div className="custom-logoprosec-wrapper">
            <img className="custom-logoprosec" alt="Logoprosec" src="/img/logoprosec-2.png" />
          </div>
          <div  className="custom-text-wrapper-7">Sièges sociaux</div>
          <img className="custom-pexels-expect-best" alt="Pexels expect best" src="/img/siege.png" />
          <p className="custom-prosecurita-sp">
            Prosecurita, spécialiste en sécurité, se concentre sur la protection incendie et la surveillance des sièges
            sociaux des entreprises. Afin de s’aligner parfaitement sur les besoins de ses clients, Prosecurita mène une
            évaluation exhaustive des risques et des missions avant de fournir ses services. L’objectif est double :
            garantir la sécurité des sites et optimiserl’allocation budgétaire qui leur est dédiée. <br />
            Prosecurita assure une protection complète des locaux, des employés et des parkings, au besoin, en mettant en
            place du personnel de surveillance ou de sécurité incendie (SSIAP).
          </p>
          <p className="custom-prosecurita-assure">
            Prosecurita assure la sécurisation des centres de logistique, des chaînes de distribution, des installations
            portuaires et des transports en commun, tels que les rames de métro, les autobus et les trains. <br />
            Nos services destinés aux chaînes de logistique et de distribution sont axés sur la protection des
            marchandises afin de réduire les risques de vol, de pertes et de dommages. Nous procédons généralement à un
            audit de sécurité pour identifier les éventuelles vulnérabilités dans la chaîne logistique.
          </p>
          <p className="custom-p">
            Dans le domaine des transports en commun, nous mettons à disposition du personnel de sécurité hautement
            qualifié pour assurer des missions de patrouille, de fouille et de contrôle d’accès, avec ou sans
            l’utilisation de chiens.
          </p>
          <div className="custom-text-wrapper-8">Retail</div>
          {/* <img   alt="Pexels expect best" src="/img/hotel.png" /> */}
          <div className="custom-text-wrapper-9">Transports et logistiques</div>
          <p className="custom-prosecurita-propose">
            Prosecurita propose des agents hautement qualifiés et expérimentés pour garantir la sécurité des clients et du
            personnel, tout en prévenant les vols. Leur adaptabilité et leur flexibilité leur permettent de faire face à
            toutes les situations rencontrées dans votre établissement : <br />
            Assurer la surveillance et le contrôle des accès, notamment aux entrées du centre commercial ou du magasin.{" "}
            <br />
            Maintenir une présence physique et une surveillance active dans l’ensemble du centre commercial ou du point de
            vente. <br />
            Sécuriser les issues de secours pour garantir la conformité aux normes de sécurité.
          </p>
          <p className="custom-tre-form-s-pour">
            Être formés pour intervenir en cas d’ncendie et prendre les mesures nécessaires pour assurer la sécurité des
            personnes et des biens. <br />
            Gérer les situations de crise telles que les évacuations d’urgence ou les manifestations.
          </p>
          <div className="custom-text-wrapper-10">Secteur hôtelier</div>
          
          <p className="custom-la-r-putation-d-un-h">
            La réputation d’un hôtel repose sur deux piliers essentiels : la qualité de l’accueil et du service offerts
            aux clients, ainsi que le sentiment de sécurité et de quiétude qu’ils doivent ressentir dès leur arrivée.{" "}
            <br />
            Les risques de sûreté à gérer sont nombreux et variés. Les équipes de sécurité doivent être préparées à faire
            face aux risques concrets tels que les vols en chambre, les agressions et les vols de bagages, tout en
            veillant à assurer la protection globale de l’établissement. <br />
            Prosecurita se spécialise dans la fourniture de services de sécurité pour les hôtels en France.
          </p>
          <p className="custom-elles-doivent">
            Elles doivent prendre en compte plusieurs facteurs tels que le caractère de l’établissement, son emplacement
            au cœur de la ville, le profil de la clientèle, ainsi que les événements spéciaux comme le Festival de Cannes
            ou la présence de personnalités nécessitant une coordination avec leurs propres équipes de sécurité ou les
            autorités locales. Les équipes de Prosecurita sont spécialement formées pour gérer toutes ces situations avec
            professionnalisme et discrétion.
          </p>
          <div className="custom-text-wrapper-11">Immobilier</div>
          <div className="custom-text-wrapper-121">Industries</div>
          {/* <p className="custom-pour-les">
            Pour les événements d’envergure, Prosecurita propose une prestation sur mesure comprenant : <br />
            La sécurisation du site de l’événement, de ses abords et des zones sensibles. <br />
            La gestion des flux de personnes, des files d’attente et des points d’accès.
          </p> */}
          {/* <p className="custom-la-protection-de-vip">
            La protection de VIP et de personnalités, y compris les escortes et la mise en place de zones VIP privatisées.{" "}
            <br />
            La surveillance des installations techniques telles que les régies, les équipements audiovisuels et les
            installations de sonorisation.
          </p> */}
          {/* <p className="custom-la-gestion-des">
            La gestion des situations de crise et la coordination avec les autorités locales et les services de secours en
            cas d’incident.
          </p> */}
          {/* <p className="custom-prosecurita-s-engage">
            Prosecurita s’engage à fournir des solutions de sécurité intégrées et personnalisées qui répondent aux besoins
            spécifiques de chaque client, tout en respectant les réglementations et normes en vigueur. Nous proposons une
            gamme complète de services, allant de la prévention à la surveillance, en passant par l’intervention et la
            gestion de crise. Nos domaines d’expertise incluent :
          </p> */}
          <p className="custom-prosecurita-s-engage"/>
            <p className="custom-prosecurita-immo">
            Prosecurita est le partenaire de sécurité privilégié pour de nombreuses entreprises gérant
            des parkings publics et privés, des biens immobiliers à usage de bureaux, des sites tertiaires
            et des bâtiments inoccupés ou occupés. La plupart de ces sites sont équipés de systèmes de
            télésurveillance, de contrôle d’accès sécurisé et de vidéosurveillance.
            Nous intervenons en fournissant des prestations de sécurité incendie, de surveillance
            classique ou avec chiens, de rondes de sécurité mobile et d’intervention en cas d’alarme.
            Chez Prosecurita, notre priorité est d’assurer la sécurité et la protection de nos clients, de
            leurs biens et de leurs espaces, en mettant en place des solutions adaptées à leurs besoins
            spécifiques.
          </p>
          <p className="custom-prosecurita-industrie">
          Les sites industriels présentent souvent des configurations complexes, des environnements
          contraignants et des besoins très spécifiques en matière de sécurité, compte tenu des
          matériaux potentiellement dangereux et des exigences de protection des équipements et
          des personnes.
          Prosecurita propose des solutions de sécurité complètes, parfaitement adaptées aux
          contraintes rencontrées dans les sites industriels. Nos services englobent le contrôle d’accès,
          les rondes de prévention avec ou sans chiens, la protection incendie,
          l’assistance aux personnes, le contrôle des intrusions et des stocks, la gestion des clés, ainsi
          qu’un contrôle renforcé pour l’accès aux zones sensibles.
          </p>
          <p className="custom-prosecurita-hopital">
          Les hôpitaux représentent un défi particulier en termes de sécurité, nécessitant la protection
          de l’établissement, du matériel médical, du personnel soignant, des patients et des visiteurs.
          Nous débutons par un audit approfondi afin de concevoir un plan de sécurité et de
          protection incendie adapté, en déterminant les moyens et les technologies appropriées. Nos
          agents de sécurité affectés aux hôpitaux bénéficient d’une formation hautement spécialisée,
          axée sur le service client, afin de répondre aux besoins spécifiques de chaque établissement,
          tenant compte de sa taille et de sa localisation géographique.
          Ils sont responsables de toutes les missions de sécurité, des rondes de surveillance, de la
          vérification des équipements de lutte contre l’incendie, et du respect des consignes de
          sécurité et d’incendie. Ils interviennent immédiatement en cas d’incendie, de risque
          d’incendie ou en cas de situation d’urgence.
          </p>
          

          <img className="custom-adobestock-2"  alt="Pexels expect best" src="/img/immobilier.png" />
          <img className="custom-adobestock" alt="Pexels expect best" src="/img/transport.png" />
          <img className="custom-stairs" alt="Pexels expect best" src="/img/retail.png" />
          <img className="custom-arton" alt="Pexels expect best" src="/img/hôtel.png" />
          <img className="custom-hopital" alt="Pexels expect best" src="/img/hopital.png" />
          <img className="custom-adobestocktrans" alt="Pexels expect best" src="/img/industrie.png" />
          
        </div>
      </div>
      <div className="custom-overlap-7">
        <div className="custom-rectangle-10" />
        <div className="custom-rectangle-11" />
        <img className="macbook-prologoprosec-2" alt="Logoprosec" src="/img/logoprosec-2.png" />
        <div className="custom-text-wrapper-24">Contact</div>
        <div className="custom-frame-4">
          <div className="custom-text-wrapper-25">À propos de nous</div>
          <div className="custom-text-wrapper-26">Nos prestations</div>
          <div className="custom-text-wrapper-26">Nos secteurs d’expertise</div>
          <div className="custom-text-wrapper-26">Candidature</div>
          <div className="custom-text-wrapper-26">Contact</div>
        </div>
        <div className="custom-text-wrapper-27">conctact@prosecurita.fr</div>
        <div className="custom-text-wrapper-28">Rrecrutement</div>
        <div className="custom-text-wrapper-29">candidature@prosecurita.fr</div>
        <p className="custom-text-wrapper-30">5 Rue des Blés, Saint-Denis 93200</p>
        <p className="custom-text-wrapper-31">01 55 93 11 50</p>
        <img className="custom-noun-location" alt="Noun location" src="/img/noun-location-4832828-1.svg" />
        <img className="custom-vector" alt="Vector" src="/img/vector.svg" />
        <img className="custom-noun-phone" alt="Noun phone" src="/img/noun-phone-6856463-1.svg" />
        <img className="custom-noun-email" alt="Noun email" src="/img/noun-email-6793880-1.svg" />
      </div>
    </div>
  );
};

