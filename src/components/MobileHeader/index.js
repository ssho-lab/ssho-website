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
    <div>
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
            <>
                <HeaderTop>
                  <SshoLogo onClick={() => props.goTop()} />
                </HeaderTop>
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
            </>
            }
            
            {showIndex === 2 &&
            <>
              <HeaderTop>
                <SshoLogo onClick={() => props.goTop()} />
              </HeaderTop>
                
                <ColumnBottom>
                    <styles.xlButton color={styles.backDeepYellow}>
                        <styles.buttonText>서비스 소개서 다운로드</styles.buttonText>
                    </styles.xlButton>
                    <styles.xlButton color={styles.lightYellow} style={{marginTop: 18}}>
                        <styles.buttonText>입점/투자 문의하기</styles.buttonText>
                    </styles.xlButton>
                </ColumnBottom>
            </>
            }
    </div>
  );
}

export default MobileHeader;

const HeaderTop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  z-index: 10;
  padding-top: 30px;

  @media (min-width: ${styles.break_point}) {
      display: none;
  }
`;
const HeaderBottom = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  z-index: 10;
  padding-bottom: 30px;

  @media (min-width: ${styles.break_point}) {
      display: none;
  }
`;
const IconImage = styled.img`
  width: 20%;
`;

const ColumnBottom = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height; auto;
  align-items: center;
  justify-content: center;
  z-index: 10;
  padding-bottom: 30px;

  @media (min-width: ${styles.break_point}) {
      display: none;
  }
`;