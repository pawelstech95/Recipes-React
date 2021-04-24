import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import PageTitle from '../components/PageTitle';

const Wrapper = styled.div`
  padding: 3rem;
  border: 1px solid ${(props) => props.theme.colors.lightest};
  text-align: center;
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.light};
`;

const BackHomeButton = styled(Button)`
  margin-top: 1rem;
`;

const ErrorPage = () => {
  return (
    <Wrapper>
      <PageTitle>Page not found</PageTitle>
      <Description>This page can't be found.</Description>
      <BackHomeButton $variant="brand" as={Link} to="/">
        Go to homepage
      </BackHomeButton>
    </Wrapper>
  );
};

export default ErrorPage;
