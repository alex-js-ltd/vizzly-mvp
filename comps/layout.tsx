import {
  ReactElement,
  createContext,
  useState,
  ReactNode,
  useContext,
} from 'react';

import * as mq from 'styles/media-queries';
import * as colors from 'styles/colors';
import { FormGroup, Select as MySelect, Label } from 'comps/lib';
import {
  MultiSelect,
  dimensionOptions,
  DimensionOption,
  orderOptions,
} from './multi-select';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <Input>
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
      <form>
        <FormGroup>
          <Label>Dimension:</Label>

          <MultiSelect />
        </FormGroup>

        <FormGroup>
          <Label>Measure:</Label>
          <MySelect
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
          </MySelect>
        </FormGroup>

        <FormGroup>
          <Label>Aggregate:</Label>
          <MySelect
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
          </MySelect>
        </FormGroup>
      </form>
    </nav>
  );
};

export type Measure = 'value' | 'total' | 'qty_ordered';

export type Aggregate = 'sum' | 'mean';

export type ChartType = 'bar' | 'line' | 'donut';

export type State = {
  dimensionOption: DimensionOption[];
  measure: Measure;
  aggregate: Aggregate;
  chartType: ChartType;
};

type Context = State & {
  setInput: Function;
  dimensionInput: string[];
};
const InputContext = createContext<Context | undefined>(undefined);

const Input = ({ children }: { children: ReactNode }) => {
  const [state, setInput] = useState<State>({
    dimensionOption: orderOptions(dimensionOptions),
    measure: 'value',
    chartType: 'bar',
    aggregate: 'sum',
  });

  const { dimensionOption, measure, aggregate, chartType } = state;

  const value = {
    dimensionOption,
    dimensionInput: dimensionOption.map((d) => d.value),
    measure,
    aggregate,
    chartType,
    setInput,
  };

  console.log(value.dimensionInput);

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
