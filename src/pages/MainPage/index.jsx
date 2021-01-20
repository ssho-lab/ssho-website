import React from 'react';

import * as styles from '../../styles';
import { SshoLogo, BackImage } from '../../data';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'

import Back from '../../data/image/main_back.svg';
import IPhone from '../../data/image/iPhone.png';


const MainPage = ({history}) => {
  return (
        <styles.box color={styles.backLightYellow}>
          <img src={Back} style={{
            position: 'absolute', top: -20, left: -20, width: '105vw', height: '50%', zIndex:2, overflow: 'hidden'
            }} />
            <StyledContainer>
                <StyledHeaderContainer>
                    <SshoLogo />
                    <HeaderRight>
                        <styles.HeaderText style={{marginRight: 18}}>
                            입점 문의 혹은 투자 문의가 필요하신가요?
                        </styles.HeaderText>
                        <styles.xsButton color={styles.lightYellow}>
                            문의하기
                        </styles.xsButton>
                    </HeaderRight>
                </StyledHeaderContainer>

                <StyledContentContainer>
                <Grid container direction="row">
                  <Grid item md>
                    <styles.HeaderTitleText>
                        <>취향 발견의 즐거움, <br />
                        스쇼 </>
                    </styles.HeaderTitleText>
                    <styles.HeaderSubText align={'left'}>
                        <>스와이프 쇼핑으로 만나는 <br />
                        나만의 개성, 나만의 패션취향 </>
                    </styles.HeaderSubText>

                    <StyledButtonContainer>
                        <styles.button color={styles.deepYellow}>
                            <styles.buttonText>App Store</styles.buttonText>
                        </styles.button>
                        <styles.button color={styles.deepYellow} style={{marginLeft: 18}}>
                            <styles.buttonText>Google Play</styles.buttonText>
                        </styles.button>
                    </StyledButtonContainer>
                  </Grid>
                  <Grid item md>
                      <StyledPhone src={IPhone} />
                  </Grid>
                </Grid>
                </StyledContentContainer>

            </StyledContainer>
        </styles.box>
  );
}

export default MainPage;

const StyledContainer = styled.div`
  padding-top: 30px;
  max-width: 740px;
  width: 100%;
  padding-bottom: 36px;
  align-items: center;
  flex-direction: column;
  display: flex;
  z-index: 3;
  height: auto;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;
const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
const StyledContentContainer = styled.div`
  display: flex;
  max-width: 580px;
  width: 100%;
  flex-direction: column;
  margin-top: 28px;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 30px;
`;
const StyledPhone = styled.img`
  width: 50%;
  transform: rotate(8deg);
`;