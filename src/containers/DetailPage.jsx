import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../utils';
import Loader from '../components/Loader';
import PageTitle from '../components/PageTitle';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';

const Section = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightest};
`;

const Subtitle = styled.h3`
  margin: 0 0 0.5rem;
  padding: 0;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.dark};
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
`;

const BackHomeButton = styled(Button)`
  margin-top: 1rem;
`;

const DetailPage = ({ match }) => {
  const id = match.params.id;

  const { data, error } = useSWR(`/recipes/${id}`, fetcher);

  if (error) {
    return <ErrorMessage error={error.message} />;
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <PageTitle>{data.title}</PageTitle>
      <Section>
        <Subtitle>Ingredients:</Subtitle>
        <Text>{data.ingredients.join(', ')}</Text>
      </Section>
      <Section>
        <Subtitle>Description:</Subtitle>
        <Text>{data.description}</Text>
      </Section>
      <BackHomeButton as={Link} $variant="dark" to="/">
        Back to list
      </BackHomeButton>
    </PageWrapper>
  );
};

export default DetailPage;
