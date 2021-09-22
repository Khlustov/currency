import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    converterPage: {
        width: '100%',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    converterInputContainer: {
        display: 'flex',
        margin: '10px auto'
    },
    converterInputElement: {
        margin: '0 10px',
    }
}));

const ConverterPage = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.converterPage}>
            <div className={classes.converterInputContainer}>
                <TextField 
                className={classes.converterInputElement}
                id="outlined-basic"                
                variant="outlined" 
                />                
                <Select 
                className={classes.converterInputElement}
                labelId="label" 
                id="select" 
                value="20" 
                variant="outlined">
                  <MenuItem value="10">Ten</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                </Select>
            </div>
            <div className={classes.converterInputContainer}>
                <TextField 
                className={classes.converterInputElement}
                id="outlined-basic"                
                variant="outlined" 
                />                
                <Select 
                className={classes.converterInputElement}
                labelId="label" 
                id="select" 
                value="20" 
                variant="outlined">
                  <MenuItem value="10">Ten</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                </Select>
            </div>
        </div>
    )
};

export { ConverterPage };