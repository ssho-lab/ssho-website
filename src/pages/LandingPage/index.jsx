import React from 'react';
import * as styles from '../../styles';
import { StylesProvider } from '@material-ui/core';
import MainPage from '../MainPage';

const LandingPage = ({history}) => {
  return (
    <StylesProvider injectFirst>
        <MainPage />
    </StylesProvider>
  );
}

export default LandingPage;
