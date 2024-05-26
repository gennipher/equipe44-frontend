import React from 'react';
import Menu from '../../Components/Menu/Menu';
import Footer from '../../Components/Footer/Footer';
import Imagem14 from '../../assets/image14.png'
import { Button, Form, InputGroup } from 'react-bootstrap';
import styles from '../../Styles/FormarEquipe.module.scss'
import SearchIcon from '@mui/icons-material/Search';

function Matching() {
    return (
        <>
            <Menu />

            <container className={styles.container}>
                <div className={styles.containerLeft}>
                    <div className={styles.containerLeftWhite}>
                        <div style={{"color": "#5902C8", "margin-bottom": "14px"}}>FORMANDO UMA EQUIPE</div>
                        <h1 style={{"text-align": "left", "font-weight": "600"}}>Matching</h1>
                        <p style={{"color": "#686868", "font-size": "14px", "margin-bottom": "14px", "text-align": "left"}}>Encontre jogadoras que podem ter o mesmo elo que você ou, quem sabe, uma personalidade parecida.</p>
                    </div>
                    <div className={styles.containerLeft}>
                        <div className={styles.containerLeftForms} style={{"display": "flex", "flex-direction": "row"}}>
                                <div className={styles.containerLeftForm} style={{"margin": "12px"}}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><SearchIcon/></InputGroup.Text>
                                        <Form.Control type="text" placeholder="Valorant" />
                                    </InputGroup >
                                </div>
                                <div className={styles.containerLeftForm} style={{"margin": "12px"}}>
                                    <Form.Select>
                                        <option value="1">Online</option>
                                        <option value="2">Ofline</option>
                                    </Form.Select >
                                </div>
                                <div className={styles.containerLeftForm} style={{"margin": "12px"}}>
                                    <Form.Select>
                                        <option value="1">Competitivo</option>
                                        <option value="2">Não competitivo</option>
                                    </Form.Select>
                                </div>
                        </div>
                        <Button className={styles.containerLeftPurpleBtn}>Iniciar Matching</Button>
                    </div>
                </div>
                
                <div>
                    <img src={Imagem14}/>
                </div>
            </container>      

            <Footer />
        </>
    );
}

export default Matching;
