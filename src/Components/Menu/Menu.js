import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../../Styles/Menu.module.scss'
import Button from 'react-bootstrap/Button';

function Menu() {
  return (
    <>
      <Navbar className={styles.navContainer} >
        <Container className={styles.container}>
          <Navbar.Brand href="#home" className={styles.navLink}>Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className={styles.navLink}>Inicio</Nav.Link>
            <Nav.Link href="#features" className={styles.navLink}>Comunidades</Nav.Link>
            <Nav.Link href="#pricing" className={styles.navLink}>Formar equipes</Nav.Link>
            <Nav.Link href="#pricing" className={styles.navLink}>Eventos</Nav.Link>
            <Nav.Link href="#pricing" className={styles.navLink}>Parceiros</Nav.Link>
            <Nav.Link href="#pricing" className={styles.navLink}>Organização</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="#home" className={styles.navLink}>Apoiar o projeto</Nav.Link>
            <Button variant="outline-light">Entrar</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;