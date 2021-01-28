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

                  <LogoContainer>
                    <SshoLogo style={{marginBottom: 30}} />
                  </LogoContainer>

                  <MobileButton container direction="row" alignItems="center" justify="center" style={{marginBottom: 30}}>
                    <styles.button color={styles.deepYellow}>
                      <IconImage src={AppStore} />
                          <div style={{width: '80%', justifyContent: 'center'}}>
                            <styles.buttonText>App Store</styles.buttonText>
                          </div>
                    </styles.button>
                    <styles.button color={styles.deepYellow} style={{marginLeft: 18}}>
                      <IconImage src={playStore} />
                        <div style={{width: '80%', justifyContent: 'center'}}>
                          <styles.buttonText>Google Play</styles.buttonText>
                        </div>
                    </styles.button> 
                  </MobileButton>
                  
                  <styles.FooterText>
                      <>
                      스쇼 서울시 마포구 백범로 35 서강대학교 떼이야르관 515호<br />
                      사업자등록번호 402-26-66251<br />
                      고객문의 / 쇼핑몰 제휴 문의 customer@s-sho.kr<br />
                      투자자 문의 investment@s-sho.kr<br />
                      SNS <>카카오톡</> <>인스타그램</> <>페이스북</>
                      </>
                  </styles.FooterText>
                  <PcButton container direction="row" alignItems="center" justify="center" style={{marginTop: 30}}>
                    <styles.button color={styles.deepYellow}>
                      <IconImage src={AppStore} />
                          <div style={{width: '80%', justifyContent: 'center'}}>
                            <styles.buttonText>App Store</styles.buttonText>
                          </div>
                    </styles.button>
                    <styles.button color={styles.deepYellow} style={{marginLeft: 18}}>
                      <IconImage src={playStore} />
                        <div style={{width: '80%', justifyContent: 'center'}}>
                          <styles.buttonText>Google Play</styles.buttonText>
                        </div>
                    </styles.button> 
                  </PcButton>
                </StyledContentContainer>

            </StyledContainer>
        </styles.box>
  );
}

export default FooterPage;

const StyledContainer = styled.div`
  padding-top: 30px;
  max-width: 768px;
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
  align-items: center;
`;
const IconImage = styled.img`
  width: 20%;
`;
const LogoContainer = styled.div`
  @media (max-width: ${styles.break_point}) {
    display: none;
  }
`;
const PcButton = styled(Grid)`
  @media (max-width: ${styles.break_point}) {
    display: none;
  }
`;
const MobileButton = styled(Grid)`
  @media (min-width: ${styles.break_point}) {
    display: none;
  }
`;