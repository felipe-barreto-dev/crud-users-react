import React from 'react';
import { Body, Column, Container, Head, Row } from './table-styles';

const Table = () => {
  return (
    <Container>
      <caption>Usuários</caption>
      <Head>
        <Row>
          <Column>Id</Column>
          <Column>Name</Column>
          <Column>Email</Column>
          <Column>Status</Column>
          <Column>Gender</Column>
          <Column>Phone Number</Column>
          <Column>Operation</Column>
        </Row>
      </Head>
      <Body>
        <Row>
          <Column>teste</Column>
          <Column>teste</Column>
          <Column>teste</Column>
          <Column>teste</Column>
          <Column>teste</Column>
          <Column>teste</Column>
          <Column>teste</Column>
        </Row>
      </Body>
    </Container>
  );
};

export default Table;
