import React from 'react';
import styles from '../../Styles/Home.module.scss'; 
import Menu from '../../Components/Menu/Menu';
import Footer from "../../Components/Footer/Footer";

import { Button } from 'react-bootstrap';
import Imagem01 from "../../assets/image01.png";
import Imagem02 from "../../assets/image02.png";
import Imagem03 from "../../assets/image03.png";
import Imagem04 from "../../assets/image04.png";
import Imagem05 from "../../assets/image05.png";
import Imagem06 from "../../assets/image06.png";
import Imagem07 from "../../assets/image07.png";
import Imagem08 from "../../assets/image08.png";
import Imagem09 from "../../assets/image09.png";
import Imagem10 from "../../assets/image10.png";
import Imagem11 from "../../assets/image11.png";
import Imagem12 from "../../assets/image12.png";
import KabumLogo from "../../assets/kabumLogo.png";
import DragonLogo from "../../assets/dragonLogo.png";
import RedragonLogo from "../../assets/redragonLogo.png";
import UbisoftLogo from "../../assets/ubisoftLogo.png";
import EpicLogo from "../../assets/epicLogo.png";
import SteamLogo from "../../assets/steamLogo.png";
import FifineLogo from "../../assets/fifineLogo.png";
import MancerLogo from "../../assets/mancerLogo.png";

import LensIcon from '@mui/icons-material/Lens';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import Card from '../../Components/Cards/Card';

