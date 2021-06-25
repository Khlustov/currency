import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerIconsContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 100
    },
    iconContainer: {
        margin: '0 10px',
    },
    icons: {
        color: '#6d6d6d',
        '&:hover': {
            color: '#000'
        },
        transition: `all 400ms ease-in-out`,
    }
   
}));

const Footer = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <div className={classes.footer}>
            <div className={classes.footerIconsContainer}>
                <Slide 
                direction='right' 
                in={checked}
                {...(checked ? {timeout: 2000} : {})}
                >
                    <div className={classes.iconContainer}>
                        <a href='https://github.com/Khlustov'>
                            <GitHubIcon
                            className={classes.icons}                        
                            >                            
                            </GitHubIcon>
                        </a>
                    </div>
                </Slide>               
                <Slide 
                direction='right' 
                in={checked}
                {...(checked ? {timeout: 1500} : {})}
                >
                    <div className={classes.iconContainer}>
                        <FacebookIcon
                        className={classes.icons}
                        >

                        </FacebookIcon>
                    </div>
                </Slide>
                <Slide 
                direction='right' 
                in={checked}
                {...(checked ? {timeout: 1000} : {})}
                >
                    <div className={classes.iconContainer}>
                        <TelegramIcon
                        className={classes.icons}
                        >

                        </TelegramIcon>
                    </div>
                </Slide>
                <Slide 
                direction='right' 
                in={checked}
                {...(checked ? {timeout: 500} : {})}
                >
                    <div className={classes.iconContainer}>
                        <EmailIcon
                        className={classes.icons}
                        >

                        </EmailIcon>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export { Footer }