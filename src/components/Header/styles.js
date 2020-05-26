import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

export const NavHeader = styled(Navbar).attrs({
  expand: 'lg',
})`
  background-color: white;  
`;

export const Link = styled(Nav.Link)`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 0px;
  padding-bottom: 0px;

  svg {
    color: #4CAF50;
    display: block;
    margin: 0 auto;
  }  
`;