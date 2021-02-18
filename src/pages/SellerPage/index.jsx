import React, { useEffect, useState, useRef } from 'react';

import * as styles from '../../styles';
import { SshoLogo } from '../../data';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'

import Seller1 from '../../data/image/seller1.svg';
import Seller2 from '../../data/image/seller2.svg';
import Seller3 from '../../data/image/seller3.svg';

const SellerPage = (props) => {
  const ref = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [showUp1, setShowUp1] = useState(false);
  const [showUp2, setShowUp2] = useState(false);
  const [showUp3, setShowUp3] = useState(false);

  const handleScroll = (e) => {
    setScrollTop(e.srcElement.scrollingElement.scrollTop)
  }

  useEffect(() => {
    var node = ref.current;
    var height = node.getBoundingClientRect().height;
    var y = node.getBoundingClientRect().top;
    window.addEventListener('scroll', handleScroll);
    // console.log(y);

    if( -height + window.innerHeight < y && y < -30 ) props.setMobileIndex(2);
    else if(props.mobileIndex === 2) props.setMobileIndex(4);

    if( -height + 30 < y && y < -30 ) props.setHeaderIndex(2);

    // 등장하는 애니메이션을 위해
    if ( y < 300 ) setShowUp1(true);
    if ( y < -100 ) setShowUp2(true);
    if ( y < -300 ) setShowUp3(true);
  })

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
        <styles.box color={styles.backLightYellow} style={{flexDirection: 'column', alignItems: 'center'}} ref={ref} onScroll={handleScroll}>
            <MobileContainer1 showUp={showUp1}>
                <BackImageContainer>
                    <BackImage1 src={Seller1} />
                </BackImageContainer>

                <MobileLogo>
                    <SshoLogo style={{opacity: props.mobileIndex === 2 ? 0 : 1}} onClick={() => props.goTop()}  />
                </MobileLogo>

                <styles.MainTitleText2>
                    <>선호도 기반의<br />
                    다양한 광고 상품</>
                </styles.MainTitleText2>
                <styles.MainSubText2>
                    <><br /><br />스쇼만의 스와이프 선호도 로그를 활용한<br />
                    다양한 광고 상품을<br />
                    쇼핑몰의 마케팅 전략 단게에 맞추어<br />
                    유동적으로 집행 가능합니다.</>
                </styles.MainSubText2>
            </MobileContainer1>
            <StyledContainer showUp={showUp2}>
                <BackImageContainer>
                    <BackImage2 src={Seller2} />
                </BackImageContainer>
                <styles.MainTitleText2>
                    <>다각화된 데이터를<br />
                    활용한 마케팅</>
                </styles.MainTitleText2>
                <styles.MainSubText2>
                    <><br /><br />스타일 태그, 유저 튜토리얼 등<br />
                    스쇼만의 기능을 활용한<br />
                    데이터 기반의 마케팅 솔루션을 제공합니다.</>
                </styles.MainSubText2>
            </StyledContainer>
            <MobileContainer2 showUp={showUp3}>
                <BackImageContainer>
                    <BackImage3 src={Seller3} />
                </BackImageContainer>
                <styles.MainTitleText2>
                    <>중소규모 쇼핑몰에<br />
                    특화된 서비스</>
                </styles.MainTitleText2>
                <styles.MainSubText2>
                    <><br />스쇼는 추천 및 콘텐츠 기반 광고 집행에 따른<br />
                    매출 변화 등의 자료를 제공합니다.<br /><br />
                    스쇼와 함께라면, 많은 자금을 들이거나<br />
                    대행사에 의존할 수 밖에 없는 기존 쇼핑 플랫폼의<br />
                    광고 집행 구조에서 벗어날 수 있습니다.</>
                </styles.MainSubText2>
            </MobileContainer2>
            <ColumnBottom style={{opacity: props.mobileIndex === 2 ? 0 : 1}}>
              <styles.xlButton color={styles.backDeepYellow}>
                  <styles.buttonText>서비스 소개서 다운로드</styles.buttonText>
              </styles.xlButton>
              <styles.xlButton color={styles.lightYellow} style={{marginTop: 18}}>
                <styles.buttonText>입점/투자 문의하기</styles.buttonText>
              </styles.xlButton>
            </ColumnBottom>
        </styles.box>
  );
}

export default SellerPage;

const StyledContainer = styled.div`
  max-width: 768px;
  width: 100%;
  padding-bottom: 36px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  z-index: 1;
  position: relative;
  height: 600px;

  margin-top: 50px;

  transform: ${props => props.showUp ? "translateY(-50px)" : "translateY(0px)"};
  transition: all 0.5s ease-in-out 0.5s;
  opacity: ${props => props.showUp ? "100%" : "0%"};

  @media (max-width: ${styles.mobile_large}) {
    height: 500px;
  }
`;
const MobileContainer1 = styled.div`
  max-width: 768px;
  width: 100%;
  padding-bottom: 36px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  z-index: 1;
  position: relative;
  height: 600px;

  margin-top: 50px;

  transform: ${props => props.showUp ? "translateY(-50px)" : "translateY(0px)"};
  transition: all 0.5s ease-in-out 0.5s;
  opacity: ${props => props.showUp ? "100%" : "0%"};

  @media (max-width: ${styles.mobile_large}) {
    height: 500px;
    margin-top: 60px;
  }
`;
const MobileContainer2 = styled.div`
  max-width: 768px;
  width: 100%;
  padding-bottom: 36px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  z-index: 1;
  position: relative;
  height: 600px;

  margin-top: 50px;

  transform: ${props => props.showUp ? "translateY(-50px)" : "translateY(0px)"};
  transition: all 0.5s ease-in-out 0.5s;
  opacity: ${props => props.showUp ? "100%" : "0%"};

  @media (max-width: ${styles.mobile_large}) {
    height: 400px;
    margin-bottom: 60px;
  }
`;
const BackImageContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  height: 100%;
  width: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackImage1 = styled.img`
  width: 100%;
  height: auto;
`;
const BackImage2 = styled.img`
  width: 90%;
  height: auto;
`;
const BackImage3 = styled.img`
  width: 120%;
  height: auto;
  margin-top: 80px;
`;
const MobileLogo = styled.div`
  position: absolute;
  top: 60px;
  @media (min-width: ${styles.break_point}) {
    display: none;
  }
  @media (max-width: ${styles.mobile_large}) {
    top: 30px;
  }
`;

const ColumnBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media (min-width: ${styles.break_point}) {
    display: none;
  }
`;