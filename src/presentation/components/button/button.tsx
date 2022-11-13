import React, { PropsWithChildren } from 'react';
import { StyledButton } from './button-styles';

type ButtonProps = {
  theme?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ theme, children }) => {
  return <StyledButton theme={theme}>{children}</StyledButton>;
};

export default Button;
