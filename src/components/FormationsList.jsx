import React from "react";
import Formation from "./Formation";

const formations = [
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

class FormationsList extends React.Component {
  render() {
    return (
      <div>
        <h2>Formations</h2>
        {formations.map((formation) => (
          <Formation key={formations.id} {...formation} />
        ))}
      </div>
    );
  }
}

export default FormationsList;
