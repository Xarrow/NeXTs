import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccessibleForward from '@material-ui/icons/AccessibleForward';
import Head from 'next/head';
import Link from 'next/link';

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
      <Head>
         <title>NeTXs</title>
         <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
      </Head>
      {/* <Head>
        <meta
          name="viewport"
          content="initial-scale=1.2, width=device-width"
          key="viewport"
        />
      </Head> */}
      <AppBar position="fixed" style={{background:"hsl(214, 78%, 50%)" ,opacity:1}}>
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