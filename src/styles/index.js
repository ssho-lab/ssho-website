import styled, { keyframes } from 'styled-components'
import { Button, Grid } from '@material-ui/core';

// media query
export const desktop_large = '1200px';
export const desktop_medium = '1025px';
export const desktop_small = '769px';

export const tablet_large = '768px';
export const tablet_small = '481px';

export const mobile_large = '480px';
export const mobile_small = '320px';


// color
export const deepYellow = '#ffb700';
export const lightYellow = '#fed850';
export const backLightYellow = '#fffbef';
export const backDeepYellow = '#feedb4';
export const black = '#1c1c1c';
export const white = '#ffffff';


// animation
const opacityDown = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.5;
  }
`;


// components
export const box = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  background-color: ${props => props.color};
  overflow: hidden;
`;
export const button = styled(Button)`
  width: 157px;
  height: 47px;
  background-color: ${props => props.color};
  border-radius: 9px;
  border: 1px solid ${black};

  // &:hover {
  //     animation: ${opacityDown} 0.5s forwards;
  // }
`;
export const xlButton = styled(Button)`
  width: 253px;
  height: 47px;
  background-color: ${props => props.color};
  border-radius: 9px;
  border: 1px solid ${black};
`;
export const lgButton = styled(Button)`
  width: 210px;
  height: 47px;
  background-color: ${props => props.color};
  border-radius: 9px;
  border: 1px solid ${black};
`;
export const smButton = styled(Button)`
  width: 130px;
  height: 35px;
  background-color: ${props => props.color};
  border-radius: 9px;
  border: 1px solid ${black};
`;
export const xsButton = styled(Button)`
  width: 104px;
  height: 30px;
  background-color: ${props => props.color};
  border-radius: 9px;
  border: 1px solid ${black};
`;

// text components
export const HeaderTitleText = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 47px;
  text-align: left;
  color: ${black};
`;

export const HeaderSubText = styled.div`
  font-size: 20px;
  line-height: 29px;
  text-align: ${props => props.align};
  color: ${black};
`;
export const buttonText = styled.div`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${black};
`;

export const MainTitleText1 = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  color: ${black};
  text-align: right;
`;

export const MainTitleText2 = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  color: ${black};
  
`;

export const MainSubText2 = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: ${black};
`;

export const FooterText = styled.div`
  font-weight: light;
  font-size: 14px;
  line-height: 30px;
  color: ${black};
`;

export const HeaderText = styled.div`
  font-weight: light;
  font-size: 12px;
  line-height: 18px;
  color: ${black};
`;