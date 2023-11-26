import { useEffect, useState } from "react"
import { Avatar, Box, Button, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { ItalySvg } from "./italySvg"
import regioni from '../data/regioni.json'
import { getProvincieByRegion } from '../data/model'
import type { IProvincia } from '../data/model'
import React from "react"


export const smallTypografy = ({ children }: { children: React.ReactNode }) => <Typography
    sx={{ display: 'inline' }}
    component="span"
    variant="body2"
    color="text.primary"
>
    {children}
</Typography>

type ProvincieListProps = { idRegione: number, onClick?: (nome: string) => void }
export const ProvincieList = ({ idRegione, onClick }: ProvincieListProps) => {
    const [provincie, setProvincie] = useState<IProvincia[]>([])

    useEffect(() => {
        setProvincie(getProvincieByRegion(idRegione))
    }, [provincie])

    const renderItem = (provincia: IProvincia) => {
        return <>
            <Box sx={{ height: "46px", flexDirection: 'column', display: 'flex', alignItems: 'flex-start' }}>
                <Button onClick={() => onClick && onClick(provincia.sigla)} variant="outlined" sx={{ width: "100%", padding: 1, margin: 2 }} >{provincia.nome}  </Button>
            </Box>
        </>
    }

    return <div>{provincie.map(renderItem)}</div>
}

export const FindCity = () => {
    // const [region, setRegion] = useState('')
    const [idRegion, setIdRegion] = useState(0)

    const handleRegion = (region: number) => region && setIdRegion(region)

    return <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={8} textAlign={'center'} alignItems={'center'}>
            <h3>Cerca la tua città</h3>
        </Grid>
        <Grid item xs={12} md={9} textAlign={'center'} alignItems={'center'}>
            <ItalySvg onRegion={handleRegion} />
        </Grid>
        <Grid item xs={12} md={3} textAlign={'center'} alignItems={'center'}>
            <ProvincieList idRegione={idRegion} />
        </Grid>
    </Grid>
}