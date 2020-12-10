import React from "react";
import Formation from "./Formation";

import styles from "../css/formationsList.module.css";

const formations = [
  {
    id: "1",
    nom: "Développeur web/ web mobile",
    année: "Septembre 2020- Février 2021",
    lieu: "Wild Code School - Nantes",
    description: `Création et développement d’applications web, apprentissage de méthodes agiles (Scrum), ainsi que de l’environnement de travail du développeur grâce à diverses technologies.\n
      Pendant 5 mois de formation nous réalisons divers projets en équipe dont des cas concrets de clients, appris a nous développer de façon autonome ainsi que nous positionner sur le marché du travail. \n 
      Javascript, HTML, CSS, ReactJS, NodeJS, SQL, Git, Github, Scrum`,
  },
  {
    id: "2",

    nom: "BTS Développement et Réalisation Bois",
    année: "2011-2013",
    lieu: "École supérieure du bois/Lycée Arago - Nantes",
    description: `L'objectif de ce BTS est de former des spécialistes de la conception et de l'industrialisation d'un produit dans la filière bois (ameublement, menuiserie industrielle, mobilier d'agencement).\n
      On étudie la chaîne complète d'un produit bois depuis sa conception jusqu'au recyclage. On maîtrise les phases de fabrication spécifiques aux secteurs : ameublement, menuiserie, agencement, parquets et lambris.\n
      Connaissant les solutions techniques constructives, les matériaux et les procédés, il peut développer des produits en vue de leur réalisation : établir les modifications du produit, vérifier la faisabilité technico-économique, participer à l'amélioration de la réalisation. \n
      J'ai acquis un ensemble de techniques comme la CAO et la FAO (maquette numérique) et les process pour élaborer une fabrication industrielle, réaliser le dossier d'industrialisation, calculer les coûts de production prévisionnels... \n
      J'ai été formé à l'organisation de la production : planification des approvisionnements et des opérations de maintenance, adaptation charge de travail et ressources humaines, utilisation d' un système de gestion intégré (ERP). `,
  },
  {
    id: "3",

    nom: "1ère année DUT Sciences et Génie des Matériaux ",
    année: "2010-2011",
    lieu: "IUT de la Fleuriaye - Carquefou",
    description: `Matériaux et sciences connexes : matériaux métalliques et polymères, chimie, structure de la matière, thermodynamique, physique appliquée, statique du solide.\n
    Bases du génie des matériaux : découverte des matériaux et des techniques de mise en œuvre, techniques expérimentales,dessin assisté par ordinateur, hygiène sécurité environnement développement durable. \n
    Langages fondamentaux : expression-communication, langue vivante, projet personnel et professionnel, dessin et documentation technique, mathématiques, adaptation individualisée. Sciences appliquées aux matériaux : matériaux verres et céramiques,chimie des solutions, écoulement des fluides, phénomènes de transfert, résistance des matériaux. \n
    Ingénierie des matériaux : ingénierie et écoconception, ingénierie des métaux, des polymères, des verres et des céramiques, caractérisation des matériaux, analyse technique et technologie, mesure industrielle.`,
  },
  {
    id: "4",
    nom:
      "Baccalauréat Sciences et Techniques Industrielles option «Génie des Matériaux» ",
    année: "2010",
    lieu: "Lycée Livet - Nantes",
    description: `Au cours de cette formation les étudiants sont formés sur quatre spécialités : plasturgie, fonderie, céramique et verre. Les enseignements de ce baccalauréat sont assez larges : 
      Physique des matériaux, Analyse du coût et de la qualité d’un produit, Systèmes de production, Energie électrique`,
  },
];

class FormationsList extends React.Component {
  render() {
    return (
      <div>
        <h2>Formations</h2>
        <div className={styles.mainexp}>
          {formations.map((formation) => (
            <Formation key={formations.id} {...formation} />
          ))}
        </div>
      </div>
    );
  }
}

export default FormationsList;
