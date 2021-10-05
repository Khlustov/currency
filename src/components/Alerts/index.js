import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    successSendingEmailWrapper: {
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',        
        transform: 'scale(0)',
        transition: '0.35s',
        zIndex: '20000'
    },
    successSendingEmailWrapperActive: {
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',        
        transform: 'scale(1)',
        transition: '0.35s',
        zIndex: '20000'
    },
    alertContainer: {
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            bottom: '100px',
            right: '50px',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '85vh',
        
    }
}));

const SuccessEmailSending = () => {
    const classes = useStyles();
    const active = useSelector(state => state.alerts.activeAlert);

    return (
        <div className={active ? classes.successSendingEmailWrapperActive : classes.successSendingEmailWrapper}>
            <div className={classes.alertContainer}>
            <Alert severity="success">
                <AlertTitle><strong>Спасибо</strong></AlertTitle>
                Ваше сообщение успешно отправлено
            </Alert>
            </div>
        </div>
    )
}

export { SuccessEmailSending };