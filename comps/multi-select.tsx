import React, { useState } from 'react';

import Select, { ActionMeta, OnChangeValue, StylesConfig } from 'react-select';

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

const orderOptions = (values: readonly DimensionOption[]) => {
  return values
    .filter((v) => v.isFixed)
    .concat(values.filter((v) => !v.isFixed));
};

const MultiSelect = () => {
  const [value, setValue] = useState<readonly DimensionOption[]>(
    orderOptions([dimensionOptions[0]])
  );

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

    setValue(orderOptions(newValue));
  };

  return (
    <Select
      value={value}
      isMulti
      styles={styles}
      isClearable={value.some((v) => !v.isFixed)}
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
  readonly isDisabled?: boolean;
}

export const dimensionOptions: readonly DimensionOption[] = [
  { value: 'category', label: 'category', color: '#00B8D9', isFixed: true },
  { value: 'payment_method', label: 'payment', color: '#FF5630' },
];
