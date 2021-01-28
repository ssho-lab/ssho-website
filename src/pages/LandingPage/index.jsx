import React, { useEffect, useState } from 'react';
import * as styles from '../../styles';
import { StylesProvider } from '@material-ui/core';

import { Header, MobileHeader } from '../../components';

import MainPage from '../MainPage';
import UserPage from '../UserPage';
import MobileUserPage from '../MobileUserPage';
import SellerPage from '../SellerPage';
import ValuePage from '../ValuePage';
import FooterPage from '../FooterPage';

const LandingPage = ({history}) => {
  const [headerIndex, setHeaderIndex] = useState(0);

  return (
    <StylesProvider injectFirst>
        <Header headerIndex={headerIndex} />
        <MobileHeader headerIndex={headerIndex} />
        <MainPage setHeaderIndex={setHeaderIndex} />
        <UserPage setHeaderIndex={setHeaderIndex}   />
        <MobileUserPage setHeaderIndex={setHeaderIndex}   />
        <SellerPage setHeaderIndex={setHeaderIndex}   />
        <ValuePage setHeaderIndex={setHeaderIndex}   />
        <FooterPage />
    </StylesProvider>
  );
}

export default LandingPage;
