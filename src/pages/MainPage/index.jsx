import React from 'react';
import { StylesProvider } from '@material-ui/core';

import * as styles from '../../styles';
import { SshoLogo } from '../../data';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'


const MainPage = ({history}) => {
  return (
    <StylesProvider injectFirst>
        <styles.box color={styles.backLightYellow}>
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
                    <styles.HeaderTitleText>
                        <>취향 발견의 즐거움, <br />
                        스쇼 </>
                    </styles.HeaderTitleText>
                    <styles.HeaderSubText>
                        <>스와이프 쇼핑으로 만나는 <br />
                        나만의 개성, 나만의 패션취향 </>
                    </styles.HeaderSubText>

                    <StyledButtonContainer>
                        <styles.button color={styles.deepYellow}>
                            <styles.buttonText>App Store</styles.buttonText>
                        </styles.button>
                        <styles.button color={styles.deepYellow}>
                            <styles.buttonText>Google Play</styles.buttonText>
                        </styles.button>
                    </StyledButtonContainer>
                </StyledContentContainer>

            </StyledContainer>
        </styles.box>
    </StylesProvider>
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