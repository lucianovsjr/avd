import styled from 'styled-components';
import { FaReply } from 'react-icons/fa';

export const ButtonGoBack = styled(FaReply).attrs({
  size: 25,
})`
  color: #1ab394;

  &:hover {
    cursor: pointer;
  }
`;
