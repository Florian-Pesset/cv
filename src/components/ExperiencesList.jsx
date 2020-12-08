import React from "react";
import Experiences from "./Experiences";
import styles from "../css/experiencesList.module.css";

const experiences = [
  {
    id: "1",
    nom: "Chef d’équipe",
    année: "Novembre 2017 - Septembre 2020",
    lieu: "SOLISO TECHNOLOGIES Carquefou",
    description:
      "Gestion d’équipe, préparation de postes, formation du personnel.Programmation des Commandes Numériques (Alphacam, Autocad).",
  },
  {
    id: "2",
    nom: "Opérateur de production",
    année: "Janvier 2016 - Novembre 2017",
    lieu: "SOLISO TECHNOLOGIES Carquefou",
    description: "Pilotages de commandes numériques.",
  },

  {
    id: "3",
    nom: "Opérateur de production",
    année: "Septembre 2015 - Décembre 2015",
    lieu: "JANNEAU MENUISERIE - Le Loroux Bottereaux",
    description:
      "Découpe, montage, laquage, des menuiseries (bois/alu/PVC) sur commandes numériques, et machines traditionnelles.",
  },
  {
    id: "4",
    nom: "Opérateur de production",
    année: "Eté 2015",
    lieu: "DISPANO - Nantes",
    description: "Découpe, plaquage, de panneaux bois",
  },
  {
    id: "5",
    nom: "Trieur",
    année: "2014 - 2015",
    lieu: "CHRONOPOST - Vertou",
    description: "Manutentionnaire, tri colis en horaires de nuit",
  },
  {
    id: "6",
    nom: "STAGE Bureau Méthodes",
    année: "Juin 2012- Février 2013",
    lieu: "FRANCIAFLEX - Guipry",
    description:
      "Réalisation d’une étude de réimplantation partielle de l’atelier",
  },
];

class ExperiencesList extends React.Component {
  render() {
    return (
      <div>
        <h2>Expériences</h2>
        <div className={styles.mainexp}>
          {experiences.map((experience) => (
            <Experiences key={experiences.id} {...experience} />
          ))}
        </div>
      </div>
    );
  }
}

export default ExperiencesList;
