import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccessibleForward from '@material-ui/icons/AccessibleForward';
import Link from 'next/link';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header(props, ) {
  const classes = useStyles();
  const headName = props.headName || "Access";

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Link href="/" prefetch >
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.AccessibleForward} color="inherit">
              <AccessibleForward />
            </IconButton>
            <Typography variant="h6" color="inherit">
              <span>{ headName }</span>
            </Typography>
          </Toolbar>
        </Link>
      </AppBar>
    </div>
  );
}