import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccessibleForward from '@material-ui/icons/AccessibleForward';
import FullWidthGrid from '../components/MyLayout';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.AccessibleForward} color="inherit" aria-label="Menu">
            <AccessibleForward />
          </IconButton>
          <Typography variant="h6" color="inherit">
            AccessibleForward
          </Typography>
        </Toolbar>
      </AppBar>

      <FullWidthGrid/>
    </div>
  );
}