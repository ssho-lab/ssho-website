import React, { useEffect, useState } from 'react';

import * as styles from '../../styles';
import { SshoLogo } from '../../data';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'

const SellerPage = ({history}) => {

  return (
        <styles.box color={styles.backLightYellow} style={{flexDirection: 'column', alignItems: 'center'}}>
            <StyledContainer>
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
            </StyledContainer>
            <StyledContainer>
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
            <StyledContainer>
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
            </StyledContainer>
        </styles.box>
  );
}

export default SellerPage;

const StyledContainer = styled.div`
  padding-top: 100px;
  max-width: 740px;
  width: 100%;
  padding-bottom: 36px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  z-index: 5;
  height: 770px;
`;
