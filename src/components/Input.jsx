import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.lightest};
  color: ${(props) => props.theme.colors.dark};
  font: normal 1rem 'Lato', sans-serif;
  width: 100%;
  display: block;
  outline: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.brand};
  }
`;

export const Textarea = styled(Input).attrs({ as: 'textarea' })`
  height: 80px;
`;

export default Input;
