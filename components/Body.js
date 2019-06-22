import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Aracle from '../components/Aracle';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3, 2),
    },
}));


export default function Body(props) {

    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item xs>
                {/* <Paper className={useStyles.paper}>XS</Paper> */}
            </Grid>
            <Grid item xs={8}>
               <Aracle title={props.title} > {props.children}</Aracle>
            </Grid>
            <Grid item xs>
                {/* <Paper className={useStyles.padding}>XS</Paper> */}
            </Grid>
        </Grid>
    )
}