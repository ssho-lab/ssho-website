import styled, { keyframes } from 'styled-components'
import { Button } from '@material-ui/core';

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
export const black = '#1c1c1c';


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
export const DYbtn = styled.div`
  width: 157px;
  height: 47px;
  background-color: ${deepYellow};
  border-radius: 9px;
  border: 1px solid ${black};

  &:hover {
      animation: ${opacityDown} 0.5s forwards;
  }
`;

export const LYbtn = styled(Button)`
  width: 157px;
  height: 47px;
  background-color: ${lightYellow};
  border-radius: 9px;
  border: 1px solid #1c1c1c;
`;

export const Whitebtn = styled.div`
  width: 157px;
  height: 47px;
  background-color: white;
  border-radius: 9px;
  border: 1px solid #1c1c1c;
`;

// text components
export const HeaderTitleText = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 47px;
  color: ${black};
`;

export const HeaderSubText = styled.div`
  font-size: 20px;
  line-height: 29px;
  color: ${black};
`;

export const MainTitleText1 = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  color: ${black};
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