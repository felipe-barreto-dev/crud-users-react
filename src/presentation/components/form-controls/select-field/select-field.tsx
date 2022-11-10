import { SelectItemModel } from '@/domain/model';
import React from 'react';
import { Select, Option } from './select-field-styles';

type TextFieldProps = {
  name: string;
  items: SelectItemModel[];
  handleSelect: (ItemType) => void;
};

const SelectField: React.FC<TextFieldProps> = ({ name, items, handleSelect }) => {
  return (
    <Select name={name}>
      {items.map((item, key) => (
        <Option onClick={() => handleSelect(item)} key={key}>
          {item.label}
        </Option>
      ))}
    </Select>
  );
};

export default SelectField;
