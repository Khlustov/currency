import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

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
        width: '50%',        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',        
        backgroundColor: '#FFF',
        borderRadius: '10px',
        border: '1px solid #6d6d6d',
    },
    inputContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',        
        marginTop: '1rem', 
    },
    input: {
        width: '90%',
        margin: '0.5rem',
    },
    buttonsContainer: {
        width: '90%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '2rem',
        marginBottom: '1rem',        
    }
}));

const EmailModal = () => {
    const active = useSelector(state => state.emailModal.active);
    
    const classes = useStyles();

    return (
        <div 
        className={active ? classes.emailModalWrapperActive : classes.emailModalWrapper}
        >
            <form className={classes.modal}>
                <div className={classes.inputContainer}>
                    <TextField 
                    label="Ваше имя" 
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    />
                    <TextField 
                    label="Ваш email" 
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    />
                    <TextField               
                    label="Текст сообщения"
                    multiline
                    rows={4}          
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    />    
                </div> 
                <div className={classes.buttonsContainer}>
                    <Button color="secondary">Отмена</Button>
                    <Button color="primary">Отправить</Button>                    
                </div>               
            </form>
        </div>
    )
};

export { EmailModal };