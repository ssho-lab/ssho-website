import React, { useEffect, useState } from 'react';

import * as styles from '../../styles';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'

import CoreValue from '../../data/image/CORE VALUE.svg';

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

const ValuePage = ({history}) => {
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        var index = showIndex;
        if (showIndex === 1) setShowIndex(0);
        else setShowIndex(index + 1);
    }, 4000)
  }, [showIndex])

  return (
        <styles.box color={styles.backDeepYellow} style={{position: 'relative'}}>
            <BackImageContainer>
                <BackImage src={CoreValue} />
            </BackImageContainer>
            <StyledContainer>
                <StyledContentContainer>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item md> 
                        <styles.HeaderTitleText>
                            <>스쇼의 중심 가치</>
                        </styles.HeaderTitleText>
                    </Grid>

                    <Grid item md container justify="flex-end" spacing={3}>
                        <Grid item md>
                            <styles.lgButton color={styles.lightYellow}>
                                <Underlined>
                                    <styles.HeaderSubText>{TEXT[showIndex].identity}</styles.HeaderSubText>
                                </Underlined>
                                <styles.HeaderSubText>개성</styles.HeaderSubText>
                             </styles.lgButton>
                        </Grid>
                         <Grid item md>
                            <styles.lgButton color={styles.lightYellow}>
                                <Underlined>
                                    <styles.HeaderSubText>{TEXT[showIndex].fun}</styles.HeaderSubText>
                                </Underlined>
                                <styles.HeaderSubText>재미</styles.HeaderSubText>
                             </styles.lgButton>
                        </Grid>
                         <Grid item md>
                            <styles.lgButton color={styles.lightYellow}>
                                <Underlined>
                                    <styles.HeaderSubText>{TEXT[showIndex].find}</styles.HeaderSubText>
                                </Underlined>
                                <styles.HeaderSubText>발견</styles.HeaderSubText>
                             </styles.lgButton>
                        </Grid>
                    </Grid>
                </Grid>
                </StyledContentContainer>

            </StyledContainer>
        </styles.box>
  );
}

export default ValuePage;

const StyledContainer = styled.div`
  padding-top: 100px;
  max-width: 740px;
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