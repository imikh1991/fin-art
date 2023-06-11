import React from 'react';
import './Icon.module.scss';

export type IconType =
  | 'cart'
  | 'like'
  | 'liked'
  | 'user'
  | 'sun'
  | 'moon'
  | 'loader'
  | 'x'
  | 'chevronDown'
  | 'error'
  | 'toggleRight';

export type IconProps = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  type: IconType;
};

export default function Icon() {
  return <div className="w-12 h-12 border-4 border-blue-600 rounded-full loader"></div>;
}
