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
    <div className="p-4 bg-primary">
      <Logo {...props}>Button</Logo>
    </div>
  );
};
