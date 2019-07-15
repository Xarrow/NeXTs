import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Functions, } from '@material-ui/icons';
import Head from 'next/head';
import Link from 'next/link';

export default function Header(props, ) {
  const headName = props.headName || "FuncTIons";
  return (
    <div>
      {/* Head */}
      <Head>
        <title>{headName}</title>
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta name="theme-color" content="hsl(214, 78%, 50%)" />
      </Head>

      {/* AppBar */}
      <AppBar position="fixed"
        style={{ backgroundColor: "hsl(214, 78%, 50%)", opacity: 1 }}>
        <Toolbar variant="dense">
          <Link href="/" prefetch >
            <IconButton edge="start" color="inherit" >
              <Functions />
            </IconButton>
          </Link>
          <Typography variant="h6" color="inherit">
            <span>{headName}</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}