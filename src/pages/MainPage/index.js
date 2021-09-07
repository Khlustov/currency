import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCurrencies } from '../../actions/getAllCurrencies';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    mainPage: {
        width: '100%',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
    },
    mainPageWrapper: {
        width: '80%',
    },
    tableContainer: {
        width: '100%',
        height: '100%',
        fontFamily: 'Nunito',
        scrollbars: 'none' 
    },
    tableCellBody: {
        textAlign: 'center',
        fontFamily: 'Nunito',
        color: '#6d6d6d'
    },
    tableCellHeader: {
        textAlign: 'center',
        fontFamily: 'Nunito',
        color: '#000'
    },
    collapse: {
        width: '100%',
        height: '100%',
    }
}));

const columns = [
    {id: 'currencyAbbreviation', label: 'Аббревиатура', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US')},    
    {id: 'currencyName', label: 'Количество', minWidth: 170, align: 'center'},
    {id: 'scale', label: 'Валюта', minWidth: 170, align: 'center'},
    {id: 'rate', label: 'Курс', minWidth: 170, align: 'center'}, 
];

const MainPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currencies = useSelector(state => state.main.currencies); 
    const [checked, setChecked] = useState(false);
    const rows = [];   

    if(currencies) {
        currencies.map((item) => {
            return rows.push(item);
        });
    };
    
    useEffect(() => {
        dispatch(getAllCurrencies());
        setChecked((prev) => !prev);        
    }, [dispatch]);

    return (
        <div className={classes.mainPage}>
            <Slide
            direction='up'            
            in={checked}
            {...(checked) ? {timeout: 1000} : {}}
            >
                <div className={classes.mainPageWrapper}>
                    <TableContainer className={classes.tableContainer}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} className={classes.tableCellHeader}>
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => {
                                    return (
                                        <TableRow hover key={row.Cur_ID}>
                                           <TableCell className={classes.tableCellBody}>{row.Cur_Abbreviation}</TableCell>
                                           <TableCell className={classes.tableCellBody}>{row.Cur_Scale}</TableCell>
                                           <TableCell className={classes.tableCellBody}>{row.Cur_Name}</TableCell>
                                           <TableCell className={classes.tableCellBody}>{row.Cur_OfficialRate}</TableCell>
                                        </TableRow>
                                    )
                                })}        
                            </TableBody>
                        </Table>
                    </TableContainer>                    
                </div>
            </Slide>
        </div>
    )
};

export { MainPage };