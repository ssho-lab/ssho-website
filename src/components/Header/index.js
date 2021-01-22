import React, { useEffect, useState } from 'react';
import * as styles from '../../styles';
import { SshoLogo } from '../../data';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'

const Header = (props) => {
  const [showIndex, setShowIndex] = useState(2);
  
  useEffect(() => {

  }, [])

  return (
    <styles.box color={'transparent'}>
        <StyledContainer>

            {showIndex === 0 &&
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
            }

            {showIndex === 1 &&
            <StyledHeaderContainer>
                <SshoLogo />
                <HeaderRight>
                    <styles.button color={styles.deepYellow}>
                        <styles.buttonText>App Store</styles.buttonText>
                    </styles.button>
                    <styles.button color={styles.deepYellow} style={{marginLeft: 18}}>
                        <styles.buttonText>Google Play</styles.buttonText>
                    </styles.button>
                </HeaderRight>
            </StyledHeaderContainer>
            }
            
            {showIndex === 2 &&
            <StyledHeaderContainer>
                <SshoLogo />
                <HeaderRight>
                    <styles.xlButton color={styles.backDeepYellow}>
                        <styles.buttonText>서비스 소개서 다운로드</styles.buttonText>
                    </styles.xlButton>
                    <styles.button color={styles.lightYellow} style={{marginLeft: 18}}>
                        <styles.buttonText>입점/투자 문의하기</styles.buttonText>
                    </styles.button>
                </HeaderRight>
            </StyledHeaderContainer>
            }


        </StyledContainer>
    </styles.box>
  );
}

export default Header;

const StyledContainer = styled.div`
  padding-top: 30px;
  max-width: 740px;
  width: 100%;
  padding-bottom: 36px;
  align-items: center;
  flex-direction: column;
  display: flex;
  z-index: 10;
  height: auto;
  position: fixed;
  top: 0;
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
