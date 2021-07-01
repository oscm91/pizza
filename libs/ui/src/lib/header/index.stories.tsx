import React from 'react';
import { Header, HeaderProps } from './index';
import { HelpImage } from '@stepform/ui';

export default {
  component: Header,
  title: 'Header',
};

export const header = () => {
  const props: HeaderProps = {
    onClick: () => {},
  };

  return (
    <Header {...props}>
      <nav className="flex justify-center items-center text-white space-x-8 font-light">
        <a href="#">Mi negocio</a>
        <a href="#" className="flex">
          Ayuda <HelpImage width="15px" />
        </a>
      </nav>
    </Header>
  );
};
