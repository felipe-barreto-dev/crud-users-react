import { Button, CheckboxField, SelectField, Table, TextField } from '@/presentation/components';
import { SelectItemModel } from '@/domain/model';
import {
  HomeContainer,
  FormContainer,
  FormControl,
  TableContainer,
  FormTitle,
  StyledLabel
} from './home-styles';

import React, { useState } from 'react';

const Home = () => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  const genderOptions: SelectItemModel[] = [
    { label: 'Male', id: 1 },
    { label: 'Female', id: 2 }
  ];

  const handleSelectGender = (gender: SelectItemModel) => {
    console.log(gender);
  };

  return (
    <HomeContainer>
      <FormContainer id="form">
        <FormControl>
          <FormTitle>Create User</FormTitle>
          <StyledLabel>Name</StyledLabel>
          <TextField value={name} setValue={setName} name="name" />
          <StyledLabel>E-mail</StyledLabel>
          <TextField value={email} setValue={setEmail} name="email" />
          <StyledLabel>Phone number</StyledLabel>
          <TextField value={phoneNumber} setValue={setPhoneNumber} name="phoneNumber" />
          <StyledLabel>Gender</StyledLabel>
          <SelectField handleSelect={handleSelectGender} name="gender" items={genderOptions} />
          <CheckboxField value={active} setValue={setActive} label="Ativo" />
          <Button>Create</Button>
          <Button theme="danger">Cancel</Button>
        </FormControl>
      </FormContainer>
      <TableContainer id="table">
        <Table></Table>
      </TableContainer>
    </HomeContainer>
  );
};

export default Home;
