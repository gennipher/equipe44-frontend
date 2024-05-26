import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../../Styles/Menu.module.scss'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"

function Menu() {
  return (
    <>
      <Navbar className={styles.navContainer}>
        <Container className={styles.navContent}>
          <div className={styles.navContainerLeft}>
            <Navbar.Brand className={styles.navLink}>
              <Link 
                to="/" 
                style={{textDecoration: "none", color: "white"}}
              >
                Logo
              </Link>
            </Navbar.Brand>
            <Nav className={styles.navLinks}>
              <Nav.Link className={styles.navLink}>
                <Link 
                  to="/" 
                  style={{textDecoration: "none", color: "white"}}
                >
                  Inicio
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.navLink}>
                <Link 
                  to="/comunidades" 
                  style={{textDecoration: "none", color: "white"}}
                >
                  Comunidades
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.navLink}>
                <Link 
                  to="/formar-equipe" 
                  style={{textDecoration: "none", color: "white"}}
                >
                  Formar equipes
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.navLink}>
                <Link 
                  to="/eventos" 
                  style={{textDecoration: "none", color: "white"}}
                >
                  Eventos
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.navLink}>
                <Link 
                  to="/parceiros" 
                  style={{textDecoration: "none", color: "white"}}
                >
                  Parceiros
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.navLink}>
                <Link 
                  to="/organizacoes" 
                  style={{textDecoration: "none", color: "white"}}
                >
                  Organizações
                </Link>
              </Nav.Link>
            </Nav>
          </div>
          <div className={styles.navContainerRight}>
            <Nav className={styles.navLinks}>
              <Nav.Link href="#home" className={styles.navLink}>Apoiar o projeto</Nav.Link>
              <Button variant="outline-light">Entrar</Button>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;