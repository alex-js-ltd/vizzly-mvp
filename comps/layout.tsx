import {
  ReactElement,
  createContext,
  useState,
  ReactNode,
  useContext,
} from 'react';
import { Button } from 'comps/lib';
import * as mq from 'styles/media-queries';
import * as colors from 'styles/colors';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <Category>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      ></div>
      <div
        css={{
          margin: '0 auto',
          padding: '4em 2em',
          maxWidth: '840px',
          width: '100%',
          display: 'grid',
          gridGap: '1em',
          gridTemplateColumns: '1fr 3fr',
          [mq.small]: {
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto',
            width: '100%',
          },
        }}
      >
        <div css={{ position: 'relative' }}>
          <Nav />
        </div>
        <main css={{ width: '100%' }}>{children}</main>
      </div>
    </Category>
  );
};

export default Layout;

const Nav = () => {
  const { setCategory } = useCategory();
  return (
    <nav
      css={{
        position: 'sticky',
        top: '4px',
        padding: '1em 1.5em',
        border: `1px solid ${colors.gray10}`,
        borderRadius: '3px',
        [mq.small]: {
          position: 'static',
          top: 'auto',
        },
      }}
    >
      <ul
        css={{
          listStyle: 'none',
          padding: '0',
        }}
      >
        <li>
          <Button onClick={() => setCategory('category')}>Category</Button>
        </li>
        <li>
          <Button onClick={() => setCategory('payment_method')}>
            Payment Method
          </Button>
        </li>
        <li>
          <Button onClick={() => setCategory('month')}>Month</Button>
        </li>
      </ul>
    </nav>
  );
};

const CategoryContext = createContext<
  { category: string; setCategory: Function } | undefined
>(undefined);

const Category = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState('category');

  const value = { category, setCategory };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error(
      `useCategory must be used within a CategoryContext provider`
    );
  }
  return context;
};
