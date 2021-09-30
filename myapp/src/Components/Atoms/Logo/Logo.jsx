import React from 'react';

import LogoGps from '../../../Assets/images/gps-hospitalar-logo-white.png'

import { ContentLogo, LogoComponent } from './styles';

const Logo = () => {
  return (
    <ContentLogo>
      <LogoComponent src={LogoGps} alt='login' />
    </ContentLogo>
  );
};

export default Logo;

