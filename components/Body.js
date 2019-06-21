import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function Body(props) {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs>
                    {/* <Paper className={useStyles.paper}>XS</Paper> */}
                </Grid>
                <Grid item xs={8}>
                    <Paper className={useStyles.paper}>{props.children}</Paper>
                </Grid>
                <Grid item xs>
                    {/* <Paper className={useStyles.padding}>XS</Paper> */}
                </Grid>
            </Grid>
        </div>
    )
}