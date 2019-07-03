import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function Aracle(props) {

    return (
        <Paper style={{margin: 10, padding: 20,}} >
            <Typography style={{ textAlign: "center" }} variant="h4" component="h3">
                {props.title}
            </Typography>
            <br />
            <Typography component="div">
                {props.children}
            </Typography>
        </Paper>
    )
}
