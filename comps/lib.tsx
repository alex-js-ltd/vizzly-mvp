import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import * as colors from 'styles/colors';
import * as mq from 'styles/media-queries';
import { FaSpinner } from 'react-icons/fa';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
});
Spinner.defaultProps = {
  'aria-label': 'loading',
};

const FormGroup = styled.div({
  marginTop: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  border: `1px solid ${colors.gray10}`,
  borderRadius: '3px',
});

const Label = styled.div({
  display: 'block',
  padding: '8px 15px 8px 10px',
  margin: '5px 0',
  width: '100%',
  height: '100%',
  color: colors.text,
});

const icon = `"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' opacity='0.5' aria-hidden='true' height='16' viewBox='0 0 16 16' version='1.1' width='16' data-view-component='true' class='octicon octicon-chevron-down HeaderMenu-icon ml-1'%3E%3Cpath fill-rule='evenodd' d='M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z'%3E%3C/path%3E%3C/svg%3E"`;

const Select = styled.select({
  width: '100%',
  border: '1px solid #f1f1f4',
  background: '#f1f2f7',
  padding: '8px 12px',
  borderRadius: '3px',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  appearance: 'none',
  backgroundImage: `url(${icon})`,
  backgroundRepeat: 'no-repeat, repeat',
  backgroundPosition: 'right .7em top 50%, 0',
  backgroundSize: '1em auto, 100%',
  color: colors.text,

  ':hover,:focus': {
    outline: 0,
  },
});

const ChartListUL = styled.ul({
  listStyle: 'none',
  padding: '0',
  display: 'grid',
  gridTemplateRows: 'repeat(auto-fill, minmax(100px, 1fr))',
  gridGap: '1em',
});

export { Spinner, FormGroup, Select, Label, ChartListUL };
