import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    navBar: {
        width: '100%',
        height: '10vh',        
    },
    navBarLink: {
        textDecoration: 'none',
        margin: '0 20px',
        fontFamily: 'Nunito',
        color: '#6d6d6d',
        '&:hover': {
            color: '#000'
        },
        transition: `all 400ms ease-in-out`,
    },
    navBarLinksContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const Navbar = () => {
    const classes = useStyles();  
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked((prev) => !prev);
    }, [])
    

    return (
        <div className={classes.navBar}>          
            <Slide 
            direction="down" 
            in={checked} 
            {...(checked ? {timeout: 1000} : {})}
            >
                <div className={classes.navBarLinksContainer}>
                    <Link className={classes.navBarLink} to={ROUTES.MAIN}>Главная</Link>
                    <Link className={classes.navBarLink} to={ROUTES.CONVERTER}>Конвертер</Link>    
                </div>
            </Slide>                                
        </div>
    )
}

export { Navbar }