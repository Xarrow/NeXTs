import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Body from '../components/Body';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // width: "90%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header {...props}/>
      <div style={{ paddingTop: 60 }}>
        {
          <Body
            title={props.title}
            text={props.text} >{props.children}
          </Body>
        }
      </div>
    </div>
  );
}
