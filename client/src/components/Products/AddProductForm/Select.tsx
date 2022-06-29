import React from 'react'
import { MultiSelect } from "react-multi-select-component";
import { SelectType } from '../../../globalTypes';


const Select = ({ options, value, onChange, labelledBy, label }: SelectType) => {
  return (
    <label>
      {label}
      <MultiSelect
        options={options}
        value={value}
        onChange={onChange}
        labelledBy={labelledBy}
      />
    </label>
  )
}

export default Select