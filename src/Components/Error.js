import React from 'react'
import { Grid } from '@material-ui/core'
import notfound from './Assets/404-error.gif'

export default function Error(){
    return(
        // Using Grid from Material UI
        <Grid container direction="column" alignItems="center" justify="center">
        <img src={notfound}/>
        </Grid>
    );
}
