import React from 'react';
import styles from '../../Styles/Home.module.scss'; 
import Menu from '../../Components/Menu/Menu';
import { Button } from 'react-bootstrap';
import Imagem01 from "../../assets/image01.png";
import Imagem02 from "../../assets/image02.png";
import KabumLogo from "../../assets/kabumLogo.png";
import DragonLogo from "../../assets/dragonLogo.png";
import RedragonLogo from "../../assets/redragonLogo.png";
import UbisoftLogo from "../../assets/ubisoftLogo.png";
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

      <section className={styles.firstCardSection}>
        <div className={styles.firstCardSectionText}>
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

      <section className={styles.proplayerSection}>
        <img src={Imagem02} />
        <div className={styles.proplayerSectionText}>
          <div className={styles.proplayerSectionTextH1}>
            <h1>Se torne uma proplayer com a ProWoman</h1>
          </div>
          <div className={styles.proplayerSectionTextSpan}>
            <span>Somos um projeto da comunidade [NOME] que incentiva equipes femininas de e-sports a competirem através de mentorias, promoção de competições, incentivo financeiro e mecânico.</span>
          </div>
          <div className={styles.proplayerSectionTextBtn}>
            <Button className={styles.topSectionBtn} variant="primary">Quero Participar!</Button>
          </div>
        </div>
      </section>

      <section className={styles.patrocinadoresSection}>
      <div className={styles.patrocinadoresSectionText}>
          <h4>Empresas que apoiam e patrocinam a [NOME]</h4>
          <span>Quer apoiar a comunidade?</span>
        </div>
        <div className={styles.patrocinadoresSectionImages}>
          <img src={KabumLogo}/>
          <img src={DragonLogo}/>
          <img src={RedragonLogo}/>
          <img src={UbisoftLogo}/>
          <img src={UbisoftLogo}/>
          <img src={UbisoftLogo}/>
          <img src={UbisoftLogo}/>
          <img src={UbisoftLogo}/>
        </div>
      </section>
    </div>
  );
}

export default Home;
