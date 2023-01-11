import React, { useState, useEffect } from 'react';
import Select, { ActionMeta, OnChangeValue, StylesConfig } from 'react-select';
import { useInput } from './layout';

const styles: StylesConfig<DimensionOption, true> = {
  control: (base, state) => {
    return { ...base, overflow: 'auto' };
  },

  valueContainer: (base, state) => {
    return {
      ...base,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      height: 42,
      width: 138,
      overflow: 'scroll',
    };
  },

  multiValue: (base, state) => {
    return {
      ...base,
      backgroundColor: 'gray',
      width: 'fit-content',
      flexShrink: 0,
    };
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: 'none' } : base;
  },
};

export const orderOptions = (values: readonly DimensionOption[]) => {
  return values
    .filter((v) => v.isFixed)
    .concat(values.filter((v) => !v.isFixed));
};

const MultiSelect = () => {
  const input = useInput();

  const { setInput, ...rest } = input;

  const onChange = (
    newValue: OnChangeValue<DimensionOption, true>,
    actionMeta: ActionMeta<DimensionOption>
  ) => {
    switch (actionMeta.action) {
      case 'remove-value':
      case 'pop-value':
        if (actionMeta.removedValue.isFixed) {
          return;
        }
        break;
      case 'clear':
        newValue = dimensionOptions.filter((v) => v.isFixed);
        break;
    }

    setInput({
      ...rest,
      dimensionOption: orderOptions(newValue),
    });
  };

  return (
    <Select
      instanceId='select-dimension'
      value={rest.dimensionOption}
      isMulti
      styles={styles}
      isClearable={rest.dimensionOption.some((v) => !v.isFixed)}
      name='colors'
      className='basic-multi-select'
      classNamePrefix='select'
      onChange={onChange}
      options={dimensionOptions}
    />
  );
};

export { MultiSelect };

export interface DimensionOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
}

export const dimensionOptions: readonly DimensionOption[] = [
  { value: 'category', label: 'category', color: '#00B8D9', isFixed: true },
  { value: 'payment_method', label: 'payment', color: '#FF5630' },
];
