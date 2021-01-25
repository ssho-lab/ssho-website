import React, { useEffect, useState } from 'react';
import * as styles from '../../styles';
import { StylesProvider } from '@material-ui/core';

import { Header } from '../../components';

import MainPage from '../MainPage';
import UserPage from '../UserPage';
import SellerPage from '../SellerPage';
import ValuePage from '../ValuePage';
import FooterPage from '../FooterPage';

const LandingPage = ({history}) => {
  const [headerIndex, setHeaderIndex] = useState(0);

  return (
    <StylesProvider injectFirst>
        <Header headerIndex={headerIndex} />
        <MainPage setHeaderIndex={setHeaderIndex} />
        <UserPage setHeaderIndex={setHeaderIndex}   />
        <SellerPage setHeaderIndex={setHeaderIndex}   />
        <ValuePage setHeaderIndex={setHeaderIndex}   />
        <FooterPage />
    </StylesProvider>
  );
}

export default LandingPage;
