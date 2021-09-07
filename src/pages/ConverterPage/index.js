import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    converterPage: {
        width: '100%',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const ConverterPage = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.converterPage}>
            Converter
        </div>
    )
};

export { ConverterPage };