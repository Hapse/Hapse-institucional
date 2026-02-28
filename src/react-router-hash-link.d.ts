declare module 'react-router-hash-link' {
  import { LinkProps, NavLinkProps } from 'react-router-dom';
  import { FC } from 'react';

  export interface HashLinkProps extends Omit<LinkProps, 'to'> {
    to: string;
    smooth?: boolean;
    scroll?: (el: HTMLElement) => void;
    elementId?: string;
  }

  export interface NavHashLinkProps extends Omit<NavLinkProps, 'to'> {
    to: string;
    smooth?: boolean;
    scroll?: (el: HTMLElement) => void;
    elementId?: string;
  }

  export const HashLink: FC<HashLinkProps>;
  export const NavHashLink: FC<NavHashLinkProps>;
}