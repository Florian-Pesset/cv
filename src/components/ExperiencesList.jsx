import React from "react";
import Experiences from "./Experiences";

const experiences = [
  {
    id: "1",
    nom: "Développeur web/ web mobile",
    année: "Septembre 2020- Février 2021",
    lieu: "Wild Code School - Nantes",
    description:
      "Javascript, HTML, CSS, ReactJS, NodeJS, SQL, Git, Github, Scrum",
  },
  {
    id: "2",

    nom: "BTS Développement et Réalisation Bois",
    année: "2011-2013",
    lieu: "École supérieure du bois/Lycée Arago - Nantes",
    description:
      "Fabrication et sécurité, mécanique appliquée, étude d'industrialisation, organisation et gestion de la production, qualité.",
  },
  {
    id: "3",

    nom: "1ère année DUT Sciences et Génie des Matériaux ",
    année: "2010-2011",
    lieu: "IUT de la Fleuriaye - Carquefou",
    description: "",
  },
  {
    id: "4",
    nom:
      "Baccalauréat Sciences et Techniques Industrielles option «Génie des Matériaux» ",
    année: "2010",
    lieu: "Lycée Livet - Nantes",
    description: "",
  },
];

class ExperiencesList extends React.Component {
  render() {
    return (
      <div>
        <h2>Expériences</h2>
        {experiences.map((experience) => (
          <Experiences key={experiences.id} {...experience} />
        ))}
      </div>
    );
  }
}

export default ExperiencesList;
