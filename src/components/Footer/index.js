import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
   
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            Footer
        </div>
    )
}

export { Footer }