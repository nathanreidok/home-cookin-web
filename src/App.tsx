import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { BrowserRouter, Link as RouterLink, Route, Switch } from 'react-router-dom';
import Recipes from './components/Recipes'
import Recipe from './components/Recipe';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: '64px'
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


export default function App() {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <MenuIcon className={classes.icon} />
                    <Typography component={RouterLink} to='/' variant="h6" color="inherit" noWrap>Home Cookin</Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.main}>
                <Switch>
                    <Route path='/' exact={true} component={Recipes}/>
                    <Route path='/recipes/:id' exact={true} component={Recipe}/>
                </Switch>
            </main>
            {/* <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://material-ui.com/">
                        Your Website
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </footer> */}
        </BrowserRouter>
    );
}