import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navBar: {
        width: '100%',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBarLink: {
        textDecoration: 'none',
        margin: '0 20px',
        fontFamily: 'Nunito'
    }
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.navBar}>
            <Link className={classes.navBarLink} to={ROUTES.MAIN}>Главная</Link>
            <Link className={classes.navBarLink} to={ROUTES.CONVERTER}>Конвертер</Link>
        </div>
    )
}

export { Navbar }