import React from 'react';
import styles from '../../Styles/Footer.module.scss'; 

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialMedia}>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <div className={styles.footerLinks}>
          <a href="/privacy-policy">Política de Privacidade</a>
          <a href="/terms-of-service">Termos de Serviço</a>
          <a href="/contact-us">Contato</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;