import {
  ReactElement,
  createContext,
  useState,
  ReactNode,
  useContext,
} from 'react';
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
        <main
          css={{
            width: '100%',
            minHeight: '400px',
          }}
        >
          {children}
        </main>
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
              <Label>Dimension:</Label>
              <Select
                id='dimension'
                name='dimension'
                defaultValue={rest.dimension}
                onChange={(e) =>
                  setInput({
                    ...rest,
                    dimension: e.currentTarget.value,
                  })
                }
              >
                <option value='category'>category</option>
                <option value='payment_method'>payment</option>
                <option value='month'>month</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Measure:</Label>
              <Select
                id='measure'
                name='measure'
                defaultValue={rest.measure}
                onChange={(e) =>
                  setInput({
                    ...rest,
                    measure: e.currentTarget.value,
                  })
                }
              >
                <option value='value'>value</option>
                <option value='total'>total</option>
                <option value='qty_ordered'>qty_ordered</option>
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
                <option value='donut'>donut</option>
              </Select>
            </FormGroup>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export type Dimension = 'category' | 'payment_method' | 'month';

export type Measure = 'value' | 'total' | 'qty_ordered';

export type Aggregate = 'sum' | 'mean';

export type ChartType = 'bar' | 'line' | 'donut';

type State = {
  dimension: Dimension;
  measure: Measure;
  aggregate: Aggregate;
  chartType: ChartType;
};

type Context = State & {
  setInput: Function;
};
const InputContext = createContext<Context | undefined>(undefined);

const Input = ({ children }: { children: ReactNode }) => {
  const [state, setInput] = useState<State>({
    dimension: 'category',
    measure: 'value',
    chartType: 'bar',
    aggregate: 'sum',
  });

  const { dimension, measure, aggregate, chartType } = state;

  const value = { dimension, measure, aggregate, chartType, setInput };

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
