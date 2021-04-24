import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const Wraper = styled.li`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  padding: 0;
  margin: 0;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 0.5rem;
  }
`;

const Recipe = ({ title, id, handleRemove }) => {
  return (
    <Wraper>
      <Title>{title}</Title>
      <Actions>
        <Button $small $variant="dark" as={Link} to={`/${id}/edit`}>
          Edit
        </Button>
        <Button $small $variant="brand" as={Link} to={`/${id}`}>
          Detail
        </Button>
        <Button $small $variant="light" onClick={handleRemove}>
          Remove
        </Button>
      </Actions>
    </Wraper>
  );
};

export default Recipe;
