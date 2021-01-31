import React, { useEffect, useState } from 'react';
import * as styles from '../../styles';
import { SshoLogo } from '../../data';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import AppStore from '../../data/icon/appstore.png';
import playStore from '../../data/icon/playstore.png';

const MobileHeader = (props) => {
  const [showIndex, setShowIndex] = useState(0);
  
  useEffect(() => {
    setShowIndex(props.mobileIndex);
    // console.log('showIndex: ', showIndex)
  }, [props])

  return (
    <StyledBox color={'transparent'}>
        <StyledContainer>

            {/* {showIndex === 0 &&
            <StyledHeaderContainer>
                <SshoLogo />
                <HeaderBottom>
                    <styles.HeaderText style={{marginRight: 18}}>
                        입점 문의 혹은 투자 문의가 필요하신가요?
                    </styles.HeaderText>
                    <styles.xsButton color={styles.lightYellow}>
                        문의하기
                    </styles.xsButton>
                </HeaderBottom>
            </StyledHeaderContainer>
            } */}

            {showIndex === 1 &&
            <StyledHeaderContainer>
                <SshoLogo />
                <HeaderBottom>
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
                </HeaderBottom>
            </StyledHeaderContainer>
            }
            
            {showIndex === 2 &&
            <StyledHeaderContainer>
                <SshoLogo />
                <ColumnBottom>
                    <styles.xlButton color={styles.backDeepYellow}>
                        <styles.buttonText>서비스 소개서 다운로드</styles.buttonText>
                    </styles.xlButton>
                    <styles.xlButton color={styles.lightYellow} style={{marginTop: 18}}>
                        <styles.buttonText>입점/투자 문의하기</styles.buttonText>
                    </styles.xlButton>
                </ColumnBottom>
            </StyledHeaderContainer>
            }


        </StyledContainer>
    </StyledBox>
  );
}

export default MobileHeader;

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.color};
  overflow: hidden;

  @media (min-width: ${styles.break_point}) {
      display: none;
  }
`;
const StyledContainer = styled.div`
  padding-top: 30px;
  align-items: center;
  flex-direction: column;
  display: flex;
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
`;
const StyledHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 70px;
`;
const HeaderBottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const IconImage = styled.img`
  width: 20%;
`;

const ColumnBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;