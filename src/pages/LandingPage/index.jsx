import React, { useEffect, useState, useRef } from 'react';
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
  const ref = useRef(null);
  const [headerIndex, setHeaderIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const goBottom = () => {
    var node = ref.current;
    var height = node.getBoundingClientRect().height;
    console.log('click')
    window.scrollTo({
      top: height,
      behavior: 'smooth'
    })
  }

  return (
    <StylesProvider injectFirst>
      <div ref={ref}>
        <Header headerIndex={headerIndex} goTop={goTop} goBottom={goBottom} />
        <MobileHeader mobileIndex={mobileIndex} goTop={goTop} goBottom={goBottom} />
        <MainPage setHeaderIndex={setHeaderIndex} goTop={goTop} goBottom={goBottom} />
        <UserPage setHeaderIndex={setHeaderIndex} goTop={goTop} goBottom={goBottom} />
        <MobileUserPage mobileIndex={mobileIndex} setMobileIndex={setMobileIndex} goTop={goTop} goBottom={goBottom} />
        <SellerPage mobileIndex={mobileIndex} setHeaderIndex={setHeaderIndex} setMobileIndex={setMobileIndex} goTop={goTop} goBottom={goBottom} />
        <ValuePage setHeaderIndex={setHeaderIndex} goTop={goTop} goBottom={goBottom} />
        <FooterPage />
      </div>
    </StylesProvider>
  );
}

export default LandingPage;
