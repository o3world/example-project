import React, { FunctionComponent } from 'react';

type ButtonProps = {
  type?: 'button' | 'submit';
  size?: 'sm' | 'md' | 'lg';
  full?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (e: unknown) => void | undefined;
};

const Button: FunctionComponent<ButtonProps> = ({
  type = 'button',
  size = 'sm',
  full = false,
  disabled = false,
  className,
  onClick,
  children,
}) => (
  <button
    className={`${className} btn btn--${size} ${full && 'btn--full'} ${
      disabled && 'btn--disabled'
    }`}
    type={type === 'button' ? 'button' : 'submit'}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
