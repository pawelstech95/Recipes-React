import styled from 'styled-components';

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.dark};
  display: block;
  margin-bottom: 0.5rem;
`;

export default Label;
