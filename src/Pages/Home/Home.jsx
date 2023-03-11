import { Typography } from "@mui/material"
import Header from "../../components/Header/Header"
import styles from './Home.module.css'
import Person from '/person.svg'

const Home =()=>{
    return (
        <>
        <Header></Header>
        <Typography className={styles.h1}>Encuentra el servicio que necesitas en un solo click</Typography>
        <img className={styles.person} src={Person}></img>
        </>
    )

}

export default Home