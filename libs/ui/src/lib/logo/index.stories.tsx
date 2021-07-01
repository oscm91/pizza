import React from 'react';
import { Logo, LogoProps } from './index';

export default {
  component: Logo,
  title: 'Logo',
};

export const logo = () => {
  const props: LogoProps = {
    onClick: () => {},
  };

  return (
    <div className="p-4 bg-gradient-to-r from-azul via-azul to-rojo">
      <Logo {...props}>Button</Logo>
    </div>
  );
};
