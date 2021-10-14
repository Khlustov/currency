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
import { showAlert, hideAlert } from '../../actions/alerts'
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
    emailModalWrapper: {
        width: '100%',
        height: '100vh',
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
        boxShadow: '5px 5px 10px 1px rgba(0, 0, 0, 0.5)',
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
        dispatch(showAlert());
        setTimeout(() => {dispatch(hideEmailModal())}, 500);
        setTimeout(() => {dispatch(hideAlert())}, 2500);
    };

    const correctEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const notEmptyField = /^(?!\s*$).+/;


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
                    color={notEmptyField.test(name) ? "primary" : "secondary"}
                    />
                    <TextField 
                    label="Ваш email" 
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    value={adress}
                    onChange={onChangeEmailSenderAdress}
                    name='email'
                    color={correctEmail.test(adress) ? "primary" : "secondary"}
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
                    color={notEmptyField.test(message) ? "primary" : "secondary"}
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
                    disabled={notEmptyField.test(name) && correctEmail.test(adress) && notEmptyField.test(message) ? false : true}
                    >
                    Отправить
                    </Button>                    
                </div>               
            </form>            
        </div>
    )
};

export { EmailModal };