import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { getAllAbbreviations, onChangeTextareaValue } from '../../actions/converter';
import { RateReviewSharp } from '@material-ui/icons';

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
    const dispatch = useDispatch();
    const currencies = useSelector(state => state.converter.abbreviation);
    const inputValue = useSelector(state => state.converter.inputValue);
    const [fromCurrency, setFromCurrency] = useState('');    
    let rate; 
        
  
    const rates = Object.fromEntries(currencies.map((n) => [n.Cur_Abbreviation, n.Cur_OfficialRate / n.Cur_Scale]))    
    const abbreviatures = Object.keys(rates);
    
    abbreviatures.forEach(key => {        
        if(key === fromCurrency) {            
            rate = rates[key]
        }
    })
   
    const result = inputValue * rate;
         
    
    useEffect(() => {
        dispatch(getAllAbbreviations());               
    }, [dispatch]);      
    

    const fromCurrencyHandleChange = (event) => {        
        setFromCurrency(event.target.value);        
      }; 
      
    const inputValueHandleChange = useCallback((event) => {
        dispatch(onChangeTextareaValue(event.target.value))
    }, [dispatch])

    return (
        <div className={classes.converterPage}>
            <div className={classes.converterInputContainer}>
                <TextField 
                className={classes.converterInputElement}
                id="outlined-basic"                
                variant="outlined"
                onChange={inputValueHandleChange} 
                value={inputValue}
                />                
                <select                
                className={classes.converterInputElement}                
                onChange={fromCurrencyHandleChange}                 
                value={fromCurrency}                
                > 
                {abbreviatures.map((item) => (<option key={item} value={item}>{item}</option>))}                
                </select>                
            </div>
            <div className={classes.converterInputContainer}>
                {result ? result : ''} BYN
            </div>
        </div>
    )
};

export { ConverterPage };