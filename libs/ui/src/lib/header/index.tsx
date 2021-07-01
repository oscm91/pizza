import React from 'react';
import { Logo } from '../logo';

export interface HeaderProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export function Header({ children, onClick }: HeaderProps) {
  return (
    <header
      className="flex justify-between items-center px-8 py-6 bg-gradient-to-r from-azul via-azul to-rojo"
      onClick={onClick}
    >
      <Logo />
      <div>{children}</div>
    </header>
  );
}

export default Header;
