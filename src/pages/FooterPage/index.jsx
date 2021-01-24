import React, { useEffect, useState } from 'react';

import * as styles from '../../styles';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'
import { SshoLogo } from '../../data';

import AppStore from '../../data/icon/appstore.png';
import playStore from '../../data/icon/playstore.png';


const FooterPage = ({history}) => {

  return (
        <styles.box color={styles.backLightYellow} style={{position: 'relative'}}>
            <StyledContainer>
                <StyledContentContainer>
                    <SshoLogo />
                <styles.FooterText>
                    <>
                    스쇼 서울시 마포구 백범로 35 서강대학교 떼이야르관 515호<br />
                    사업자등록번호 402-26-66251<br />
                    고객문의 / 쇼핑몰 제휴 문의 customer@s-sho.kr<br />
                    투자자 문의 investment@s-sho.kr<br />
                    SNS <>카카오톡</> <>인스타그램</> <>페이스북</>
                    </>
                </styles.FooterText>
                <Grid container direction="row">
                    <Grid item md> 
                        <styles.button color={styles.deepYellow}>
                            <IconImage src={AppStore} />
                            <div style={{width: '80%', justifyContent: 'center'}}>
                                <styles.buttonText>App Store</styles.buttonText>
                            </div>
                        </styles.button>
                    </Grid>
                    <Grid item md>
                        <styles.button color={styles.deepYellow} style={{marginLeft: 18}}>
                            <IconImage src={playStore} />
                            <div style={{width: '80%', justifyContent: 'center'}}>
                              <styles.buttonText>Google Play</styles.buttonText>
                            </div>
                        </styles.button>
                    </Grid>
                </Grid>
                </StyledContentContainer>

            </StyledContainer>
        </styles.box>
  );
}

export default FooterPage;

const StyledContainer = styled.div`
  padding-top: 100px;
  max-width: 740px;
  width: 100%;
  padding-bottom: 36px;
  align-items: center;
  flex-direction: column;
  display: flex;
  z-index: 3;
  height: auto;
  position: relative;
  justify-content: center;
`;
const StyledContentContainer = styled.div`
  display: flex;
  max-width: 580px;
  width: 100%;
  flex-direction: column;
  margin-top: 28px;
`;
const IconImage = styled.img`
  width: 20%;
`;