function Home() {
  return (
    <div className="Home">
      <Menu />

      <section className={styles.topSection}>
        <div className={styles.topSectionText}>
          <h1>Aqui, mulheres jogam em paz com outras mulheres</h1>
          <span>Jogue online sem preocupações com desrespeito, participe de times femininos, interaja com a comunidade, fique por dentro de eventos e muito mais!</span>
          <Button className={styles.topSectionBtn} variant="primary">Quero participar!</Button>
        </div>
        <div>
          <img src={Imagem04} />
        </div>
      </section>

      <section className={styles.firstCardSection}>
        <div className={styles.firstCardSectionText}>
          <h4>Faça parte da  comunidade PowerTech</h4>
          <span>Sinta-se à vontade participando da nossa comunidade gamer</span>
        </div>
        <div className={styles.cards}>
          <Card
            title="Jogue com outras mulheres, forme equipes da forma que achar melhor"
            image={Imagem10}
            button="Formar equipe"
          />

          <Card
            title="Seja ativa nas comunidades através das nossas redes sociais"
            image={Imagem11}
            button="Ir para as redes sociais"
          />

          <Card
            title="Equipes femininas em competição têm o nosso apoio"
            image={Imagem12}
            button="Conheça o ProWoman"
          />

          <Card
            title="Fique por dentro das nossas competições, eventos e workshops"
            image={Imagem05}
            button="Conferir os eventos"
          />
        </div>
      </section>

      <section className={styles.proplayerSection}>
        <img src={Imagem03} />
        <div className={styles.proplayerSectionText}>
          <div className={styles.proplayerSectionTextH1}>
            <h1>Se torne uma proplayer com a ProWoman</h1>
          </div>
          <div className={styles.proplayerSectionTextSpan}>
            <span>Somos um projeto da comunidade PowerTech que incentiva equipes femininas de e-sports a competirem através de mentorias, promoção de competições, incentivo financeiro e mecânico.</span>
          </div>
          <div className={styles.proplayerSectionTextBtn}>
            <Button className={styles.topSectionBtn} variant="primary">Quero Participar!</Button>
          </div>
        </div>
      </section>

      <section className={styles.patrocinadoresSection}>
        <div className={styles.patrocinadoresSectionText}>
          <h4>Empresas que apoiam e patrocinam a PowerTech</h4>
          <span>Quer apoiar a comunidade?</span>
        </div>
        <div className={styles.patrocinadoresSectionImages}>
          <img src={KabumLogo}/>
          <img src={DragonLogo}/>
          <img src={RedragonLogo}/>
          <img src={UbisoftLogo}/>
          <img src={EpicLogo}/>
          <img src={SteamLogo}/>
          <img src={FifineLogo}/>
          <img src={MancerLogo}/>
        </div>
      </section>

      <section className={styles.eventoSection}>
        <div className={styles.eventoSectionText}>
          <h1 className={styles.eventoSectionTextPurple}>Eventos 100% femininos</h1>
          <p>Nossos eventos oferecem uma variedade de atividades pensadas para atender todos os gostos e níveis de habilidade. 
            <span className={styles.eventoSectionTextPurple}>Temos competições entre equipe femininas</span>, 
            <span className={styles.eventoSectionTextPurple}> workshops</span> e 
            <span className={styles.eventoSectionTextPurple}> palestras</span> inspiradoras com mulheres que estão fazendo a diferença no mundo dos games.
          </p>
          <p>Além disso, temos espaços dedicados para 
            <span className={styles.eventoSectionTextPurple}> networking</span> 
            e trocas de experiências, permitindo que você se conecte com outras jogadoras.
          </p>
          <p>Venha fazer parte dessa experiência única e ajude-nos a fortalecer a representatividade feminina no universo dos games!</p>
          <div className={styles.eventoSectionBtn}>
            <Button className={styles.eventoSectionBtnBlack} variant='dark'>Próximos eventos</Button>
            <Button className={styles.eventoSectionBtnWhite} variant='outline-dark'>Eventos anteriores</Button>
          </div>
        </div>
        <div className={styles.eventoSectionImagens}>
          <img style={{"height": "261px", "width": "659px"}} src={Imagem05} />
        <div className={styles.eventoSectionImagensCouple}>
          <img style={{"margin-right": "14px", "height": "261px", "width": "322px"}} src={Imagem06} />
          <img style={{"margin-left": "14px", "height": "261px", "width": "322px"}} src={Imagem07} />
        </div>
        </div>
      </section>

      <section className={styles.womantechSection}>
        <div>
          <img src={Imagem08}/>
          <div className={styles.womantechSectionText}>
            <p style={{"font-weight": "600", "margin-right": "16px", "color": "#240053"}}>
              Beatriz Cardoso 
              <span style={{"margin-left": "16px", "color": "#5902C8"}}><LensIcon style={{"font-size": "6px", "margin-right": "16px"}} />Desenvolvedora front-end na Kabum!</span>
            </p>
            <p style={{"color": "#4E4E4E", "font-style": "italic"}}>“Eu sou muito grata a ter conhecido a comunidade PowerTech, entrei nela para conhecer outras mulheres para jogar e fui participando cada vez mais do grupo, até que decidi participar da iniciativa WomanTech onde consegui minha vaga na Kabum!”</p>
          </div>
        </div>
        <div className={styles.womantechSectionTextRight}>
          <h1>WomanTech</h1>
          <h3>Conquiste sua vaga no mercado tech</h3>
          <p style={{"text-align": "left"}}>Está buscando uma oportunidade de trabalho na área de tech ou games? Graças a nossa parceria com a Alura, Kabum! e Ubisoft, nós oferecemos bolsas de capacitação, palestras e mentorias para te preparar para conseguir sua vaga.</p>
          <p>Afinal, lugar de mulher é na tecnologia!</p>
          <div className={styles.womantechSectionBtn}>
            <Button className={styles.womantechSectionBtnBlack} variant='dark'>Próximos eventos</Button>
            <Button className={styles.womantechSectionBtnWhite} variant='outline-dark'>Eventos anteriores</Button>
          </div>
        </div>

      </section>

      <section className={styles.voluntariasSection}>
        <div>
          <img src={Imagem09} />
          <div className={styles.voluntariasSectionCards}>
            <div className={styles.voluntariasSectionCard}>
              <div style={{"text-align": "left"}}>
                <h5>Mentoras proplayer</h5>
                <p>3 vagas</p>
              </div>
              <Button className={styles.voluntariasSectionBtnWhite} variant='dark'>Quero ser voluntária</Button>
            </div>
            <div className={styles.voluntariasSectionCard}>
              <div style={{"text-align": "left"}}>
                <h5>Eventos</h5>
                <p>1 vaga</p>
              </div>
              <Button className={styles.voluntariasSectionBtnWhite} variant='dark'>Quero ser voluntária</Button>
            </div>
          </div>
        </div>
        <div className={styles.voluntariasSectionText}>
          <div className={styles.voluntariasSectionTextRight}>
            <h3 style={{"font-weight": "600", "margin-right": "16px", "color": "#5902C8"}}>Seja uma de nossas voluntárias</h3>
            <p style={{"text-align": "left"}}>Nós temos como propósito mudar o cenário gamer e trazer mais representatividade feminina para ele. </p>
            <p style={{"text-align": "left"}}>Com uma equipe dedicada de voluntários, nos empenhamos em criar uma comunidade acolhedora e segura para todas as jogadoras.</p>
            <p style={{"font-weight": "600", "margin-right": "16px", "color": "#1B0931"}}>Junte-se a nós e faça parte desse movimento!</p>
          </div>
          <div className={styles.voluntariasSectionBtnPurple}>
            <h5>Conheça a nossa equipe de voluntários</h5>
            <ArrowForwardIcon />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
