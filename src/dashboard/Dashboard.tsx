import { Grid } from '@mui/material';
import { Welcome } from './Welcome';
import { RegionSelector } from '../italy/italySvgSelector';

export const Dashboard = () => (
    <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={9}>
            <RegionSelector />
        </Grid>
        <Grid item xs={12} md={3}>
            <Welcome />
        </Grid>
        <Grid item xs={12} md={6}>
            maps
        </Grid>
    </Grid>
);
