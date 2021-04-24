import styled from 'styled-components';

const FormError = styled.p`
  margin: 0.25rem 0 0 0;
  padding: 0;
  color: ${(props) => props.theme.colors.error};
  font-size: 0.75rem;
`;

export default FormError;
