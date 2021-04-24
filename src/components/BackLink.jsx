import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BackLink = styled(Link)`
  color: ${(props) => props.theme.colors.light};
  text-decoration: none;
`;

export default BackLink;
