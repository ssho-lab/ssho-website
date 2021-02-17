import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'

import * as styles from '../../styles';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'

import Tappable from 'react-tappable';

import Back from '../../data/image/main_back.svg';
import IPhone from '../../data/image/iPhone.png';
import AppStore from '../../data/icon/appstore.png';
import playStore from '../../data/icon/playstore.png';

import { SshoLogo } from '../../data';


const MainPage = (props) => {
  const ref = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e) => {
    setScrollTop(e.srcElement.scrollingElement.scrollTop)
  }

  useEffect(() => {
    var node = ref.current;
    var height = node.getBoundingClientRect().height;
    var y = node.getBoundingClientRect().top;
    window.addEventListener('scroll', handleScroll);
    // console.log(y);

    if( -height + 30 < y && y < 30 ) {
      props.setHeaderIndex(0);
    }
  })

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
        <styles.box color={styles.backLightYellow} ref={ref} onScroll={handleScroll}>
            <BackImage src={Back} />
            <StyledContainer>
                <MobileLogo>
                  <SshoLogo onClick={() => props.goTop()} />
                </MobileLogo>
                <StyledContentContainer>
                <StyledGrid container direction="row">
                  <StyledGrid item md>
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
                    </StyledButtonContainer>
                  </StyledGrid>
                  <StyledGrid item md>
                      <StyledPhone src={IPhone} />
                  </StyledGrid>
                </StyledGrid>
                </StyledContentContainer>
                <MobileFooter>
                  <styles.HeaderText style={{marginRight: 18}}>
                        입점 문의 혹은 투자 문의가 필요하신가요?
                    </styles.HeaderText>
                    <styles.xsButton color={styles.lightYellow} onClick={() => props.goBottom()}>
                        문의하기
                    </styles.xsButton>
                </MobileFooter>
            </StyledContainer>
        </styles.box>
  );
}

export default MainPage;

const StyledContainer = styled.div`
  padding-top: 100px;
  max-width: 768px;
  width: 100%;
  padding-bottom: 36px;
  align-items: center;
  flex-direction: column;
  display: flex;
  z-index: 3;
  height: auto;

  @media (max-width: ${styles.break_point}) {
    padding-top: 30px;
  }
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

  @media (max-width: ${styles.break_point}) {
    display: none;
  }
`;
const BackImage = styled.img`
  position: absolute;
  top: -20px;
  left: -20px;
  width: 105vw;
  height: 50%;
  z-index: 2;
  overflow: hidden;
`;
const IconImage = styled.img`
  width: 20%;
`;
const StyledGrid = styled(Grid)`
  @media (max-width: ${styles.break_point}) {
    justify-content: center;
  }
`;
const MobileLogo = styled.div`
  margin: 30px;
  @media (min-width: ${styles.break_point}) {
    display: none;
  }
`;
const MobileFooter = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (min-width: ${styles.break_point}) {
    display: none;
  }
`;