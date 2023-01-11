import Link from 'next/link';
import * as mq from 'styles/media-queries';
import * as colors from 'styles/colors';
//import { StatusButtons } from './status-buttons';
import { ReactNode } from 'react';

const ChartRow = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        maxWidth: '570px',
        [mq.small]: {
          maxWidth: 'unset',
        },
      }}
    >
      <div
        css={{
          minHeight: 270,
          flexGrow: 2,
          border: `1px solid ${colors.gray20}`,
          color: colors.text,
          padding: '1.25em',
          borderRadius: '3px',
          ':hover,:focus': {
            textDecoration: 'none',
            boxShadow: '0 5px 15px -5px rgba(0,0,0,.08)',
            color: 'inherit',
          },
        }}
      >
        {children}
      </div>
      <div
        css={{
          marginLeft: '20px',
          position: 'absolute',
          right: -20,
          color: colors.gray80,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '100%',
        }}
      ></div>
    </div>
  );
};

export { ChartRow };
