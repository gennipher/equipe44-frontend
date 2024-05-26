import React from 'react';
import Menu from '../../Components/Menu/Menu';
import Footer from '../../Components/Footer/Footer';
import Imagem13 from '../../assets/image13.png'
import { Button, Container } from 'react-bootstrap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from '../../Styles/FormarEquipe.module.scss'


function FormarEquipe() {
    return (
        <>
            <Menu />

            <container className={styles.container}>
                <div className={styles.containerLeft}>
                    <div className={styles.containerLeftWhite}>
                        <div style={{"color": "#5902C8", "margin-bottom": "14px"}}>OLÁ LUCIANA,</div>
                        <h1 style={{"text-align": "left", "font-weight": "600"}}>Você está prestes a formar equipe</h1>
                        <p style={{"color": "#686868", "font-size": "14px", "margin-bottom": "14px", "text-align": "left"}}>Para formar sua equipe, você pode usar nosso sistema de matching, entrar em uma equipe formada ou formar um time com outras jogadoras.</p>
                    </div>
                    <div className={styles.containerLeftPurple}>
                        <h5>DÊ MATCH COM JOGADORAS</h5>
                        <p style={{"text-align": "left", "font-size": "14px"}}>
                        Encontre jogadoras que podem ter o mesmo elo que o seu ou quem sabe a mesma personalidade. 
                        No nosso sistema de <span className={styles.containerLeftPurpleTextBold}> Matching </span>
                        você encontra quem precisa!</p>
                        <Button className={styles.containerLeftPurpleBtn}>Encontrar jogadoras <ArrowForwardIcon /></Button>
                    </div>
                    <div className={styles.formarEquipeCards}>
                        <div className={styles.formarEquipeCard} style={{"margin-right": "20px"}}>
                            <div style={{"text-align": "left"}}>
                                <h5>EQUIPE ALEATÓRIA</h5>
                                <p>Participe de um time com jogadoras escolhidas para você de forma aleatória.</p>
                            </div>
                            <Button className={styles.formarEquipeBtnWhite} variant='dark'>Entrar em equipe aleatória <ArrowForwardIcon /></Button>
                        </div>
                        <div className={styles.formarEquipeCard}>
                            <div style={{"text-align": "left"}}>
                                <h5>EQUIPE FIXA</h5>
                                <p>Algumas equipes já estão quase completas, mas precisam de uma jogadora a mais no time.</p>
                            </div>
                            <Button className={styles.formarEquipeBtnWhite} variant='dark'>Ver equipes formadas <ArrowForwardIcon /></Button>
                        </div>
                    </div>
                </div>
                
                <div>
                    <img src={Imagem13}/>
                </div>
            </container>      

            <Footer />
        </>
    );
}

export default FormarEquipe;
