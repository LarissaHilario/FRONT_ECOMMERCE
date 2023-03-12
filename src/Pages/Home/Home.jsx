import { Button, Typography } from "@mui/material"
import Header from "../../components/Header/Header"
import styles from './Home.module.css'
import Person from '/person.svg'
import SearchIcon from '@mui/icons-material/Search';

const Home =()=>{
    return (
        <>
        <Header></Header>
        <Typography variant="h1" component="h2"className={styles.h1}  sx={{fontWeight: 'bold', fontSize:45}} color='fourth'>Encuentra el servicio que necesitas en un solo click</Typography>
        <Button variant="contained" startIcon={<SearchIcon />} color="secondary" size="large">
                Buscar
        </Button>
        <img className={styles.person} src={Person}></img>
        </>
    )

}

export default Home