import React from 'react';
import * as styles from '../../styles';
import { StylesProvider } from '@material-ui/core';
import MainPage from '../MainPage';
import UserPage from '../UserPage';

const LandingPage = ({history}) => {
  return (
    <StylesProvider injectFirst>
        <MainPage />
        <UserPage />
    </StylesProvider>
  );
}

export default LandingPage;
