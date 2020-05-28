import styled from 'styled-components';
import { Navbar, Nav, Form } from 'react-bootstrap';

export const NavHeader = styled(Navbar).attrs({
  expand: 'md',
})`
  background-color: white;
  text-align: center;
  margin-bottom: 10px;

  svg { 
    color: #1ab394;
    /* centralizar img */
    display: block;
    margin: 0 auto;
  }
`;

export const Link = styled(Nav.Link)`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 0px;
  padding-bottom: 0px;
`;

export const FormYear = styled(Form.Group)`
  margin-bottom: 0;

  .custom-select { 
    &:focus {
      outline: none;
      box-shadow: none;
    }    
  }   
`;

export const Option = styled.option`
`;