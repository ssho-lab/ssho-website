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
  const [mobileIndex, setMobileIndex] = useState(0);

  return (
    <StylesProvider injectFirst>
        <Header headerIndex={headerIndex} />
        <MobileHeader mobileIndex={mobileIndex} />
        <MainPage setHeaderIndex={setHeaderIndex} />
        <UserPage setHeaderIndex={setHeaderIndex} />
        <MobileUserPage mobileIndex={mobileIndex} setMobileIndex={setMobileIndex} />
        <SellerPage mobileIndex={mobileIndex} setHeaderIndex={setHeaderIndex} setMobileIndex={setMobileIndex} />
        <ValuePage setHeaderIndex={setHeaderIndex}   />
        <FooterPage />
    </StylesProvider>
  );
}

export default LandingPage;
