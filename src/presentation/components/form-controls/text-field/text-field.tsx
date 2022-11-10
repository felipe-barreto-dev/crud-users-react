import React from 'react';
import { Input } from './text-field-styles';

type TextFieldProps = {
  name: string;
};

const TextField: React.FC<TextFieldProps> = ({ name }) => {
  return <Input name={name} />;
};

export default TextField;
