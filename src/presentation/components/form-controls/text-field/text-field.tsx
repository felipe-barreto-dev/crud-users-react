import React from 'react';
import { Input } from './text-field-styles';

type TextFieldProps = {
  name: string;
  value: string;
  setValue: (value: string) => void;
};

const TextField: React.FC<TextFieldProps> = ({ name, value, setValue }) => {
  return <Input value={value} onChange={(e) => setValue(e.target.value)} name={name} />;
};

export default TextField;
