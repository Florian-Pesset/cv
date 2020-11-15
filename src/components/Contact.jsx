import React from "react";
import styles from "../css/contact.module.css";
import Pdf from "../Florian-Pesset-CV2020.pdf";
import profil from "../img/profil.png";
import tel from "../img/tel.png";
import mail from "../img/mail.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import cv from "../img/cv.png";

function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Florian Pesset</h1>
      <h2>Développeur web</h2>
      <div>
        <img className={styles.profil} src={profil} alt="Florian Pesset" />
      </div>
      <div className={styles.numTel}>
        <img className={styles.tel} src={tel} alt="téléphone" />
        <a href="tel:+665340464">06 65 34 04 64</a>
      </div>
      <div className={styles.mailLink}>
        <img className={styles.mail} src={mail} alt="mail" />
        <a href="mailto:florianpesset@gmail.com">florianpesset@gmail.com</a>
      </div>
      <div className={styles.socialLinks}>
        <a href="https://github.com/Florian-Pesset/">
          <img className={styles.github} src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/florianpesset/">
          <img className={styles.linkedin} src={linkedin} alt="linkedin" />
        </a>
        <a href={Pdf} target="../Florian-Pesset-CV2020.pdf">
          <img className={styles.cv} src={cv} alt="cv" />
        </a>
      </div>
      <p className={styles.objectif}>
        Actuellement en reconversion à la Wild Code School de Nantes, je suis à
        la recherche d'un stage de 4 mois en tant que développeur web/ web
        mobile (HTML/CSS JS:React/Node). <br />
        <br /> Le stage aura lieu du 15 Février au 11 Juin 2021.
      </p>
    </div>
  );
}

export default Contact;
