import React from 'react';
import * as styles from '../../styles';
import { StylesProvider } from '@material-ui/core';


const LandingPage = ({history}) => {
  return (
    <StylesProvider injectFirst>
        <styles.DYbtn></styles.DYbtn>
        <styles.LYbtn></styles.LYbtn>
        <styles.Whitebtn></styles.Whitebtn>
    </StylesProvider>
  );
}

export default LandingPage;
