import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    emailModalWrapper: {
        width: '100%',
        height: '100vh',
        backdropFilter: '10px',
    }
}));

const EmailModal = () => {

    const classes = useStyles();

    return (
        <div className={classes.emailModalWrapper}>
            <form>
                <TextField label="Ваше имя" variant="outlined"/>
                <TextField label="Ваш email" variant="outlined"/>
                
            </form>
        </div>
    )
};

export { EmailModal };