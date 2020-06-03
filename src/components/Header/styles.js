import styled from 'styled-components';
import { Navbar, Form } from 'react-bootstrap';
import { Link as LinkRouter } from 'react-router-dom';

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

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 0px;
  padding-bottom: 0px;

  &:hover {
    color: black;
    text-decoration: none;
  }
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