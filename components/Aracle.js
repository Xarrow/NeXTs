import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const AracleMainTitle = {
    textAlign: "center",
    fontFamily: "'Google Sans',sans-serif",
    letterSpacing: "0.004em",
    marginTop: "1.8em",
    marginBottom: "1em",
}

const AracleSubTitle = {
    textAlign: "left",
    fontFamily: "'Google Sans',sans-serif",
    letterSpacing: "0.004em",
    marginTop: "1em",
    marginBottom: "1em",
    color:"hsl(0, 0%, 67%)"
}

const AraclePaper = { margin: 10, padding: 20, }

export default function Aracle(props) {
    return (
        <Paper style={AraclePaper} >
            <Typography
                style={AracleMainTitle}
                className={"AracleMainTitle"}
                variant="h4"
                component="h3">
                {props.title}
            </Typography>
            <p style={AracleSubTitle}>
                {props.modifiedTime === undefined ? "" : "同步时间 : " + props.modifiedTime}
            </p>
            <Typography component="div">
                {props.children}
            </Typography>
        </Paper>
    )
}
