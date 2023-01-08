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

import { FormGroup, Select, Label } from 'comps/lib';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <Input>
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
        <main css={{ width: '100%', minHeight: '400px' }}>{children}</main>
      </div>
    </Input>
  );
};

export default Layout;

const Nav = () => {
  const input = useInput();

  const { setInput, ...rest } = input;

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
          <form>
            <FormGroup>
              <Label>X-axis:</Label>
              <Select
                id='xaxis'
                name='xaxis'
                defaultValue={rest.category}
                onChange={(e) =>
                  setInput({
                    ...rest,
                    category: e.currentTarget.value,
                  })
                }
              >
                <option value='category'>category</option>
                <option value='payment_method'>payment</option>
                <option value='month'>month</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Aggregate:</Label>
              <Select
                id='aggregate'
                name='aggregate'
                defaultValue={rest.aggregate}
                onChange={(e) =>
                  setInput({
                    ...rest,
                    aggregate: e.currentTarget.value,
                  })
                }
              >
                <option value='sum'>sum</option>
                <option value='mean'>mean</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Y-axis:</Label>
              <Select
                id='yaxis'
                name='yaxis'
                defaultValue={rest.yaxis}
                onChange={(e) =>
                  setInput({
                    ...rest,
                    yaxis: e.currentTarget.value,
                  })
                }
              >
                <option value='value'>value</option>
                <option value='total'>total</option>
                <option value='qty_ordered'>qty_ordered</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Chart Type:</Label>
              <Select
                id='chartType'
                name='chartType'
                defaultValue={rest.chartType}
                onChange={(e) =>
                  setInput({
                    ...rest,
                    chartType: e.currentTarget.value,
                  })
                }
              >
                <option value='bar'>bar</option>
                <option value='line'>line</option>
              </Select>
            </FormGroup>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export type ChartType = 'bar' | 'line';

export type Category = 'category' | 'payment_method' | 'month';

export type Yaxis = 'value' | 'total' | 'qty_ordered';

type State = {
  category: Category;
  yaxis: Yaxis;
  aggregate: string;
  chartType: ChartType;
};

type Context = State & {
  setInput: Function;
};
const InputContext = createContext<Context | undefined>(undefined);

const Input = ({ children }: { children: ReactNode }) => {
  const [state, setInput] = useState<State>({
    category: 'category',
    yaxis: 'value',
    chartType: 'bar',
    aggregate: 'sum',
  });

  const { category, yaxis, aggregate, chartType } = state;

  const value = { category, yaxis, aggregate, chartType, setInput };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};

export const useInput = () => {
  const context = useContext(InputContext);
  if (context === undefined) {
    throw new Error(`useInput must be used within an InputContext provider`);
  }
  return context;
};
