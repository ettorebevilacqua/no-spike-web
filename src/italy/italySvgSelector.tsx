import { useState } from "react"
import { Grid } from '@mui/material'
import { ItalySvg } from "./italySvg"
import regioni from '../data/regioni.json'
// import { makeStyles } from "@material-ui/core/styles";


// const useStyles = makeStyles((theme:) => ({
//     paper: {
//       padding: theme.spacing(1),
//       textAlign: "center",
//       color: theme.palette.text.secondary
//     }
//   }));
const descrRegione = (cod:number) : string=>{
    const find = !cod ? null : regioni.find(reg=> reg.cod === cod)
    return find ? find.nome : ''
}

export const RegionSelector = () => {
    const [region, setRegion] = useState('')

    const handleRegion = (region: number) => region && setRegion(descrRegione(region) )

    return <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={12} textAlign={'center'} alignItems={'center'}>
            <h3>{region}</h3>
        </Grid>
        <Grid item xs={12} md={12} textAlign={'center'} alignItems={'center'}>
            <ItalySvg onRegion={handleRegion} />
        </Grid>
    </Grid>
}