import React from "react";
import styles from "../css/portfolio.module.css";
import geo from "../img/geobike.png";
import arena from "../img/arenapit.png";

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <h2>Portfolio</h2>
        <div className={styles.projects}>
          <div className={styles.geobike}>
            <a href="https://geobike.netlify.app/">
              <img src={geo} alt="geobike" className={styles.portfolioImg} />
            </a>
            <h3>
              <a href="https://geobike.netlify.app/">GeoBike</a>
            </h3>
            <p>
              2eme Projet proposé par la formation :{" "}
              <a href="https://geobike.netlify.app/">GeoBike</a> <br />
              Grâce aux API de Nantes métropole, nous devions réaliser une
              application pour aider les utilisateurs de vélos Bicloo. Nous
              proposons donc à l’utilisateur de pouvoir afficher des
              informations sur les stations de vélos autour de lui, comme le
              nombre de vélos disponibles ou de places de stations restantes. Il
              peut aussi afficher un itinéraire entre deux adresses ou
              géolocalisation ainsi qu’afficher les tarifs et abonnements
              disponibles.
            </p>
          </div>
          <div className={styles.arena}>
            <a href="https://arenapit.netlify.app/">
              {" "}
              <img src={arena} alt="arena" className={styles.portfolioImg} />
            </a>
            <h3>
              <a href="https://arenapit.netlify.app/">Arena Pit</a>
            </h3>
            <p>
              1er Hackathon : projet{" "}
              <a href="https://arenapit.netlify.app/">Arena Pit</a>
              <br />
              Le sujet du hackathon était d’aider un peuple d’une époque choisie
              par l’équipe, et sur un sujet de son choix. Le concept de notre
              site est d’aider le peuple romain de continuer à parier pour ses
              gladiateurs favoris. Pendant cette vague de peste, il peut alors
              continuer à miser tout en restant en sécurité.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
