import React from 'react';
import styles from '../../Styles/Home.module.scss'; 
import Menu from '../../Components/Menu/Menu';
import { Button } from 'react-bootstrap';
import Imagem01 from "../../assets/image01.png";
import Imagem02 from "../../assets/image02.png";
import Card from '../../Components/Cards/Card';

function Home() {
  return (
    <div className="Home">
      <Menu />

      <section className={styles.topSection}>
        <div className={styles.topSectionText}>
          <h1>Imagine um lugar para jogar em paz</h1>
          <span>Onde você pode jogar on-line sem ter que lidar com uma equipe tóxica, participando de equipes femininas, interagir na comunidade, participar de eventos e muito mais!</span>
          <Button className={styles.topSectionBtn} variant="primary">Comunidade</Button>
        </div>
        <div>
          <img src={Imagem01} />
        </div>
      </section>

      <section className={styles.mediumSection}>
        <div className={styles.mediumSectionText}>
          <h4>Faça parte da  comunidade [NOME]</h4>
          <span>Aqui você vai se sentir em casa ao participar da comunidade gamer</span>
        </div>
        <div className={styles.cards}>
          <Card
            title="Jogue junto de outras mulheres, forme uma equipe aleatória ou fixa"
            image={Imagem01}
            button="Formar equipe"
          />

          <Card
            title="Interaja com a comunidades através das nossas redes sociais"
            image={Imagem01}
            button="Ver as redes sociais"
          />

          <Card
            title="Apoiamos equipes femininas que querem competir"
            image={Imagem01}
            button="Conheça o ProWoman"
          />

          <Card
            title="Fique por dentro das nossas competições, eventos e workshops"
            image={Imagem01}
            button="Conferir os eventos"
          />
        </div>
      </section>

      <section className={styles.bottomSection}>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
