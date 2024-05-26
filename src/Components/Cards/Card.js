import React from "react"
import { Button } from "react-bootstrap"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from "../../Styles/Card.module.scss"

function Card({ image, title, button }) {
    return (
        <div className={styles.itemCard}>
            <img src={image} alt={title} />
            <p>{title}</p>
            <Button className={styles.btn} variant="">{button} <ArrowForwardIcon /></Button>
        </div>
    )
}

export default Card