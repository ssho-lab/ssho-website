import React, { useEffect, useState, useRef } from 'react';

import * as styles from '../../styles';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'

import CoreValue from '../../data/image/CORE VALUE.png';

const TEXT = [
    {
        identity: '사용자의',
        fun: '행위의',
        find: '취향의',
    },
    {
        identity: '서비스의',
        fun: '콘텐츠의',
        find: '쇼핑 경험의',
    },
]

const ValuePage = (props) => {
  const [showIndex, setShowIndex] = useState(0);

  const ref = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const [showUp, setShowUp] = useState(false);

  const handleScroll = (e) => {
    setScrollTop(e.srcElement.scrollingElement.scrollTop)
  }

  useEffect(() => {
    var node = ref.current;
    var height = node.getBoundingClientRect().height;
    var y = node.getBoundingClientRect().top;
    window.addEventListener('scroll', handleScroll);
    // console.log(y);

    if( -height + 50 < y && y < 50 ) {
      props.setHeaderIndex(3);
    }

    if ( y < 500 ) setShowUp(true);
  })

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
        var index = showIndex;
        if (showIndex === 1) setShowIndex(0);
        else setShowIndex(index + 1);
    }, 4000)
  }, [showIndex])

  return (
        <styles.box color={styles.backDeepYellow} style={{position: 'relative'}} ref={ref} onScroll={handleScroll}>
            <BackImageContainer>
                <BackImage src={CoreValue} />
            </BackImageContainer>
            <StyledContainer showUp={showUp}>
                <StyledContentContainer>
                <Grid container direction="row" justify="center" alignItems="center">
                    <TitleGrid item md> 
                        <styles.HeaderTitleText>
                            <>스쇼의 중심 가치</>
                        </styles.HeaderTitleText>
                    </TitleGrid>

                    <ButtonGrid item md container justify="flex-end" spacing={3}>
                        <Grid item xs>
                            <styles.lgButton color={styles.lightYellow}>
                                <Underlined>
                                    {showIndex === 0 && <HeaderSubText>{TEXT[0].identity}</HeaderSubText>}
                                    {showIndex === 1 && <HeaderSubText>{TEXT[1].identity}</HeaderSubText>}
                                    {showIndex === 2 && <HeaderSubText>{TEXT[2].identity}</HeaderSubText>}
                                </Underlined>
                                <styles.HeaderSubText>개성</styles.HeaderSubText>
                             </styles.lgButton>
                        </Grid>
                         <Grid item xs>
                            <styles.lgButton color={styles.lightYellow}>
                                <Underlined>
                                    {showIndex === 0 && <HeaderSubText>{TEXT[0].fun}</HeaderSubText>}
                                    {showIndex === 1 && <HeaderSubText>{TEXT[1].fun}</HeaderSubText>}
                                    {showIndex === 2 && <HeaderSubText>{TEXT[2].fun}</HeaderSubText>}
                                </Underlined>
                                <styles.HeaderSubText>재미</styles.HeaderSubText>
                             </styles.lgButton>
                        </Grid>
                         <Grid item xs>
                            <styles.lgButton color={styles.lightYellow}>
                                <Underlined>
                                    {showIndex === 0 && <HeaderSubText>{TEXT[0].find}</HeaderSubText>}
                                    {showIndex === 1 && <HeaderSubText>{TEXT[1].find}</HeaderSubText>}
                                    {showIndex === 2 && <HeaderSubText>{TEXT[2].find}</HeaderSubText>}
                                </Underlined>
                                <styles.HeaderSubText>발견</styles.HeaderSubText>
                             </styles.lgButton>
                        </Grid>
                    </ButtonGrid>
                </Grid>
                </StyledContentContainer>

            </StyledContainer>
        </styles.box>
  );
}

export default ValuePage;

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
  position: relative;
  justify-content: center;

  margin-top: 50px;

  transform: ${props => props.showUp ? "translateY(-50px)" : "translateY(0px)"};
  transition: all 0.5s ease-in-out 0.5s;
  opacity: ${props => props.showUp ? "100%" : "0%"};

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
const BackImageContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  height: 100%;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${styles.break_point}) {
    display: none;
  }
`;
const BackImage = styled.img`
  width: 80%;
  height: auto;
  z-index: 2;
  margin-top: 80px;
`;
const Underlined = styled.div`
  border-bottom: 1px solid ${styles.black};
  width: 60%;
  align-items: center;
  justify-content: center;
`;
const TitleGrid = styled(Grid)`
  @media (max-width: ${styles.break_point}) {
    margin-bottom: 30px;
  }
`;
const ButtonGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  @media (max-width: ${styles.break_point}) {
    justify-content: center;
  }
`;

export const HeaderSubText = styled.div`
  font-size: 20px;
  line-height: 29px;
  text-align: ${props => props.align};
  color: ${styles.black};
  animation: opacity 1s;

  @keyframes opacity {
    from {
      opacity: 0;
    }

    to {
        opacity: 1;
    }
  }

  @media (max-width: ${styles.break_point}) {
    text-align: center;
  }
`;