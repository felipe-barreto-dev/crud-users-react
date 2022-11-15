import React from 'react';
import { CheckboxContainer, CheckboxInput, CheckboxLabel } from './checkbox-field-styles';

type CheckboxFieldProps = {
  label: string;
  value: boolean;
  setValue: (value: boolean) => void;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, value, setValue }) => {
  return (
    <CheckboxContainer>
      <CheckboxInput value={value} onChange={(e) => setValue(e.target.value)} type="checkbox" />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default CheckboxField;
