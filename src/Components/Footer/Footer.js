import React from 'react';
import styles from '../../Styles/Footer.module.scss'; 
import Logo from '../../assets/logo.png'
import InstagramLogo from '../../assets/instagramLogo.png'
import LinkedinLogo from '../../assets/linkedinLogo.png'
import YoutubeLogo from '../../assets/youtubeLogo.png'
import EmailLogo from '../../assets/emailLogo.png'
import PhoneLogo from '../../assets/phoneLogo.png'
import AppleStoreLogo from '../../assets/appleStoreLogo.png'
import GooglePlayLogo from '../../assets/googlePlayLogo.png'

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialMedia}>
          <div>
            <img src={Logo} />
            </div>
          <div>
            <p>Siga nossas redes sociais.</p>
            <div style={{"text-align": "left", "margin-top": "12px"}}>
              <a href="https://instagram.com" target="_blank" style={{"margin-right": "12px"}}><img src={InstagramLogo} /></a>
              <a href="https://linkedin.com" target="_blank" style={{"margin-right": "12px"}}><img src={LinkedinLogo} /></a>
              <a href="https://youtube.com" target="_blank" style={{"margin-right": "12px"}}><img src={YoutubeLogo} /></a>
            </div>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <a href="/">Inicio</a>
          <a href="/comunidade">Comunidade</a>
          <a href="/formar-equipe">Formar Equipe</a>
          <a href="/eventos">Eventos</a>
        </div>

        <div className={styles.footerLinks}>
          <a href="/parceiros">Parceiros</a>
          <a href="/organizacoes">Organizações</a>
          <a href="/apoiar">Apoiar Equipe</a>
        </div>
        
        <div className={styles.footerInfo}>
          <div className={styles.footerInfoContato}>
            <div>
              <img src={EmailLogo} />
              <p>contato@powertech.br</p>
            </div>
            <div>
              <img src={PhoneLogo} />
              <p>(11) 7894-5310</p>
            </div>
          </div>          
          <p style={{"margin-top": "12px"}}>Baixe o aplicativo da PowerTech</p>
          <div className={styles.footerInfoContato}>
            <div><img src={AppleStoreLogo} /></div>
            <div><img src={GooglePlayLogo} /></div>
          </div>
        </div>
      </div>
      <div style={{"bottom": "12px", 'position': "fixed", "text-align": "center"}}>
          <p>&copy; {new Date().getFullYear()} PowerTech - Brasil Todos os direitos reservados – 
          <span style={{"text-decoration": "underline"}}> Termos e condições de uso</span> e
          <span style={{"text-decoration": "underline"}}> Política de privacidade</span></p>
        </div>
    </footer>
  );
}

export default Footer;