import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useDispatch } from 'react-redux';
import { showEmailModal } from '../../actions/emailModal';

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
        [theme.breakpoints.up('sm')]: {
            width: '85%',
        },
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    iconContainer: {
        margin: '0 10px',
    },
    iconContainerLast: {
        margin: '0 30px 0 10px',
        [theme.breakpoints.up('sm')]: {
            margin: '0 0 0 10px',
        },
    },
    icons: {        
        color: '#6d6d6d',
        '&:hover': {
            color: '#3f51b5'
        },
        transition: `all 400ms ease-in-out`,
    },
    emailButton: {         
        padding: '0',       
        background: 'none',
        border: 'none',
        cursor: 'pointer',        
    }
   
}));

const Footer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);    

    const showModal = useCallback(() => {
        dispatch(showEmailModal());
    }, [dispatch]); 

    useEffect(() => {
        setChecked((prev) => !prev);
    }, [])

    return (
        <div className={classes.footer}>
            <div className={classes.footerIconsContainer}>
                <Slide 
                direction='right' 
                in={checked}
                {...(checked ? {timeout: 1500} : {})}
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
                {...(checked ? {timeout: 1000} : {})}
                >
                    <div className={classes.iconContainer}>
                        <a href='https://t.me/AlexanderKhlustov'>
                            <TelegramIcon
                            className={classes.icons}
                            >
                            </TelegramIcon>
                        </a>
                    </div>
                </Slide>
                <Slide
                direction='right'
                in={checked}
                {...checked ? {timeout: 500} : {}}
                >
                    <div className={classes.iconContainerLast}>
                        <button className={classes.emailButton} onClick={showModal}>
                            <EmailIcon
                            className={classes.icons}
                            >
                            </EmailIcon>
                        </button>
                    </div>    
                </Slide> 
                
            </div>
        </div>
    )
}

export { Footer }