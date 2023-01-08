import React from 'react';
import styled from '@emotion/styled';
import { keyframes, CSSObject } from '@emotion/react';
import * as colors from 'styles/colors';

import { FaSpinner } from 'react-icons/fa';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: colors.base,
  color: colors.text,
  border: `1px solid ${colors.gray10}`,
  cursor: 'pointer',
});

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
});
Spinner.defaultProps = {
  'aria-label': 'loading',
};

const Button = styled.div({
  display: 'block',
  padding: '8px 15px 8px 10px',
  margin: '5px 0',
  width: '100%',
  height: '100%',
  color: colors.text,
  borderRadius: '2px',
  borderLeft: '5px solid transparent',
  ':hover,:focus': {
    color: colors.indigo,
    textDecoration: 'none',
    background: colors.gray10,
  },
});

type ErrVariant = { stacked: CSSObject; inline: CSSObject } | CSSObject;

const errorMessageVariants: ErrVariant = {
  stacked: { display: 'block' },
  inline: { display: 'inline-block' },
};

const ErrorMessage = ({
  error,
  variant = 'stacked',
  ...props
}: {
  error: Error | null;
  variant?: keyof ErrVariant;
}) => (
  <div
    role='alert'
    css={[{ color: colors.danger }, errorMessageVariants[variant]]}
    {...props}
  >
    <span>There was an error: </span>
    <pre
      css={[
        { whiteSpace: 'break-spaces', margin: '0', marginBottom: -5 },
        errorMessageVariants[variant],
      ]}
    >
      {error?.message}
    </pre>
  </div>
);

export { ErrorMessage, CircleButton, Spinner, Button };
