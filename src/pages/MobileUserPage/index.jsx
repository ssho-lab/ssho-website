import React, { useEffect, useState, useRef } from 'react';

import * as styles from '../../styles';
import { SshoLogo } from '../../data';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'

import IPhone from '../../data/image/iPhone.png';
import AppStore from '../../data/icon/appstore.png';
import playStore from '../../data/icon/playstore.png';

const TEXT = {
    swipe: {
        title: <>스와이프를 활용한<br />역동적인 쇼핑 경험</>,
        sub: <><br />오프라인 쇼핑의 경험을 온라인에서!<br />역동적인 온라인 쇼핑 경험의 시작, 스쇼</>
    },
    style: {
        title: <>패션 스타일의<br />A부터 Z까지</>,
        sub: <><br />다양한 패션 스타일과 넓은 가격 스펙트럼,<br />스쇼에만 있는 스타일 (카드)까지!</>
    },
    like: {
        title: <>스쇼만의 사용자 맞춤형<br />추천 스타일</>,
        sub: <><br />당신의 패션 선호도를 분석하여,<br />취향에 맞는 스타일을 제안합니다!</>
    },
}


const MobileUserPage = (props) => {
  const [nowBtn, setNowBtn] = useState('swipe');
  const [showTitle, setShowTitle] = useState('');
  const [showSub, setShowSub] = useState('');

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
    // console.log(y, height);

    if( -height + 30 < y && y < 30 ) props.setHeaderIndex(1);
  })

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
      if(nowBtn === 'swipe') {
          setShowTitle(TEXT.swipe.title);
          setShowSub(TEXT.swipe.sub);
      } else if(nowBtn === 'style') {
          setShowTitle(TEXT.style.title);
          setShowSub(TEXT.style.sub);
      } else if(nowBtn === 'like') {
          setShowTitle(TEXT.like.title);
          setShowSub(TEXT.like.sub);
      }
  }, [nowBtn])

  return (
        <styles.box color={styles.backDeepYellow} style={{zIndex: 5}} ref={ref} onScroll={handleScroll}>
            <StyledContainer>
                <StyledContentContainer>
                    <MobileLogo>
                        <SshoLogo  />
                    </MobileLogo>

                    <MobilePage>
                    <styles.smButton color={styles.white} style={{marginBottom: 30}}>
                        <styles.buttonText>스와이프 쇼핑</styles.buttonText>
                    </styles.smButton>
                    <styles.MainTitleText1 style={{textAlign: 'center'}}>
                        {TEXT.swipe.title}
                    </styles.MainTitleText1>
                    <styles.HeaderSubText align={'center'}>
                        {TEXT.swipe.sub}
                    </styles.HeaderSubText>
                    <StyledPhone src={IPhone} />
                    </MobilePage>

                    <MobilePage>
                    <styles.smButton color={styles.white} style={{marginBottom: 30}}>
                        <styles.buttonText>스타일 태그</styles.buttonText>
                    </styles.smButton>
                    <styles.MainTitleText1 style={{textAlign: 'center'}}>
                        {TEXT.style.title}
                    </styles.MainTitleText1>
                    <styles.HeaderSubText align={'center'}>
                        {TEXT.style.sub}
                    </styles.HeaderSubText>
                    <StyledPhone src={IPhone} />
                    </MobilePage>

                    <MobilePage>
                    <styles.smButton color={styles.white} style={{marginBottom: 30}}>
                        <styles.buttonText>취향 추천</styles.buttonText>
                    </styles.smButton>
                    <styles.MainTitleText1 style={{textAlign: 'center'}}>
                        {TEXT.like.title}
                    </styles.MainTitleText1>
                    <styles.HeaderSubText align={'center'}>
                        {TEXT.like.sub}
                    </styles.HeaderSubText>
                    <StyledPhone src={IPhone} />
                    </MobilePage>
                </StyledContentContainer>

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

            </StyledContainer>
        </styles.box>
  );
}

export default MobileUserPage;

const StyledContainer = styled.div`
  padding-top: 30px;
  max-width: 768px;
  width: 100%;
  padding-bottom: 36px;
  align-items: center;
  flex-direction: column;
  display: flex;
  z-index: 5;
  background-color: ${styles.backDeepYellow};

  @media (min-width: ${styles.break_point}) {
    display: none;
  }
`;
const StyledContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const StyledPhone = styled.img`
  width: 45%;
  max-width: 300px;
  margin: 30px;
  margin-bottom: 100px;
`;
const MobileLogo = styled.div`
  margin: 30px;
  @media (min-width: ${styles.break_point}) {
    display: none;
  }
`;
const MobilePage = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
`;

const HeaderBottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
const IconImage = styled.img`
  width: 20%;
`;