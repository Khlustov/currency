import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    successSendingEmailWrapper: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: '0',
        left: '0',        
        transform: 'scale(0)',
        transition: '0.35s',
    },
    successSendingEmailWrapperActive: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: '0',
        left: '0',        
        transform: 'scale(1)',
        transition: '0.35s',
    },
    alertContainer: {
        position: 'absolute',
        bottom: '100px',
        right: '50px',
        zIndex: '2000',
    }
}));

const SuccessEmailSending = () => {
    const classes = useStyles();

    return (
        <div className={classes.successSendingEmailWrapper}>
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