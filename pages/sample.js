import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Header from '../components/Header';

const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
        primary: { main: purple[500] }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
        color: 'red'
    }
});

const styles = {
    primaryText: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(1, 2),
        color: theme.palette.text.primary,
    }
}

export default function SamplePage() {

    return (
        <div className="root">
            <Header headName="sample" />
            <div style={{paddingTop:60}}>
                <ThemeProvider theme={theme} >
                    <p style={styles.primaryText}>Hello World</p>
                    <Button color="primary">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                </ThemeProvider>
            </div>
        </div>
    )
}