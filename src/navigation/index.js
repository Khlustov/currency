import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Footer, EmailModal, SuccessEmailSending } from '../components';
import { ROUTES } from '../constants';
import { MainPage, ConverterPage } from '../pages';

export const Navigator = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path={ROUTES.CONVERTER} component={ConverterPage}/>
                <Route path={ROUTES.MAIN} component={MainPage}/>
            </Switch>
            <Footer/>
            <EmailModal/> 
            <SuccessEmailSending/>          
        </BrowserRouter>
    )
}