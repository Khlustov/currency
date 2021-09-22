import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { onChangeTextareaValue } from '../../actions/converter';
import { getAllCurrencies } from '../../actions/getAllCurrencies';
import CountUp from 'react-countup';


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
    },
    converterResult: {        
        fontFamily: 'Nunito',
        fontSize: '48px',
        color: '#3f51b5',
        fontWeight: '700',
        margin: '0 7px',
    },
    converterResultContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',  
            flexDirection: 'row',          
            justifyContent: 'center',
            alignItems: 'center',           
        },
    }
}));

const ConverterPage = () => {
    
    const classes = useStyles();
    const dispatch = useDispatch();
    const currencies = useSelector(state => state.converter.currencies);
    const inputValue = useSelector(state => state.converter.inputValue);
    const [fromCurrency, setFromCurrency] = useState('');      
    let rate; 

    useEffect(() => {
        dispatch(getAllCurrencies());                
    }, [dispatch]);
        
  
    const rates = Object.fromEntries(currencies.map((n) => [n.Cur_Abbreviation, n.Cur_OfficialRate / n.Cur_Scale]))    
    const abbreviatures = Object.keys(rates);
    
    abbreviatures.forEach(key => {        
        if(key === fromCurrency) {            
            rate = rates[key]
        }
    })
   
    const result = inputValue * rate;       
                 
    const fromCurrencyHandleChange = (event) => {        
        setFromCurrency(event.target.value);        
      }; 
      
    const inputValueHandleChange = useCallback((event) => {
        dispatch(onChangeTextareaValue(event.target.value))
    }, [dispatch])

    return (
        <div className={classes.converterPage}>
            <div className={classes.converterResultContainer}>                
                <CountUp className={classes.converterResult}start={0} end={result} duration={0.75} decimals={4}/>
                <span className={classes.converterResult}>BYN</span>
            </div>
            <div className={classes.converterInputContainer}>
                <TextField 
                className={classes.converterInputElement}
                id="outlined-basic"                
                variant="outlined"
                onChange={inputValueHandleChange} 
                value={inputValue}
                />                
                <Select                               
                className={classes.converterInputElement}                
                onChange={fromCurrencyHandleChange}                 
                value={fromCurrency} 
                defaultValue={''} 
                variant='outlined'              
                > 
                {abbreviatures.map((item) => (<MenuItem key={item} value={item}>{item}</MenuItem>))}                
                </Select>                
            </div>            
        </div>
    )
};

export { ConverterPage };