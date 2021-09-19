import React, { useCallback, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { hideEmailModal, 
         changeEmailSenderName, 
         changeEmailSenderAdress, 
         changeEmailSenderMessage 
        } from '../../actions/emailModal';
import emailjs from 'emailjs-com';

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
        transition: '0.35s',        
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
        transition: '0.35s',
    },
    modal: {
        width: '95%',
        [theme.breakpoints.up('sm')]: {
            width: '55%',
        },        
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
    },
    modalButton: {
        fontFamily: 'Nunito',
    }
}));

const EmailModal = () => {    
    const dispatch = useDispatch();
    const classes = useStyles();

    const active = useSelector(state => state.emailModal.active);
    const name = useSelector(state => state.emailModal.emailSenderName);
    const adress = useSelector(state => state.emailModal.emailSenderAdress);
    const message = useSelector(state => state.emailModal.emailSenderMessage);
    
    const form = useRef();

    const hideModal = useCallback(() => {
        dispatch(hideEmailModal());
    }, [dispatch]);

    const onChangeEmailSenderName = useCallback((event) => {
        dispatch(changeEmailSenderName(event.target.value));
    }, [dispatch]);

    const onChangeEmailSenderAdress = useCallback((event) => {
        dispatch(changeEmailSenderAdress(event.target.value));
    }, [dispatch]);

    const onChangeEmailSenderMessage = useCallback((event) => {
        dispatch(changeEmailSenderMessage(event.target.value));
    }, [dispatch]);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_prlbftj', 'template_lhic5qr', form.current, 'user_L5D5b8atUSGUyPsjyBiuP')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        setTimeout(() => {dispatch(hideEmailModal())}, 500)
    }

    return (
        <div 
        className={active ? classes.emailModalWrapperActive : classes.emailModalWrapper}
        >
            <form 
            ref={form}
            className={classes.modal}           
            >
                <div className={classes.inputContainer}>
                    <TextField 
                    label="Ваше имя" 
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    value={name}
                    onChange={onChangeEmailSenderName}
                    name='name'
                    />
                    <TextField 
                    label="Ваш email" 
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    value={adress}
                    onChange={onChangeEmailSenderAdress}
                    name='email'
                    />
                    <TextField               
                    label="Текст сообщения"
                    multiline
                    rows={4}          
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    value={message}
                    onChange={onChangeEmailSenderMessage}
                    name='message'
                    />    
                </div> 
                <div className={classes.buttonsContainer}>
                    <Button 
                    color="secondary" 
                    onClick={hideModal}
                    className={classes.modalButton}
                    >
                    Отмена
                    </Button>
                    <Button 
                    color="primary" 
                    onClick={sendEmail}
                    className={classes.modalButton}
                    >
                    Отправить
                    </Button>                    
                </div>               
            </form>            
        </div>
    )
};

export { EmailModal };