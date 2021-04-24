import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Alert = styled.div`
  background-color: ${(props) => props.theme.colors.error};
  padding: 1rem;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 1rem;
`;

const ErrorMessage = ({ error }) => (
  <Wrapper>
    <Alert>{error}</Alert>
    <Button $variant="brand" as={Link} to="/">
      Go to homepage
    </Button>
  </Wrapper>
);

export default ErrorMessage;
