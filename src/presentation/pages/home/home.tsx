import { SelectField, Table, TextField } from '@/presentation/components';
import { SelectItemModel } from '@/domain/model';
import { FormContainer, FormControl } from './home-styles';

import React from 'react';

const Home = () => {
  const genderOptions: SelectItemModel[] = [
    { label: 'Male', id: 1 },
    { label: 'Female', id: 2 }
  ];

  const handleSelectGender = (gender: SelectItemModel) => {
    console.log(gender);
  };

  return (
    <div>
      <FormContainer>
        <FormControl>
          <TextField name="name" />
          <TextField name="email" />
          <TextField name="phoneNumber" />
          <SelectField handleSelect={handleSelectGender} name="gender" items={genderOptions} />
        </FormControl>
      </FormContainer>
      <Table></Table>
    </div>
  );
};

export default Home;
