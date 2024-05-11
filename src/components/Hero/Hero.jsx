import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hasim</h1>
        <p className={styles.description}>
        Experienced Web Developer | Transforming Ideas into Interactive Web Experiences with 5+ Years of Expertise | PHP, Laravel, CodeIgniter, MySQL, HTML, CSS, JavaScript, jQuery and Beyond
        </p>
        <a href="mailto:hasim.cs@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
