import React from 'react';
import * as styles from '../../styles';
import { StylesProvider } from '@material-ui/core';

import { Header } from '../../components';

import MainPage from '../MainPage';
import UserPage from '../UserPage';
import SellerPage from '../SellerPage';
import ValuePage from '../ValuePage';
import FooterPage from '../FooterPage';

const LandingPage = ({history}) => {
  return (
    <StylesProvider injectFirst>
        <Header />
        <MainPage />
        <UserPage />
        <SellerPage />
        <ValuePage />
        <FooterPage />
    </StylesProvider>
  );
}

export default LandingPage;
