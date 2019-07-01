import React from 'react';
import Grid from '@material-ui/core/Grid';
import Aracle from '../components/Aracle';
import styles from '../static/jian.css';

export default function Body(props) {
    return (
        <div className={styles.BodyGrid}>
        <Grid container spacing={2}>
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
        </div>
    )
}