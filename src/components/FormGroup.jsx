import styled from 'styled-components';

const FormGroup = styled.div`
  display: block;

  & + & {
    margin-top: 1rem;
  }
`;

export default FormGroup;
