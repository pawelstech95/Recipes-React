import styled from 'styled-components';

const Button = styled.button`
  padding: ${(props) => (props.$small ? '0.2rem 0.5rem' : '0.5rem 1rem')};
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors[props.$variant]};
  text-decoration: none;
  display: inline-block;
  font-size: 0.75rem;
  line-height: 1.2;
`;

export default Button;
