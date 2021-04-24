import React from 'react';
import styled from 'styled-components';
import Recipe from './Recipe';

const Wrapper = styled.ul`
  padding: 0;
  margin: 2rem 0;
  border: 1px solid ${(props) => props.theme.colors.lightest};
  list-style: none;
`;

const List = ({ data, handleRemove }) => {
  const recipes = data.map((recipe) => (
    <Recipe
      key={recipe.id}
      id={recipe.id}
      title={recipe.title}
      ingredients={recipe.ingredients}
      description={recipe.description}
      handleRemove={() => handleRemove(recipe.id)}
    />
  ));

  return <Wrapper>{recipes}</Wrapper>;
};

export default List;
