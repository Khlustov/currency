import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    emailModalWrapper: {
        width: '100%',
        height: '100vh',
        backdropFilter: 'blur(1.5px)',
        position: 'fixed',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
        transform: 'scale(0)',        
    },
    emailModalWrapperActive: {
        width: '100%',
        height: '100vh',
        backdropFilter: 'blur(1.5px)',
        position: 'fixed',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
        transform: 'scale(1)',
        transition: '0.5s'
    },
    modal: {
        width: '400px',
        height: '400px',
        backgroundColor: '#FFF',
        borderRadius: '10px',
        border: '1px solid #6d6d6d'
    }
}));

const EmailModal = () => {
    const active = useSelector(state => state.emailModal.active);
    
    const classes = useStyles();

    return (
        <div 
        className={active ? classes.emailModalWrapperActive : classes.emailModalWrapper}
        >
            <form 
            className={classes.modal}
            >
                <TextField label="Ваше имя" variant="outlined"/>
                <TextField label="Ваш email" variant="outlined"/>
                
            </form>
        </div>
    )
};

export { EmailModal };