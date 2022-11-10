import { Table, TextField } from '@/presentation/components';
import { FormContainer, FormControl } from './home-styles';
import React from 'react';

const Home = () => {
  return (
    <div>
      <FormContainer>
        <FormControl>
          <TextField name="name" />
          <TextField name="email" />
          <TextField name="phoneNumber" />
        </FormControl>
      </FormContainer>
      <Table></Table>
    </div>
  );
};

export default Home;
